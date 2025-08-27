import { Link } from "react-router-dom";
import { blogPosts } from "@/blogPosts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Research Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Insights and findings from statistical machine learning research, data science, and mathematical modeling.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Link key={index} to={`/blogs/${post.slug}`} className="block group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-slate-200 hover:border-slate-300">
              {/* Image */}
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={`Cover image for blog post: ${post.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6">
                {/* Category Tag */}
                <Badge variant="secondary" className="mb-3 text-xs">
                  {post.category}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground leading-tight mb-3 group-hover:text-slate-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 overflow-hidden" style={{ 
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {post.excerpt}
                </p>

                {/* Keywords */}
                {Array.isArray(post.keywords) && post.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.keywords.slice(0, 3).map((keyword: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                    {post.keywords.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.keywords.length - 3} more
                      </Badge>
                    )}
                  </div>
                )}
              </CardContent>

              {/* Footer */}
              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
