import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, MapPin, Download } from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/lonewolf235",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/lonewolf235",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/_me_Prakash",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:prakashvstomar@gmail.com",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Let's Connect</h2>
            <div className="section-divider" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Email */}
          <a
            href="mailto:prakashvstomar@gmail.com"
            className="text-2xl sm:text-3xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            prakashvstomar@gmail.com
          </a>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-8 mb-8">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  title={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Resume download */}
          <a
            href="/Prakash_Tomar_Resume.pdf"
            download
            className="btn-hero inline-flex items-center gap-2 mb-8"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          {/* Location badge */}
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            Gandhinagar, India · Open to senior AI/ML roles
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/50 mt-16 pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prakash V.S. Tomar. Built with React, TypeScript,
            and Tailwind CSS. AI powered by Gemini.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
