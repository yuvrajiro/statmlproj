import { useParams } from "react-router-dom";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const BlogPost = () => {
  const { slug } = useParams();
        // Correct path for production
  const markdownPath = `src/blogs/${slug}.md`;
  console.log(`Blog Post Path: ${markdownPath}`);

  return (
    <div className="py-12">
      <MarkdownRenderer markdownPath={markdownPath} />
    </div>
  );
};

export default BlogPost;