import { ArrowRight, Github, Linkedin, Mail, FileText, BookOpen, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Home() {
  const expertise = [
    "Machine Learning & AI",
    "Statistical Analysis", 
    "Survival Analysis",
    "Time Series Forecasting",
    "Mathematical Modeling",
    "Data Science"
  ];

  const currentPositions = [
    "PhD Scholar @ IIT Guwahati",
    "Math Expert @ ByteDance", 
    "AI Trainer @ Turing",
    "Founder @ LabTenX"
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-background flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-light text-foreground leading-tight">
                  Rahul Goswami
                </h1>
                <p className="text-xl text-muted-foreground font-light">
                  PhD Scholar in Mathematics & Statistical Machine Learning
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Bridging theoretical mathematics with practical AI solutions. 
                  Specializing in survival analysis, decision forests, and advanced statistical algorithms.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {currentPositions.map((position, index) => (
                  <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                    {position}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <Button className="bg-primary text-primary-foreground hover:opacity-90">
                  View Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  Download CV
                  <FileText className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex space-x-6">
                <a href="https://github.com/yuvrajiro" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/yuvrajiro/" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:rahul.goswami.131997@gmail.com" className="text-muted-foreground hover:text-foreground">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="http://www.statml.in" className="text-muted-foreground hover:text-foreground">
                  <BookOpen className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Expertise */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-foreground">Areas of Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((skill, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg bg-card">
                    <p className="text-sm text-card-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Education & Qualifications</h2>
          
          <div className="space-y-8">
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">PhD in Mathematics</h3>
                <p className="text-muted-foreground">Indian Institute of Technology, Guwahati • 2021 - Present</p>
                <p className="text-sm">GPA: 8.76/10 • Senior Research Fellow</p>
                <p className="text-sm text-muted-foreground">
                  Coursework: Probability Theory, Real Analysis, Linear Algebra, Advanced ML, Statistical Algorithms
                </p>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">M.Sc. Statistics and Computing</h3>
                <p className="text-muted-foreground">Banaras Hindu University • 2018 - 2020</p>
                <p className="text-sm">GPA: 8.4/10 • 84 Credits</p>
                <p className="text-sm text-muted-foreground">
                  Specialized in Bayesian statistics, computational statistics, regression, and survival analysis
                </p>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">B.Sc. Statistics and Computer Science</h3>
                <p className="text-muted-foreground">Deen Dayal Upadhyaya Gorakhpur University • 2015 - 2018</p>
                <p className="text-sm">First Division Honors • Mathematics (2 years)</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Research & Publications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-medium">Published Research</h3>
                </div>
                <h4 className="font-medium">Shape Penalized Decision Forests for Imbalanced Data Classification</h4>
                <p className="text-sm text-muted-foreground">
                  Novel SVR regularization technique for handling imbalanced datasets, 
                  improving true positive rate and F-measure over traditional methods.
                </p>
                <a href="https://ieeexplore.ieee.org/abstract/document/11003049" 
                   className="text-primary text-sm hover:underline">
                  View Publication →
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-medium">Open Source Packages</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm">imbalanced-spdf</h4>
                    <p className="text-xs text-muted-foreground">Shape Penalized Decision Forests for imbalanced datasets</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">cobsurv</h4>
                    <p className="text-xs text-muted-foreground">Combined regression strategy for survival analysis</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">fastkme</h4>
                    <p className="text-xs text-muted-foreground">Faster Kaplan-Meier Estimator implementation</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-6">Let's Collaborate</h2>
          <p className="text-lg mb-8 opacity-90">
            Looking for expertise in statistical machine learning, survival analysis, or AI research? 
            Let's discuss how we can work together.
          </p>
          <Button variant="secondary" size="lg">
            Get In Touch
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
