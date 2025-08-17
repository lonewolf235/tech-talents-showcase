import { Award, Trophy, BookOpen, Users, Database } from "lucide-react";

const Accomplishments = () => {
  const responsibilities = [
    {
      icon: <Users className="w-5 h-5" />,
      role: "Machine Learning Co-Lead",
      organization: "IEM Coding Club",
      location: "Kolkata, India",
      period: "Aug 2022 - Present",
      description: "Conducted DS/ML workshops, mentoring 300+ students in applied AI",
      achievements: ["Mentored 300+ students", "Led applied AI workshops", "Ongoing leadership role"]
    },
    {
      icon: <Users className="w-5 h-5" />,
      role: "AI/ML Core Member",
      organization: "GDSC IEM",
      location: "Kolkata, India", 
      period: "Aug 2022 - Jul 2023",
      description: "Facilitated ML workshops addressing real-world problems with 210+ participants",
      achievements: ["210+ workshop participants", "Real-world problem solving", "Community building"]
    },
    {
      icon: <Database className="w-5 h-5" />,
      role: "Database Lead",
      organization: "IEM-UEM Marathon",
      location: "Kolkata, India",
      period: "Feb 2024",
      description: "Managed backend systems for marathon with 1500+ participants",
      achievements: ["1500+ participants managed", "Backend system architecture", "Event tech leadership"]
    },
    {
      icon: <Database className="w-5 h-5" />,
      role: "Database Lead & Advisor",
      organization: "Diversion 2k23 & 2k24 (MLH Sponsored)",
      location: "Kolkata, India",
      period: "2023 - 2024",
      description: "Led DB architecture and tech advisory for national-level AI hackathons",
      achievements: ["National-level hackathons", "MLH sponsorship", "Technical advisory"]
    }
  ];

  const certifications = [
    {
      title: "Deploy Agentspace Skill Badge",
      issuer: "Google Cloud",
      year: "2025",
      description: "Demonstrated ability to launch enterprise-ready AI agents using Gemini and cloud APIs",
      credentialLink: "#",
      featured: true
    },
    {
      title: "Prompt Engineering Bootcamp",
      issuer: "Udemy",
      year: "2025", 
      description: "Completed 22.5 hours of hands-on training by Mike Taylor & James Phoenix",
      credentialLink: "#",
      featured: true
    },
    {
      title: "Data Science Math Skills",
      issuer: "Duke University (Coursera)",
      year: "2023",
      description: "Mathematical foundations for data science and machine learning",
      credentialLink: "#",
      featured: false
    }
  ];

  const awards = [
    {
      title: "GATE DA 2024 - AIR 2552",
      description: "All India Rank 2552 in Graduate Aptitude Test in Engineering Data Science & AI",
      year: "2024",
      category: "Academic Excellence",
      featured: true
    },
    {
      title: "Amazon ML Challenge 2023",
      description: "Ranked 301st among 4898 teams nationally",
      year: "2023", 
      category: "Competition",
      featured: true
    },
    {
      title: "Winner - Internal Hackathon Kavach 2023",
      description: "Won internal hackathon at IEM Kolkata",
      year: "2023",
      category: "Hackathon",
      featured: false
    },
    {
      title: "Finalist - Toastmasters Table Topics",
      description: "Top 6 finalist in District 41",
      year: "2023",
      category: "Communication",
      featured: false
    },
    {
      title: "Top 10 Finalist - Intelligex ML Hackathon",
      description: "IEM Innovacion 2022",
      year: "2022",
      category: "Competition",
      featured: false
    },
    {
      title: "Diploma in Indian Classical Music (Vocal)",
      description: "Completed formal training in Indian classical music",
      year: "2019",
      category: "Cultural",
      featured: false
    }
  ];

  const publications = [
    {
      title: "Machine Learning - A New Perspective",
      type: "Review Paper",
      venue: "IEMPOWER 2022",
      description: "Presented introductory topics of Machine Learning and the selection between inference VS predictability",
      status: "In Publication by AIP Publishing",
      year: "2022"
    }
  ];

  return (
    <section id="accomplishments" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Accomplishments
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leadership roles, certifications, publications, and achievements that showcase professional growth and expertise.
          </p>
        </div>

        {/* Roles and Responsibilities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-10 text-center">
            Leadership & Responsibilities
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {responsibilities.map((role, index) => (
              <div key={index} className="card-elegant p-6 hover-lift">
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4 mt-1">
                    {role.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      {role.role}
                    </h4>
                    <p className="text-primary font-medium mb-1">{role.organization}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {role.location} • {role.period}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  {role.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.achievements.map((achievement, idx) => (
                    <span key={idx} className="skill-pill text-xs px-3 py-1">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-10 text-center">
            Publications
          </h3>
          <div className="max-w-4xl mx-auto">
            {publications.map((pub, index) => (
              <div key={index} className="card-elegant p-6 hover-lift">
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent mr-4 mt-1">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {pub.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="skill-pill text-xs px-3 py-1">{pub.type}</span>
                      <span>{pub.venue} ({pub.year})</span>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      {pub.description}
                    </p>
                    <p className="text-accent font-medium">
                      {pub.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-10 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={`card-elegant p-6 hover-lift ${cert.featured ? 'ring-2 ring-primary/30' : ''}`}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.description}
                  </p>
                  <span className="text-xs text-muted-foreground">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Honors and Awards */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-10 text-center">
            Honors & Awards
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className={`card-elegant p-6 hover-lift ${award.featured ? 'ring-2 ring-primary/30' : ''}`}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {award.title}
                  </h4>
                  <span className="skill-pill text-xs px-3 py-1 mb-3 inline-block">
                    {award.category}
                  </span>
                  <p className="text-sm text-muted-foreground mb-3">
                    {award.description}
                  </p>
                  <span className="text-xs text-muted-foreground">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;