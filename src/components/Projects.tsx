import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Air Quality Prediction",
    description: "Developed a regression model to predict outcomes using various ML algorithms with high accuracy.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Streamlit"],
    github: "https://github.com/rajesh1835/Air-Quality-Prediction-.git",
    demo: "#"
  },

  {
    title: "Text Emotion Detection",
    description: "Developed a Machine Learning model for classifying the emotion from the text.",
    technologies: ["Python", "NLP", "NLTK", "Scikit-learn"],
    github: "https://github.com/rajesh1835/Text-Emotion-Detection.git",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "Modern responsive portfolio website built with React and TypeScript.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/rajesh1835/rajesh-ai-splash.git",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
