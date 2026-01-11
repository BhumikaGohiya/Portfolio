import { Briefcase, Code, TestTube, Settings, TrendingUp, Target, Users, Zap } from "lucide-react";

const GetToKnowMe = () => {
  const stats = [
    { icon: TestTube, value: "500+", label: "Test Cases Automated", color: "bg-blue-50 text-blue-600" },
    { icon: Users, value: "5+", label: "Team Members Led", color: "bg-purple-50 text-purple-600" },
    { icon: TrendingUp, value: "40%", label: "Effort Reduction", color: "bg-emerald-50 text-emerald-600" },
    { icon: Target, value: "85%", label: "Automation Coverage", color: "bg-amber-50 text-amber-600" },
  ];

  const expertise = [
    { name: "Selenium", category: "Automation" },
    { name: "Java", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "Rest Assured", category: "API Testing" },
    { name: "Playwright", category: "Automation" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "Cucumber", category: "BDD" },
    { name: "TestNG", category: "Framework" },
    { name: "Postman", category: "API Testing" },
    { name: "Azure DevOps", category: "DevOps" },
    { name: "SQL", category: "Database" },
    { name: "Git", category: "Version Control" },
  ];

  const experiences = [
    {
      title: "Senior Analyst – Test Automation Engineering",
      company: "Accenture",
      period: "Nov 2021 – Feb 2023",
      bullets: [
        "Achieved 85% automation coverage by automating 500+ test cases on Salesforce-based financial systems",
        "Led a QA team of 4-5 professionals, increasing productivity by 30%",
      ],
    },
    {
      title: "Test Engineering Analyst",
      company: "Accenture",
      period: "Jul 2020 – Nov 2021",
      bullets: [
        "Reduced manual testing effort by 40% through mobile automation for Android and iOS",
        "Integrated automated test suites into Jenkins CI/CD pipelines",
      ],
    },
    {
      title: "Test Engineering Associate",
      company: "Accenture",
      period: "Aug 2018 – Jul 2020",
      bullets: [
        "Designed and executed 300+ BDD test scripts using Selenium, Java, and TestNG",
        "Maintained 98% defect closure rate managing 300+ issues in JIRA",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Get to Know Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Transforming quality assurance into a strategic advantage through automation excellence
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Story */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              4+ Years of QA Excellence
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                As a <span className="text-primary font-semibold">QA Automation Engineer</span> with{" "}
                <span className="text-emerald-600 font-semibold">4+ years of expertise</span>, I transform 
                manual testing processes into efficient automated workflows. I architect comprehensive 
                test solutions using <span className="text-blue-600 font-semibold">Selenium</span> for 
                UI automation, <span className="text-purple-600 font-semibold">Rest Assured</span> for 
                API testing, and <span className="text-amber-600 font-semibold">Cucumber</span> for 
                behavior-driven development.
              </p>
              <p>
                My approach combines technical mastery with strategic thinking — delivering automated 
                frameworks that reduce manual effort by 40% while maintaining 98% defect closure rates. 
                I've led QA teams and integrated testing seamlessly into CI/CD pipelines to ensure 
                quality at every stage of development.
              </p>
            </div>

            {/* Expertise Tags */}
            <div className="mt-8">
              <h4 className="font-display text-lg font-semibold text-slate-900 mb-4">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-slate-100 rounded-full text-sm font-medium text-slate-700 hover:bg-primary hover:text-white transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mb-4`}>
                  <stat.icon size={24} />
                </div>
                <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Work Experience
            </h3>
            <p className="text-slate-500">My professional journey at Accenture</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Briefcase size={20} className="text-primary" />
                  </div>
                  <span className="text-slate-500 text-sm font-medium">{exp.period}</span>
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 mb-1">{exp.company}</h4>
                <p className="text-primary font-medium text-sm mb-4">{exp.title}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetToKnowMe;
