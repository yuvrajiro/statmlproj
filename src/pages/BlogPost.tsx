import { useParams } from "react-router-dom";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const BlogPost = () => {
  const { slug } = useParams(); // Extracts blog slug from URL

  return (
    <div className="py-12">
      <MarkdownRenderer markdownPath={`/blogs/${slug}.md`} />
    </div>
  );
};

export default BlogPost;
