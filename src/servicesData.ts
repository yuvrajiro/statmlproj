import React from "react"; // ✅ Import React for JSX support
import { Brain, ChartBar, Calculator, Database, BookOpen } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: React.FC; // ✅ Use React.FC for functional components
  title: string;
  fullDescription: string;
  gradient: string;
}

export const servicesData: ServiceData[] = [  //  ✅ Explicitly type the array
  {
    slug: "statistical-consulting",
    icon: ChartBar, // ✅ Pass the icon component directly (no need for a function)
    title: "Statistical Consulting",
    fullDescription:
      "Our statistical consulting service provides deep insights into data-driven decision-making. We specialize in regression analysis, hypothesis testing, and statistical modeling to help businesses make informed choices based on quantitative data.",
    gradient: "from-blue-500 to-teal-400",
  },
  {
    slug: "mathematical-modeling",
    icon: Calculator,
    title: "Mathematical Modeling",
    fullDescription:
      "Mathematical modeling is key to solving complex problems. Our expertise in optimization, simulation, and stochastic models allows us to design precise and effective solutions tailored to your industry.",
    gradient: "from-purple-500 to-indigo-400",
  },
  {
    slug: "ai-ml-solutions",
    icon: Brain,
    title: "AI & ML Solutions",
    fullDescription:
      "Leverage artificial intelligence and machine learning to optimize workflows, automate decision-making, and uncover hidden insights in data. We build deep learning models and predictive algorithms customized for your business.",
    gradient: "from-orange-500 to-red-400",
  },
  {
    slug: "data-science",
    icon: Database,
    title: "Data Science Advisory",
    fullDescription:
      "Our data science advisory services transform raw data into meaningful insights. From big data analytics to predictive modeling, we help organizations make data-driven strategic decisions.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    slug: "academic-support",
    icon: BookOpen,
    title: "Academic Support",
    fullDescription:
      "Get expert guidance for research projects, technical paper reviews, and academic writing. We assist students and professionals in crafting high-quality research with strong statistical foundations.",
    gradient: "from-cyan-500 to-blue-400",
  },
];