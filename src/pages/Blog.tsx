import { Link } from "react-router-dom";
import { blogPosts } from "@/blogPosts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function Blog() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Insights & research from AI, Mathematics, and Statistical experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl rounded-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="h-56 w-full object-cover rounded-t-xl"
              />

              <CardContent className="p-6">
                {/* Category Tag */}
                <Link to={`/blog/category/${post.category}`} className="block">
                <Badge className="bg-teal-500 text-white px-3 py-1 rounded-md text-xs uppercase font-medium tracking-wide">
                  {post.category}
                </Badge>
                </Link>

                {/* Title */}
                <h3 className="mt-3 text-2xl font-semibold text-gray-900 leading-tight hover:text-teal-600 transition duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Keywords (Tags) */}
                {/* Keywords - Clickable */}
                {Array.isArray(post.keywords) && post.keywords.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.keywords.map((keyword: string, idx: number) => (
                      <Link key={idx} to={`/blog/keyword/${keyword}`} className="cursor-pointer">
                        <Badge className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full hover:bg-teal-500 hover:text-white transition duration-200">
                          #{keyword}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </CardContent>

              {/* Footer */}
              <CardFooter className="flex items-center justify-between px-6 pb-4">
  <div className="flex items-center space-x-3">
    {/* Random Avatar for Author */}
    <img
      src={`https://api.dicebear.com/7.x/identicon/svg?seed=${post.author}`}
      alt={post.author}
      className="w-8 h-8 rounded-full border border-gray-300 shadow-sm"
    />

    {/* Author Name - Styled */}
    <div className="text-sm text-gray-600">
      By{" "}
      <Link
        to={`/blogs/author/${post.author}`}
        className="font-bold bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500 text-transparent bg-clip-text hover:underline transition-all duration-200"
      >
        {post.author}
      </Link>{" "}
      • {new Date(post.date).toLocaleDateString()}
    </div>
  </div>

  {/* Read More Button */}
  <Link to={`/blogs/${post.slug}`}>
    <Button variant="outline" className="text-teal-600 hover:text-white hover:bg-teal-600">
      Read More <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  </Link>
</CardFooter>

            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
