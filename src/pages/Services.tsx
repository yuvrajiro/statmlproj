
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Brain, Code, GraduationCap, TrendingUp } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <TrendingUp className="w-7 h-7 text-primary" />, title: 'Survival Analysis',
      description: 'Kaplan-Meier, Cox regression, and custom survival models for research and industry.'
    },
    {
      icon: <Brain className="w-7 h-7 text-primary" />, title: 'Statistical Machine Learning',
      description: 'Decision forests, ensemble methods, and imbalanced data solutions.'
    },
    {
      icon: <BookOpen className="w-7 h-7 text-primary" />, title: 'AI & Deep Learning',
      description: 'LLM research, neural networks, NLP, and model optimization.'
    },
    {
      icon: <Code className="w-7 h-7 text-primary" />, title: 'Open Source Development',
      description: 'Python package development and production-ready ML libraries.'
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-primary" />, title: 'Academic Consultation',
      description: 'Research collaboration, paper review, and statistical guidance.'
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-foreground mb-4">Services & Expertise</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized research and consulting in statistical machine learning, survival analysis, and AI.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <Card key={i} className="p-6 flex flex-col items-start gap-4">
              {service.icon}
              <h3 className="text-lg font-medium text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </Card>
          ))}
        </div>
        <section className="bg-secondary/30 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-medium text-center mb-8">Current Research Focus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Published Work</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Shape Penalized Decision Forests (IEEE)</li>
                <li>• Surface-to-Volume Regularization</li>
                <li>• Imbalanced Dataset Classification</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Under Review</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• MART: Moving Average Randomized Tree</li>
                <li>• Concordance-based Survival Cobra</li>
                <li>• Integrated Brier Score Methods</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-medium mb-8">Open Source Contributions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-medium mb-2">imbalanced-spdf</h3>
              <p className="text-sm text-muted-foreground mb-3">Shape Penalized Decision Forests for imbalanced datasets</p>
              <a href="https://pypi.org/project/imbalanced-spdf/" className="text-primary text-sm hover:underline">View on PyPI</a>
            </Card>
            <Card className="p-6">
              <h3 className="font-medium mb-2">cobsurv</h3>
              <p className="text-sm text-muted-foreground mb-3">Combined regression strategy for survival analysis</p>
              <a href="https://pypi.org/project/cobsurv/" className="text-primary text-sm hover:underline">View on PyPI</a>
            </Card>
            <Card className="p-6">
              <h3 className="font-medium mb-2">fastkme</h3>
              <p className="text-sm text-muted-foreground mb-3">Faster Kaplan-Meier Estimator implementation</p>
              <a href="https://github.com/yuvrajiro/fastkme" className="text-primary text-sm hover:underline">View on GitHub</a>
            </Card>
          </div>
        </section>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-medium mb-4">Interested in Collaboration?</h2>
          <p className="text-muted-foreground mb-6">Let's discuss how my expertise can help with your research or business needs.</p>
          <Button size="lg">Get In Touch <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
}
