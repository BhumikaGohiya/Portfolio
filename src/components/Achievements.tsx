import { GraduationCap, Trophy, Award, Star, TrendingUp, Users } from "lucide-react";

const Achievements = () => {
  const awards = [
    {
      title: "Best Team Pinnacle Award",
      organization: "Accenture",
      year: "2022",
      icon: Trophy,
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50",
    },
    {
      title: "Stellar Performance Award",
      organization: "Accenture",
      year: "2021",
      icon: Star,
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      title: "Ace Award",
      organization: "Accenture",
      year: "2020",
      icon: Award,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Adroit Award",
      organization: "Accenture",
      year: "2019",
      icon: TrendingUp,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      title: "Youth Leadership Program",
      organization: "Mindtrust × TiE Ottawa",
      year: "2023",
      icon: Users,
      color: "from-rose-400 to-red-500",
      bgColor: "bg-rose-50",
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
    { name: "Microsoft Azure Fundamentals (AZ-900)", year: "2020" },
    { name: "ISTQB – Foundation Level", year: "In Progress" },
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Credentials & Recognition
          </h2>
          <p className="text-slate-600 text-lg">
            Academic foundation and professional achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-display font-semibold text-slate-900">{edu.degree}</h4>
                    <span className="text-indigo-600 text-sm font-semibold bg-indigo-50 px-2 py-1 rounded-lg">{edu.year}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-1">{edu.field}</p>
                  <p className="text-slate-500 text-sm">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Trophy size={20} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900">Awards</h3>
            </div>
            <div className="space-y-3">
              {awards.map((award, index) => {
                const IconComponent = award.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 flex items-center gap-4 group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <IconComponent size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-slate-900 text-sm">{award.title}</h4>
                      <p className="text-slate-500 text-xs">{award.organization} · {award.year}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <Star size={20} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-slate-900 text-sm">{cert.name}</p>
                    <p className="text-slate-500 text-xs">{cert.year}</p>
                  </div>
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
