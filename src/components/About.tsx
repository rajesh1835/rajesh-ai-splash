import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  const education = [{
    degree: "B.Tech – Computer Science Engineering (AI&ML)",
    institution: "Sri Venkateswara College of Engineering and Technology, Chittoor",
    duration: "Nov 2022 – July 2026",
    grade: "CGPA: 8.6",
    status: "current"
  }, {
    degree: "Intermediate – MPC",
    institution: "Sri Chaitanya Junior College, Tirupathi",
    duration: "Jan 2020 – Apr 2022",
    grade: "Percentage: 88.83%",
    status: "completed"
  }];
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-button mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A highly motivated Engineering student specializing in{" "}
              <span className="text-primary font-semibold">Artificial Intelligence and Machine Learning</span>, 
              expected to graduate in 2026. Eager to apply and develop my skills in this rapidly evolving field.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My coursework has provided a strong foundation in AI and ML principles, and I am keen on 
              contributing to innovative projects. I am also interested in exploring opportunities to 
              enhance my practical knowledge and contribute to a dynamic team.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">8.6</div>
                  <div className="text-sm text-muted-foreground">Current CGPA</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">2026</div>
                  <div className="text-sm text-muted-foreground">Expected Graduation</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-card transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-3 h-3 rounded-full mt-2 ${edu.status === 'current' ? 'bg-primary animate-pulse' : 'bg-secondary'}`}></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <span className={`text-xs px-2 py-1 rounded-full ${edu.status === 'current' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                            {edu.status === 'current' ? 'In Progress' : 'Completed'}
                          </span>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{edu.duration}</span>
                          <span className="text-sm font-medium text-primary">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;