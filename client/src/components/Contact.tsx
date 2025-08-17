import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Code, MapPin, Phone, Send, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Hi Prakash,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.open(`mailto:prakashvstomar@gmail.com?subject=${subject}&body=${body}`, '_blank');
    
    toast({
      title: "Email client opened",
      description: "Your message has been prepared in your default email client.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/lonewolf235',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/lonewolf235',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/lonewolf235',
      color: 'hover:text-orange-500'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:prakashvstomar@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Let's Build Something Amazing
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next AI project or explore collaboration opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:prakashvstomar@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      prakashvstomar@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a 
                      href="tel:+918979790975" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 8979790975
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-muted text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Gandhinagar, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-card border hover:border-primary transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-data p-6 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Professional Resume</h4>
              <p className="text-muted-foreground mb-4">
                Download my complete resume with detailed experience, projects, and achievements.
              </p>
              <Button 
                onClick={() => window.open('mailto:prakashvstomar@gmail.com?subject=Resume Request', '_blank')}
                className="btn-hero w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Request Resume PDF
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elegant p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Project Collaboration Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input resize-none"
                  placeholder="Hi Prakash, I'd like to discuss a potential AI/ML project opportunity..."
                />
              </div>

              <Button type="submit" className="btn-hero w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              This form will open your email client. I'll respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;