import { GraduationCap, Trophy, Star, TrendingUp, Users, BadgeCheck, Heart, Award, ExternalLink } from "lucide-react";

const Achievements = () => {
  const awards = [
    {
      title: "TIM Project Impact Awards Nomination",
      organization: "Carleton University",
      year: "2025",
      icon: Award,
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7324266995682611201/",
    },
    {
      title: "Best Team Pinnacle Award",
      organization: "Accenture",
      year: "2022",
      icon: Trophy,
    },
    {
      title: "Stellar Performance Award",
      organization: "Accenture",
      year: "2021",
      icon: Star,
    },
    {
      title: "Adroit Award",
      organization: "Accenture",
      year: "2019",
      icon: TrendingUp,
    },
    {
      title: "Youth Leadership Program",
      organization: "Mindtrust × TiE Ottawa",
      year: "2023",
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
    { name: "Microsoft Azure Fundamentals (AZ-900)", year: "2020" },
    { name: "ISTQB – Foundation Level", year: "In Progress" },
  ];

  const volunteering = [
    {
      title: "Communications Head & Secretary",
      organization: "Ottawa Centre Youth Council",
      period: "Apr 2023 - Sep 2024",
      duration: "1 yr 6 mos",
      category: "Social Services",
      achievements: [
        "Led communications and operations for the Ottawa Centre Youth Council, planning and executing community events and youth-focused initiatives.",
        "Coordinated with campus groups and local partners to manage event logistics, stakeholder engagement, and risk considerations.",
        "Managed the council's social media presence, improving outreach, visibility, and community engagement.",
      ],
    },
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-medium rounded-full mb-4">
            Credentials & Recognition
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">
            My Journey So Far
          </h2>
        </div>

        {/* Education - Horizontal Cards */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-200">
              <GraduationCap size={20} className="text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-100 to-transparent rounded-bl-full opacity-50" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full">{edu.year}</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900 mb-1">{edu.degree}</h4>
                  <p className="text-violet-600 font-medium text-sm mb-1">{edu.field}</p>
                  <p className="text-slate-500 text-sm">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards - Compact Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-200">
              <Trophy size={20} className="text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900">Awards & Recognition</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-50 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center group-hover:from-amber-200 group-hover:to-orange-200 transition-colors">
                    <IconComponent size={20} className="text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-slate-900 text-sm truncate">{award.title}</h4>
                      {award.linkedinUrl && (
                        <a
                          href={award.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-600 hover:text-amber-700 transition-colors flex-shrink-0"
                          title="View on LinkedIn"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">{award.organization} · {award.year}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications - Inline Style */}
        {/* Certifications */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200">
              <BadgeCheck size={20} className="text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-full border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
                <span className="font-medium text-slate-800 text-sm">{cert.name}</span>
                <span className="text-xs text-slate-400 font-medium">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteering */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-200">
              <Heart size={20} className="text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900">Volunteering</h3>
          </div>
          {volunteering.map((vol, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-50 to-transparent rounded-bl-full opacity-50" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-semibold rounded-full">{vol.period}</span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-medium rounded-full">{vol.category}</span>
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 mb-1">{vol.title}</h4>
                <p className="text-rose-600 font-medium text-sm mb-4">{vol.organization}</p>
                <ul className="space-y-2">
                  {vol.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
