import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, GraduationCap, Briefcase, Award, Users } from 'lucide-react';

export function About() {
  const skills = [
    { category: "Programming", items: ["Python (Expert)", "R (Expert)", "Julia (Intermediate)", "C (Basic)", "Lean (Intermediate)"] },
    { category: "ML Frameworks", items: ["PyTorch", "TensorFlow", "scikit-learn", "scikit-survival", "Hugging Face", "OpenAI GPT", "Meta LLaMA"] },
    { category: "Specializations", items: ["Survival Analysis", "Decision Forests", "Time Series", "Bayesian Statistics", "NLP", "Deep Learning", "LLM Research"] },
    { category: "Tools & Finance", items: ["Docker", "Git", "Financial Modeling", "Actuarial Science", "Risk Analysis"] }
  ];

  const experience = [
    {
      role: "Math Expert",
      company: "ByteDance",
      period: "March 2025 - Present",
      description: "Quality reviewer of PhD-level mathematics questions, ensuring accuracy and clarity in advanced mathematical content."
    },
    {
      role: "AI Trainer", 
      company: "Turing",
      period: "August 2024 - Feb 2025",
      description: "PhD Math Expert helping top companies build AGI systems and advanced AI solutions."
    },
    {
      role: "Research Intern",
      company: "Adobe",
      period: "May 2024 - August 2024", 
      description: "Conducted research on memorization, reasoning, and counting capabilities of LLMs. Developed metrics to optimize Adobe's in-house language models."
    },
    {
      role: "NLP Expert",
      company: "Allen Institute for AI (AI2)",
      period: "March 2024 - May 2024",
      description: "Applied advanced NLP techniques for historical research paper analysis, including entity recognition, relationship extraction, and summarization."
    },
    {
      role: "Research Collaborator",
      company: "Huntington's Disease Project (Iowa University)",
      period: "Dec 2022 - Present",
      description: "Applied Linear Mixed-Effects models to analyze disease progression data and identify covariates affecting Year to Onset."
    }
  ];

  const achievements = [
    "GATE Statistics - All India Rank 63",
    "IIT-JAM Mathematical Sciences - All India Rank 306", 
    "Operations Research NPTEL - Top 1%",
    "Published Research in IEEE",
    "MITx MicroMaster in Finance (In Progress)",
    "Institute of Actuaries India Member (IAI-32892)",
    "3 Open Source Python Packages",
    "Top Rated Plus Freelancer @ Upwork",
    "Founding Member @ LabTenX",
    "SAFIR Institute Affiliate (Sorbonne Abu Dhabi)"
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-foreground mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate researcher bridging theoretical mathematics with practical AI applications,
            specializing in statistical machine learning and survival analysis.
          </p>
        </div>

        {/* Personal Info */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-2xl font-medium mb-6 flex items-center">
              <Users className="mr-3 h-6 w-6 text-primary" />
              About Rahul Goswami
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a Senior Research Fellow at IIT Guwahati, currently pursuing my PhD in Mathematics 
                with a focus on Statistical Machine Learning. I'm also affiliated with Sorbonne University 
                Abu Dhabi's SAFIR (Sorbonne Abu Dhabi for Innovation and Research) Institute and am a 
                founding member of LabTenX.
              </p>
              <p>
                My professional experience spans top tech companies including ByteDance (as Math Expert), 
                Turing (AI Trainer), Adobe (Research Intern), and Allen Institute for AI (NLP Expert). 
                I specialize in survival analysis, decision forests, and large language model research, 
                with published work in IEEE and multiple open-source contributions.
              </p>
              <p>
                I'm also pursuing an MITx MicroMaster in Finance and hold certifications from the 
                Institute of Actuaries India. As a Top Rated Plus freelancer on Upwork, I help 
                organizations solve complex mathematical and AI challenges while contributing to 
                academic research through publications and open-source development.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-medium mb-4 flex items-center">
              <MapPin className="mr-3 h-5 w-5 text-primary" />
              Contact & Affiliations
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Primary Affiliation</p>
                <p className="text-muted-foreground">IIT Guwahati, Assam, India</p>
              </div>
              <div>
                <p className="font-medium">International Affiliation</p>
                <p className="text-muted-foreground">Sorbonne University Abu Dhabi</p>
              </div>
              <div>
                <p className="font-medium">Professional</p>
                <p className="text-muted-foreground">Institute of Actuaries, India (IAI-32892)</p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">rahul.goswami.131997@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">+91 9044725608</p>
              </div>
              <div>
                <p className="font-medium">Blog</p>
                <p className="text-muted-foreground">statml.in</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8 flex items-center">
            <GraduationCap className="mr-3 h-6 w-6 text-primary" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-medium mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8 flex items-center">
            <Briefcase className="mr-3 h-6 w-6 text-primary" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-primary">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-medium">{job.role}</h3>
                  <span className="text-sm text-muted-foreground">{job.period}</span>
                </div>
                <p className="font-medium text-primary mb-2">{job.company}</p>
                <p className="text-muted-foreground">{job.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-medium mb-8 flex items-center">
            <Award className="mr-3 h-6 w-6 text-primary" />
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-4 text-center">
                <p className="text-sm font-medium">{achievement}</p>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}