import { GraduationCap, Trophy, Star, TrendingUp, Users, BadgeCheck, Heart } from "lucide-react";

const Achievements = () => {
  const awards = [
    {
      title: "Best Team Pinnacle Award",
      organization: "Accenture",
      year: "2022",
      context: "Excellence in team collaboration and delivery",
      icon: Trophy,
    },
    {
      title: "Stellar Performance Award",
      organization: "Accenture",
      year: "2021",
      context: "Outstanding individual contributions",
      icon: Star,
    },
    {
      title: "Adroit Award",
      organization: "Accenture",
      year: "2019",
      context: "Skill and innovation in problem-solving",
      icon: TrendingUp,
    },
    {
      title: "Youth Leadership Program",
      organization: "Mindtrust × TiE Ottawa",
      year: "2023",
      context: "Selected for entrepreneurship mentorship",
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
    { name: "Microsoft Azure Fundamentals (AZ-900)", year: "2020", context: "Cloud computing essentials" },
    { name: "ISTQB – Foundation Level", year: "In Progress", context: "Software testing standards" },
  ];

  const volunteering = [
    {
      title: "Communications Head & Secretary",
      organization: "Ottawa Centre Youth Council",
      period: "Apr 2023 - Sep 2024",
      context: "Led communications, planned community events, managed social media outreach",
    },
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Credentials & Recognition
          </h2>
          <p className="text-slate-500">Academic foundation and professional achievements</p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap size={20} className="text-violet-500" />
              <h3 className="font-display text-lg font-bold text-slate-900">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{edu.degree}</h4>
                      <p className="text-violet-600 text-xs mt-0.5">{edu.field}</p>
                      <p className="text-slate-400 text-xs mt-1">{edu.school}</p>
                    </div>
                    <span className="text-violet-500 font-semibold text-sm shrink-0">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Trophy size={20} className="text-amber-500" />
              <h3 className="font-display text-lg font-bold text-slate-900">Awards</h3>
            </div>
            <div className="space-y-3">
              {awards.map((award, index) => {
                const IconComponent = award.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                      <IconComponent size={16} className="text-amber-500" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-slate-900 text-sm">{award.title}</h4>
                      <p className="text-amber-600 text-xs">{award.organization}</p>
                      <p className="text-slate-400 text-xs mt-1">{award.context}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <BadgeCheck size={20} className="text-emerald-500" />
              <h3 className="font-display text-lg font-bold text-slate-900">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <div className="min-w-0">
                    <span className="font-medium text-slate-800 text-sm">{cert.name}</span>
                    <p className="text-slate-400 text-xs mt-0.5">{cert.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Heart size={20} className="text-rose-500" />
              <h3 className="font-display text-lg font-bold text-slate-900">Volunteering</h3>
            </div>
            <div className="space-y-3">
              {volunteering.map((vol, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                    <Heart size={16} className="text-rose-500" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-slate-900 text-sm">{vol.title}</h4>
                    <p className="text-rose-600 text-xs">{vol.organization} · {vol.period}</p>
                    <p className="text-slate-400 text-xs mt-1">{vol.context}</p>
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
