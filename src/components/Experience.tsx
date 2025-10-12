import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Science Intern",
    company: "Oasis Infobyte",
    duration: "June 2024 - July 2024",
    location: "Remote",
    description: "Worked on machine learning models and data analysis projects, contributing to real-world applications.",
    skills: ["Python", "Machine Learning", "Data Analysis", "Pandas", "Scikit-learn"]
  },
  {
    title: "AI/ML Research",
    company: "Academic Projects",
    duration: "2023 - Present",
    location: "University",
    description: "Conducting research in artificial intelligence and machine learning, focusing on practical implementations.",
    skills: ["Deep Learning", "Neural Networks", "TensorFlow", "Research"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and hands-on experience in the field
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 ml-0 md:ml-16">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 ml-0 md:ml-16">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
