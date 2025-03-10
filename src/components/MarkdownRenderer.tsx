import { useEffect, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import matter from "gray-matter";
import "katex/dist/katex.min.css";
import "prism-themes/themes/prism-one-dark.css";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

interface MarkdownRendererProps {
  markdownPath: string;
  className?: string;
}

interface Frontmatter {
  layout?: string;
  title: string;
  tags?: string[];
  category?: string;
  share?: boolean;
  comments?: boolean;
  author_profile?: boolean;
  author?: string;
  classes?: string;
  cover_image?: string;  // Optional cover image
}

const MarkdownRenderer = ({ markdownPath, className }: MarkdownRendererProps) => {
  const [content, setContent] = useState<string>("");
  const [frontmatter, setFrontmatter] = useState<Frontmatter | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadMarkdown() {
      try {
        console.log("Fetching Markdown from:", markdownPath);
        const response = await fetch(markdownPath);
        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const markdown = await response.text();
        const { content: markdownContent, data } = matter(markdown);

        setContent(markdownContent);
        setFrontmatter(data as Frontmatter);
      } catch (error) {
        console.error("Error fetching or parsing Markdown:", error);
        setContent(`Error loading Markdown. Please check the path: ${markdownPath}`);
        setFrontmatter(null);
      } finally {
        setLoading(false);
      }
    }

    loadMarkdown();
  }, [markdownPath]);

  // Memoized Markdown rendering for performance
  const markdownComponent = useMemo(() => {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypePrism]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-extrabold leading-tight mt-6 mb-4 text-gray-900" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-semibold mt-8 mb-3 text-gray-800" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-base leading-relaxed mb-4 text-gray-700" {...props} />
          ),
          code: ({ node, ...props }) => (
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md font-mono" {...props} />
          ),
          pre: ({ node, ...props }) => (
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    );
  }, [content]);

  // Generate a random Unsplash image if cover_image is not provided
  const backgroundImage = frontmatter?.cover_image || `https://unsplash.com/photos/a-close-up-of-a-pile-of-candy-eggs-XVHPGx8Rpeg`;

  return (
    <div className={cn("max-w-4xl mx-auto px-6 py-10 bg-white shadow-lg rounded-xl", className)}>
      {/* Loading Skeleton */}
      {loading ? (
        <div className="animate-pulse">
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-4 w-1/4 mb-4" />
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>
      ) : (
        <>
          {/* Frontmatter (Title, Category, Tags, Author) with Aesthetic Background */}
          {frontmatter && (
            <div
              className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Content Inside the Background */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-4xl font-extrabold">{frontmatter.title}</h1>
                {frontmatter.category && (
                  <Badge className="mt-3 bg-teal-500 text-white px-4 py-2 text-sm uppercase font-semibold">
                    {frontmatter.category}
                  </Badge>
                )}
                <p className="mt-2 text-gray-300 text-sm">
                  By <span className="font-medium">{frontmatter.author || "Unknown Author"}</span>
                </p>

                {frontmatter.tags && frontmatter.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {frontmatter.tags.map((tag, index) => (
                    <Link key={index} to={`/blog/keyword/${tag}`} className="cursor-pointer">
                      <Badge key={index} className="bg-white/20 text-white px-3 py-1 text-xs rounded-full hover:bg-teal-500 transition">
                        #{tag}
                    </Badge>
                    </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <Separator className="my-6" />

          {/* Render Markdown Content */}
          {markdownComponent}
        </>
      )}
    </div>
  );
};

export default MarkdownRenderer;




