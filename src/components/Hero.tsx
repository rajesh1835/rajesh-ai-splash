import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import profileImage from "@/assets/rajesh-profile.jpg";
import profileImage2 from "@/assets/r6.jpg";
const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    "AI/ML Enthusiast",
    "Data Science Intern", 
    "Problem Solver",
    "Future Innovator"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  const floatingIcons = [
    { icon: Github, position: "top-20 right-20", delay: "0s" },
    { icon: Linkedin, position: "top-40 right-32", delay: "0.5s" },
    { icon: Mail, position: "top-60 right-16", delay: "1s" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Floating Background Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} hidden lg:block`}
          style={{ animationDelay: item.delay }}
        >
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-float">
            <item.icon size={24} className="text-white/70" />
          </div>
        </div>
      ))}

      <div className="container mx-auto px-4 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                  Tarigonda Rajesh
                </span>
              </h1>
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <span className="text-xl md:text-2xl text-white/90 font-medium">
                  {taglines[currentTagline]}
                </span>
              </div>
              <p className="text-white/80 text-lg max-w-2xl">
                Engineering student specializing in AI &amp; ML, expected to graduate in 2026. 
                Passionate about creating innovative solutions and contributing to dynamic teams.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-accent hover:bg-white/90 hover:scale-105 transition-all shadow-float"
              >
                <ExternalLink className="mr-2" size={20} />
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-accent transition-all"
              >
                <Download className="mr-2" size={20} />
                Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-accent transition-all"
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://github.com/rajesh1835" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Github size={20} className="text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/tarigonda-rajesh-637b601bb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a 
                href="mailto:rajeshtarigonda@gmail.com"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Mail size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-float animate-float">
                <img 
                  src={profileImage2} 
                  alt="Tarigonda Rajesh" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Info Card */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-card animate-pulse-glow">
                <div className="text-sm font-semibold text-accent">AI/ML Student</div>
                <div className="text-xs text-muted-foreground">Available for Internships</div>
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs text-muted-foreground">Open to Connect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
