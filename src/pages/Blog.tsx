import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Blog() {
  const posts = [
    {
      title: "Fast Kaplan-Meier Estimation",
      excerpt: "A guide to efficiently compute survival probabilities using the Kaplan-Meier estimator.",
      author: "Rahul Goswami",
      date: "2024-01-22",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
      category: "Statistics",
      slug: "kmjit"
    },
    {
      title: "Deep Learning in Healthcare",
      excerpt: "Exploring how deep learning is revolutionizing medical diagnosis and patient care.",
      author: "Dr. Michael Zhang",
      date: "2024-03-10",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
      category: "AI/ML",
      slug: "deep-learning-healthcare"
    },
    {
      title: "Optimization Techniques for Supply Chain",
      excerpt: "Advanced mathematical methods for optimizing supply chain operations.",
      author: "Dr. Alex Kumar",
      date: "2024-03-05",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
      category: "Mathematics",
      slug: "optimization-supply-chain"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Blog
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Insights and articles from our experts
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-teal-600 mb-2">
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-500">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    By {post.author} • {new Date(post.date).toLocaleDateString()}
                  </div>
                  <Link to={`/blogs/${post.slug}`}>
                    <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
