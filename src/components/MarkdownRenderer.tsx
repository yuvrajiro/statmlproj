import { useEffect, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import "katex/dist/katex.min.css";
import "prism-themes/themes/prism-one-dark.css";
import { cn } from "@/lib/utils";
import matter from 'gray-matter';
import { createElement } from 'react';

interface MarkdownRendererProps {
  markdownPath: string;
  className?: string;
}

interface Frontmatter {
  layout: string;
  title: string;
  tags: string[];
  category: string;
  share: boolean;
  comments: boolean;
  author_profile: boolean;
  author: string;
  classes: string;
}

const MarkdownRenderer = ({ markdownPath, className }: MarkdownRendererProps) => {
  const [content, setContent] = useState("");
  const [frontmatter, setFrontmatter] = useState<Frontmatter | null>(null);

  useEffect(() => {
    async function loadMarkdown() {
      try {
        // **DEBUGGING: Log the markdownPath**
        console.log("Attempting to fetch Markdown from:", markdownPath);

        const response = await fetch(markdownPath);

        // **Debugging: Log the response status**
        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const markdown = await response.text();

        // Parse frontmatter using gray-matter
        const { content: markdownContent, data } = matter(markdown);

        setContent(markdownContent);
        setFrontmatter(data as Frontmatter);

      } catch (error) {
        console.error("Error fetching or parsing Markdown:", error);
        setContent(`Error loading Markdown. Please check the path: ${markdownPath}`); // **Display path in error message**
        setFrontmatter(null);
      }
    }

    loadMarkdown();
  }, [markdownPath]);

  // Memoize the ReactMarkdown component for performance
  const markdownComponent = useMemo(() => {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypePrism]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4" {...props}/>,
          h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-8 mb-2" {...props}/>,
          p: ({node, ...props}) => <p className="text-base leading-relaxed mb-4" {...props}/>,
          code: ({node, ...props}) => <code className="font-family: monospace;
          background-color: #f0f0f0;
          padding: 2px 4px;
          border-radius: 4px;"{...props}/>,
        }}
      >
        {content}
      </ReactMarkdown>
    );
  }, [content]);

  return (
    <div className={cn("prose max-w-4xl mx-auto px-4", className)}>
      {/* Access Frontmatter data here */}
      {frontmatter && (
        <div>
          <h1>{frontmatter.title}</h1>
          <p>Category: {frontmatter.category}</p>
          <p>Author: {frontmatter.author}</p>
          {frontmatter.tags && (
            <ul>
              Tags:
              {frontmatter.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          )}
          {/* Render other frontmatter properties as needed */}
        </div>
      )}
      {markdownComponent}
    </div>
  );
};

export default MarkdownRenderer;