import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import "katex/dist/katex.min.css";  // Required for math rendering
import "prism-themes/themes/prism-one-dark.css";  // Syntax highlighting theme

const MarkdownRenderer = ({ markdownPath }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(markdownPath)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [markdownPath]);

  return (
    <div className="prose max-w-4xl mx-auto px-4">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypePrism]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
