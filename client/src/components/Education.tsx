import { GraduationCap, Book, Award } from "lucide-react";

const Education = () => {
  const education = {
    institution: "Institute Of Engineering and Management",
    degree: "Bachelor of Technology - CSE (Specialization in AIML)",
    location: "Kolkata, India", 
    period: "November 2020 - August 2024",
    gpa: "9.26",
    courses: [
      "Object-Oriented Programming (OOPs)",
      "Machine Learning", 
      "Database Management Systems (DBMS)",
      "Advanced Deep Learning",
      "Artificial Intelligence",
      "Data Structures",
      "Data Warehousing and Mining",
      "Algorithms"
    ]
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in AI/ML with strong performance and comprehensive coursework.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-elegant p-8 hover-lift">
            <div className="flex items-start mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary mr-6">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {education.degree}
                </h3>
                <p className="text-xl text-primary font-semibold mb-2">
                  {education.institution}
                </p>
                <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                  <span>{education.location}</span>
                  <span>•</span>
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center mb-6">
                  <Award className="w-5 h-5 text-accent mr-2" />
                  <span className="text-lg font-semibold text-foreground">
                    GPA: {education.gpa}/10.0
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Book className="w-5 h-5 text-accent mr-2" />
                <h4 className="text-lg font-semibold text-foreground">
                  Relevant Coursework
                </h4>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {education.courses.map((course, index) => (
                  <div 
                    key={index}
                    className="skill-pill text-sm px-4 py-2 text-center"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;