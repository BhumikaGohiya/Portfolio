import { GraduationCap, Trophy, Award, Star, TrendingUp, Users } from "lucide-react";

const Achievements = () => {
  const awards = [
    {
      title: "Best Team Pinnacle Award",
      organization: "Accenture",
      year: "2022",
      description: "Recognition for team collaboration and seamless integration of automation tools, reducing testing time by 2 days per release cycle.",
      icon: Trophy,
    },
    {
      title: "Stellar Performance Award",
      organization: "Accenture",
      year: "2021",
      description: "Ranked in the top 5 employees out of a 40-member team.",
      icon: Star,
    },
    {
      title: "Ace Award",
      organization: "Accenture",
      year: "2020",
      description: "Top performer generating five high-impact test automation solutions per month.",
      icon: Award,
    },
    {
      title: "Adroit Award",
      organization: "Accenture",
      year: "2019",
      description: "Ranked in the top 10% of associates for exceptional performance.",
      icon: TrendingUp,
    },
    {
      title: "Youth Leadership Program",
      organization: "Mindtrust × TiE Ottawa",
      year: "2023",
      description: "Specialized leadership training, fostering connections with 50+ industry experts.",
      icon: Users,
    },
  ];

  const education = [
    {
      degree: "Master of Engineering",
      field: "Technology Innovation Management",
      school: "Carleton University, Ottawa",
      year: "2024",
    },
    {
      degree: "Bachelor of Engineering",
      field: "Mechanical Engineering",
      school: "Madhav Institute of Technology & Science, India",
      year: "2018",
    },
  ];

  const certifications = [
    { name: "Microsoft Azure Fundamentals (AZ-900)", status: "completed" },
    { name: "ISTQB – Foundation Level", status: "in-progress" },
  ];

  return (
    <section id="achievements" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Credentials & Recognition
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic foundation and professional achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={24} className="text-primary" />
              <h3 className="font-display text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-display font-semibold">{edu.degree}</h4>
                    <span className="text-primary text-sm font-medium">{edu.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{edu.field}</p>
                  <p className="text-muted-foreground text-sm">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Trophy size={24} className="text-primary" />
              <h3 className="font-display text-xl font-semibold">Awards</h3>
            </div>
            <div className="space-y-4">
              {awards.map((award, index) => {
                const IconComponent = award.icon;
                return (
                  <div
                    key={index}
                    className="p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent size={18} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-display font-semibold text-sm">{award.title}</h4>
                          <span className="text-xs text-muted-foreground">{award.year}</span>
                        </div>
                        <p className="text-primary text-sm mb-2">{award.organization}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Star size={24} className="text-primary" />
              <h3 className="font-display text-xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors flex items-center gap-4"
                >
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    cert.status === 'completed' ? 'bg-green-500' : 'bg-amber-500'
                  }`} />
                  <p className="font-medium text-sm">{cert.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
