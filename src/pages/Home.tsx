import { Brain, ChartBar, Calculator, Database, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Home() {
  const services = [
    {
      icon: <ChartBar className="w-8 h-8 text-teal-600" />,
      title: "Statistical Consulting",
      description: "Expert analysis in regression, hypothesis testing, and data analysis"
    },
    {
      icon: <Calculator className="w-8 h-8 text-teal-600" />,
      title: "Mathematical Modeling",
      description: "Advanced optimization and stochastic models for complex problems"
    },
    {
      icon: <Brain className="w-8 h-8 text-teal-600" />,
      title: "AI & ML Solutions",
      description: "Custom machine learning models and deep learning implementations"
    },
    {
      icon: <Database className="w-8 h-8 text-teal-600" />,
      title: "Data Science Advisory",
      description: "Business analytics and predictive modeling expertise"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-teal-600" />,
      title: "Academic Support",
      description: "Research assistance and technical paper review services"
    }
  ];

  const caseStudies = [
    {
      title: "Retail Demand Forecasting",
      client: "Major E-commerce Platform",
      description: "Implemented advanced time series models to predict product demand, reducing stockouts by 35% and improving inventory efficiency.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600",
      tags: ["Time Series", "Machine Learning", "Retail"]
    },
    {
      title: "Healthcare Patient Flow Optimization",
      client: "Regional Hospital Network",
      description: "Developed a mathematical model for patient scheduling, reducing wait times by 40% and improving resource utilization.",
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=600",
      tags: ["Healthcare", "Optimization", "Analytics"]
    },
    {
      title: "Predictive Maintenance System",
      client: "Manufacturing Company",
      description: "Built an AI-powered system to predict equipment failures, resulting in 25% reduction in downtime and maintenance costs.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      tags: ["AI", "IoT", "Manufacturing"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Advanced Mathematical &</span>
                  <span className="block text-teal-600">AI Solutions for Business</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Expert PhD Scholars offering Statistical, Mathematical, and AI-driven solutions to optimize business processes.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <Button variant="default" className="bg-teal-600 hover:bg-teal-700">
                    Request a Consultation
                  </Button>
                  <Button variant="outline" className="mt-3 sm:mt-0 sm:ml-3">
                    Explore Our Work
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-50 mx-auto">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-500 text-center">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Case Studies
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Real-world impact through data-driven solutions
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm text-teal-600">
                    {study.client}
                  </p>
                  <p className="mt-3 text-gray-500">
                    {study.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-medium bg-teal-50 text-teal-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="mt-4 text-teal-600 hover:text-teal-700">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}