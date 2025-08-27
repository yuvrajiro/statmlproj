import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, FileText, Package } from 'lucide-react';

export function Research() {
  const publishedPapers = [
    {
      title: "Shape Penalized Decision Forests for Imbalanced Data Classification",
      status: "Published",
      journal: "IEEE",
      description: "Classification trees often yield fragmented minority boundaries under imbalanced data. The authors propose a surface-to-volume ratio (SVR) regularization that penalizes decision-set complexity, optimized via a greedy breadth-first splitting algorithm analogous to CART.",
      link: "https://ieeexplore.ieee.org/abstract/document/11003049",
      year: "2024"
    }
  ];

  const papersUnderReview = [
    {
      title: "MART: Moving Average Randomized Tree",
      status: "Accepted",
      journal: "Springer Machine Learning",
      description: "A randomized CAGR-based split method for predicting future trends in the stock market.",
      year: "2024",
      note: "To be Published, Preprint not available"
    },
    {
      title: "Survival: A Different Approach",
      status: "Under Review",
      description: "Developed and implemented novel data-dependent techniques to aggregate survival trees, enhancing the accuracy of survival estimates for patients.",
      year: "2024"
    },
    {
      title: "Concordance-based Survival Cobra with Regression Type Weak Learners",
      status: "Under Review",
      description: "A novel survival analysis method, utilizing concordance-based techniques in combination with regression type weak learners.",
      link: "https://arxiv.org/abs/2209.11919",
      year: "2024"
    },
    {
      title: "Integrated Brier Score based Survival Cobra - A Regression Based Approach",
      status: "Under Review",
      description: "An innovative survival analysis method using an integrated Brier score-based approach combined with regression techniques.",
      link: "https://arxiv.org/abs/2210.12006",
      year: "2024"
    }
  ];

  const packages = [
    {
      name: "imbalanced-spdf",
      title: "Shape Penalized Decision Forests",
      description: "Shape Penalized Decision Forests, for training ensemble classifiers tailored for imbalanced datasets. Provides SPBaDF and SPBoDF implementations with Surface-to-Volume Regularization (SVR).",
      pypiLink: "https://pypi.org/project/imbalanced-spdf/",
      docsLink: "https://imbalanced-spdf.readthedocs.io/en/latest/",
      technologies: ["Python", "Machine Learning", "Imbalanced Data"]
    },
    {
      name: "cobsurv",
      title: "Combined Regression Strategy Survival",
      description: "Part of the PBSA (Proximity-Based Survival Analysis) research project. Contains combined regression strategy-based models for survival analysis with production-ready implementations.",
      pypiLink: "https://pypi.org/project/cobsurv/",
      docsLink: "https://cobsurv.readthedocs.io/en/latest/",
      technologies: ["Python", "Survival Analysis", "Regression"]
    },
    {
      name: "fastkme",
      title: "Fast Kaplan Meier Estimator",
      description: "A faster Kaplan-Meier Estimator, specially created for working with a nonparametric Estimator. Includes weighted Kaplan-Meier curve functionality.",
      githubLink: "https://github.com/yuvrajiro/fastkme",
      blogLink: "https://www.statml.in/2024-03-11-faster-kme/",
      technologies: ["Python", "Statistics", "Survival Analysis"]
    }
  ];

  const readyTensorProjects = [
    {
      name: "rt_forecasting_TSMixer",
      title: "TSMixer Time Series Forecasting",
      description: "Advanced time-series forecasting models using the TSMixer architecture",
      githubLink: "https://github.com/yuvrajiro/rt_forecasting_TSMixer",
      license: "Apache License 2.0"
    },
    {
      name: "rt_forecasting_PatchMixer",
      title: "PatchMixer Forecasting",
      description: "PatchMixer model implementation for time series forecasting",
      githubLink: "https://github.com/yuvrajiro/rt_forecasting_PatchMixer",
      license: "Apache License 2.0"
    },
    {
      name: "rt_mc_class_catboost",
      title: "CatBoost Multiclass Classifier",
      description: "CatBoost model implementation for multiclass classification",
      githubLink: "https://github.com/yuvrajiro/rt_mc_class_catboost"
    },
    {
      name: "rt_adaboost_binary_classifier",
      title: "AdaBoost Binary Classifier",
      description: "AdaBoost algorithm implementation for binary classification",
      githubLink: "https://github.com/yuvrajiro/rt_adaboost_binary_classifier",
      license: "MIT License"
    },
    {
      name: "rt_xgboost_binary_classifier",
      title: "XGBoost Binary Classifier",
      description: "XGBoost model implementation for binary classification",
      githubLink: "https://github.com/yuvrajiro/rt_xgboost_binary_classifier",
      license: "MIT License"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Research Portfolio</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Comprehensive overview of research publications, open-source packages, and ongoing projects 
          in machine learning, survival analysis, and statistical computing.
        </p>
      </div>

      {/* Affiliations */}
      {/* <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Building className="mr-2" />
          Current Affiliations
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {affiliations.map((affiliation, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{affiliation.institution}</CardTitle>
                <p className="text-sm text-muted-foreground">{affiliation.role}</p>
              </CardHeader>
              <CardContent>
                {affiliation.department && (
                  <p className="text-sm text-muted-foreground mb-2">{affiliation.department}</p>
                )}
                {affiliation.id && (
                  <Badge variant="outline" className="text-xs">{affiliation.id}</Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Research Areas */}
      {/* <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <BookOpen className="mr-2" />
          Research Areas
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {researchAreas.map((area, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{area.area}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Published Papers */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <FileText className="mr-2" />
          Published Research Papers
        </h2>
        <div className="space-y-6">
          {publishedPapers.map((paper, index) => (
            <Card key={index} className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{paper.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      {paper.status}
                    </Badge>
                    <Badge variant="outline">{paper.year}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{paper.journal}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{paper.description}</p>
                {paper.link && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={paper.link} target="_blank" rel="noopener noreferrer">
                      View Paper <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Papers Under Review */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <FileText className="mr-2" />
          Papers Under Review & Accepted
        </h2>
        <div className="space-y-6">
          {papersUnderReview.map((paper, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{paper.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge 
                      variant="default" 
                      className={paper.status === 'Accepted' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}
                    >
                      {paper.status}
                    </Badge>
                    <Badge variant="outline">{paper.year}</Badge>
                  </div>
                </div>
                {paper.journal && (
                  <p className="text-sm text-muted-foreground">{paper.journal}</p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{paper.description}</p>
                {paper.note && (
                  <p className="text-sm text-blue-600 mb-4 italic">{paper.note}</p>
                )}
                {paper.link && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={paper.link} target="_blank" rel="noopener noreferrer">
                      View Preprint <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Open Source Packages */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Package className="mr-2" />
          Open Source Packages
        </h2>
        <div className="grid lg:grid-cols-1 gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{pkg.title}</CardTitle>
                    <p className="text-sm text-muted-foreground font-mono">{pkg.name}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {pkg.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {pkg.pypiLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pkg.pypiLink} target="_blank" rel="noopener noreferrer">
                        PyPI <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {pkg.docsLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pkg.docsLink} target="_blank" rel="noopener noreferrer">
                        Documentation <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {pkg.githubLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pkg.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                  {pkg.blogLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pkg.blogLink} target="_blank" rel="noopener noreferrer">
                        Blog Post <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Ready Tensor Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Github className="mr-2" />
          Ready Tensor ML Projects
        </h2>
        <p className="text-muted-foreground mb-6">
          Machine Learning models developed during my tenure as ML Engineer at Ready Tensor, 
          focusing on production-ready, dockerized ML implementations.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {readyTensorProjects.map((project, index) => (
            <Card key={index} className="border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  {project.license && (
                    <Badge variant="outline" className="text-xs">{project.license}</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground font-mono">{project.name}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Repository
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-slate-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Research Collaboration & Academic Partnership</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Open to research collaborations, academic partnerships, and discussions on 
          machine learning, survival analysis, and statistical computing innovations.
          <br />
          <span className="text-sm mt-2 block">
            Senior Research Fellow @ IIT Guwahati | Sorbonne Abu Dhabi SAFIR Affiliate | MIT Student
          </span>
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="/contact">Academic Collaboration</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/blog">Research Blog</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
