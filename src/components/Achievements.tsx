import { Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Best Team Pinnacle Award",
      year: "2022",
      description: "Secured recognition for team collaboration and facilitating seamless integration of automation tools into workflows; directly contributed to reducing overall testing time by 2 days each release cycle.",
    },
    {
      title: "Stellar Performance Award",
      year: "2021",
      description: "Ranked in the top 5 employees out of a 40-member team.",
    },
    {
      title: "Ace Award",
      year: "2020",
      description: "Earned accolades as top performer by generating an average of five high-impact test automation solutions per month while collaborating with cross-functional departments to enhance workflow efficiency throughout testing phases.",
    },
    {
      title: "Adroit Award",
      year: "2019",
      description: "Ranked in the top 10% of associates for exceptional performance.",
    },
    {
      title: "Youth Leadership Program",
      year: "2023",
      description: "Engaged in specialized leadership training sessions at Mindtrust, collaborating with TiE Ottawa; acquired strategies to enhance youth engagement initiatives and fostered connections within a network of over 50 industry experts.",
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Recognition</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 hover:bg-background/80 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Trophy size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
