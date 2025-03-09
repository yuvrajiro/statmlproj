import { Link } from 'react-router-dom';
import { Brain, ChartBar, Calculator, Database, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      icon: <ChartBar className="w-12 h-12 text-teal-600" />,
      title: "Statistical Consulting",
      description: "Expert analysis in regression, hypothesis testing, and data analysis",
      link: "/services/statistical-consulting"
    },
    {
      icon: <Calculator className="w-12 h-12 text-teal-600" />,
      title: "Mathematical Modeling",
      description: "Advanced optimization and stochastic models for complex problems",
      link: "/services/mathematical-modeling"
    },
    {
      icon: <Brain className="w-12 h-12 text-teal-600" />,
      title: "AI & ML Solutions",
      description: "Custom machine learning models and deep learning implementations",
      link: "/services/ai-ml-solutions"
    },
    {
      icon: <Database className="w-12 h-12 text-teal-600" />,
      title: "Data Science Advisory",
      description: "Business analytics and predictive modeling expertise",
      link: "/services/data-science"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-teal-600" />,
      title: "Academic Support",
      description: "Research assistance and technical paper review services",
      link: "/services/academic-support"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-teal-50 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <Button variant="ghost" className="mt-4 text-teal-600 hover:text-teal-700 p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
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