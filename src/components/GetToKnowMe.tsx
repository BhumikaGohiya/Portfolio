import { Briefcase, TestTube, Smartphone, Server, Workflow, Bug, Layers, TrendingUp, Users, Zap } from "lucide-react";

const GetToKnowMe = () => {
  const stats = [
    { value: "4+", label: "Years Experience", gradient: "from-violet-500 to-purple-600" },
    { value: "500+", label: "Test Cases Automated", gradient: "from-cyan-500 to-blue-600" },
    { value: "85%", label: "Automation Coverage", gradient: "from-emerald-500 to-teal-600" },
    { value: "40%", label: "Effort Reduction", gradient: "from-amber-500 to-orange-600" },
    { value: "98%", label: "Defect Closure Rate", gradient: "from-rose-500 to-pink-600" },
  ];

  const expertiseAreas = [
    {
      icon: TestTube,
      title: "UI Test Automation",
      description: "End-to-end web automation using Selenium, Playwright, and TestNG frameworks",
      skills: ["Selenium WebDriver", "Playwright", "TestNG"],
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
    },
    {
      icon: Server,
      title: "API Testing & Automation",
      description: "RESTful API validation with comprehensive contract and integration testing",
      skills: ["Rest Assured", "Postman", "API Contract Testing"],
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
    },
    {
      icon: Smartphone,
      title: "Mobile Testing",
      description: "Native and hybrid mobile app testing across Android and iOS platforms",
      skills: ["Appium", "Android Testing", "iOS Testing"],
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Workflow,
      title: "CI/CD Integration",
      description: "Seamless pipeline integration for continuous testing and deployment",
      skills: ["Jenkins", "Azure DevOps", "Git Workflows"],
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: Layers,
      title: "BDD Frameworks",
      description: "Behavior-driven development with clear, stakeholder-readable test scenarios",
      skills: ["Cucumber", "Gherkin", "Feature Files"],
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50",
    },
    {
      icon: Bug,
      title: "Defect Management",
      description: "End-to-end defect lifecycle management and quality reporting",
      skills: ["JIRA", "Test Reporting", "Root Cause Analysis"],
      color: "from-indigo-500 to-violet-600",
      bgColor: "bg-indigo-50",
    },
  ];

  const timeline = [
    {
      period: "2021 - 2023",
      title: "Senior Analyst",
      role: "Test Automation Engineering",
      icon: Users,
      color: "from-violet-500 to-purple-600",
      achievements: [
        { label: "Team Size", value: "4-5" },
        { label: "Productivity", value: "+30%" },
      ],
    },
    {
      period: "2020 - 2021",
      title: "Analyst",
      role: "Test Engineering",
      icon: Zap,
      color: "from-cyan-500 to-blue-600",
      achievements: [
        { label: "Mobile Platforms", value: "2" },
        { label: "CI/CD", value: "Jenkins" },
      ],
    },
    {
      period: "2018 - 2020",
      title: "Associate",
      role: "Test Engineering",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-600",
      achievements: [
        { label: "BDD Scripts", value: "300+" },
        { label: "Issues Managed", value: "300+" },
      ],
    },
  ];


  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-medium rounded-full mb-4">
            Skills & Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Crafting Quality at Scale
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            4+ years of automation expertise, evolving from building test frameworks to leading teams and owning quality strategies end-to-end
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white rounded-2xl border border-slate-100 text-center overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <p className={`font-display text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Expertise Grid */}
        <div id="expertise" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className={`group relative p-6 ${area.bgColor} rounded-2xl border border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${area.color} opacity-10 rounded-bl-full`} />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <area.icon size={24} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{area.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Work Experience - Visual Timeline */}
        <div id="experience" className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
              Professional Journey
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Career at Accenture
            </h3>
            <p className="text-slate-500">A visual timeline of growth and impact</p>
          </div>

          {/* Timeline Visual */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-200 via-cyan-200 to-emerald-200 -translate-y-1/2 rounded-full" />
            
            <div className="grid md:grid-cols-3 gap-6 relative">
              {timeline.map((item, index) => (
                <div key={index} className="relative group h-full">
                  {/* Card */}
                  <div className="bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-2xl hover:border-transparent transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-slate-200 group-hover:border-violet-400 transition-colors z-10" />
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    
                    {/* Period Badge */}
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-semibold rounded-full mb-3 w-fit`}>
                      {item.period}
                    </span>
                    
                    {/* Title */}
                    <h4 className="font-display text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm mb-4 flex-grow">{item.role}</p>
                    
                    {/* Achievement Metrics */}
                    <div className="grid grid-cols-2 gap-2 mt-auto">
                      {item.achievements.map((achievement, i) => (
                        <div key={i} className="bg-slate-50 rounded-xl p-2.5 text-center group-hover:bg-slate-100 transition-colors">
                          <p className={`font-display text-base font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {achievement.value}
                          </p>
                          <p className="text-slate-500 text-xs">{achievement.label}</p>
                        </div>
                      ))}
                    </div>
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

export default GetToKnowMe;
