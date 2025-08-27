import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-foreground text-lg font-medium">Rahul Goswami</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              PhD Scholar in Mathematics specializing in Statistical Machine Learning, 
              Survival Analysis, and AI research.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yuvrajiro" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/yuvrajiro/" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:rahul.goswami.131997@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="http://www.statml.in" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Blog"
              >
                <BookOpen className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-foreground text-lg font-medium mb-4">Research Areas</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Survival Analysis</li>
              <li className="text-muted-foreground text-sm">Decision Forests</li>
              <li className="text-muted-foreground text-sm">Time Series Forecasting</li>
              <li className="text-muted-foreground text-sm">Bayesian Statistics</li>
              <li className="text-muted-foreground text-sm">Machine Learning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground text-lg font-medium mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">IIT Guwahati, Assam, India</p>
              <p className="text-muted-foreground text-sm">rahul.goswami.131997@gmail.com</p>
              <p className="text-muted-foreground text-sm">+91 9044725608</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Rahul Goswami. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}