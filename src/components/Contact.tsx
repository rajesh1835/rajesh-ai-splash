import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rajeshtarigonda@gmail.com",
      href: "mailto:rajeshtarigonda@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 93461 54179",
      href: "tel:+919346154179"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/rajesh1835"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/tarigonda-rajesh-637b601bb"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      <info.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors flex items-center gap-2"
                    >
                      <social.icon className="text-primary" size={24} />
                      <span className="text-sm font-medium text-foreground">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
