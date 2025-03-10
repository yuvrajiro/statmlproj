// src/pages/BlogPost.tsx
import { useParams } from "react-router-dom";
import MarkdownRenderer from "@/components/MarkdownRenderer"; // Keep this import

const BlogPost = () => {
  const { slug } = useParams();

  // New PATH
  const markdownPath = `/blogs/${slug}.md`; // path from public is root, so there is no need for ../public

  return (
    <div className="py-12">
      <MarkdownRenderer markdownPath={markdownPath} />
    </div>
  );
};

export default BlogPost;