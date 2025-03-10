import { Link } from 'react-router-dom';
import { Brain, ChartBar, Calculator, Database, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      icon: <ChartBar className="w-14 h-14 text-white" />,
      title: "Statistical Consulting",
      description: "Leverage advanced statistical methodologies for data-driven decision-making. Our expertise includes regression analysis, hypothesis testing, and in-depth data analytics tailored to your business needs.",
      link: "/services/statistical-consulting",
      gradient: "from-blue-500 to-teal-400"
    },
    {
      icon: <Calculator className="w-14 h-14 text-white" />,
      title: "Mathematical Modeling",
      description: "We develop sophisticated mathematical models for optimization, simulation, and stochastic processes to solve complex industry challenges with precision and efficiency.",
      link: "/services/mathematical-modeling",
      gradient: "from-purple-500 to-indigo-400"
    },
    {
      icon: <Brain className="w-14 h-14 text-white" />,
      title: "AI & ML Solutions",
      description: "Custom machine learning models, deep learning algorithms, and AI-driven solutions tailored for predictive analytics, automation, and intelligent data processing.",
      link: "/services/ai-ml-solutions",
      gradient: "from-orange-500 to-red-400"
    },
    {
      icon: <Database className="w-14 h-14 text-white" />,
      title: "Data Science Advisory",
      description: "Strategic data science consulting, predictive modeling, and big data analytics to transform raw data into actionable business intelligence.",
      link: "/services/data-science",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: <BookOpen className="w-14 h-14 text-white" />,
      title: "Academic Support",
      description: "Comprehensive academic assistance, including research guidance, statistical analysis for papers, and technical review for high-impact publications.",
      link: "/services/academic-support",
      gradient: "from-cyan-500 to-blue-400"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Expertise & Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock the full potential of mathematics, AI, and statistical insights to drive innovation and business transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
              {/* Icon with Gradient Background */}
              <div className={`absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-r ${service.gradient} opacity-20 blur-3xl`} />
              <CardContent className="relative z-10 flex flex-col p-8">
                {/* Icon */}
                <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} shadow-md`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <div className="mt-6">
                <Link to={service.link}>
              <Button variant="outline" className="group-hover:bg-teal-600 group-hover:text-white transition duration-300">
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
