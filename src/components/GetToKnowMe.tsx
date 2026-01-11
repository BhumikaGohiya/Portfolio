import { Briefcase, TestTube, Smartphone, Server, Settings, Workflow, CheckCircle2, Bug, Layers } from "lucide-react";

const GetToKnowMe = () => {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "500+", label: "Test Cases Automated" },
    { value: "40%", label: "Effort Reduction" },
    { value: "98%", label: "Defect Closure Rate" },
  ];

  const expertiseAreas = [
    {
      icon: TestTube,
      title: "UI Test Automation",
      description: "End-to-end web automation using Selenium, Playwright, and TestNG frameworks",
      skills: ["Selenium WebDriver", "Playwright", "TestNG", "Page Object Model"],
    },
    {
      icon: Server,
      title: "API Testing & Automation",
      description: "RESTful API validation with comprehensive contract and integration testing",
      skills: ["Rest Assured", "Postman", "API Contract Testing"],
    },
    {
      icon: Smartphone,
      title: "Mobile Testing",
      description: "Native and hybrid mobile app testing across Android and iOS platforms",
      skills: ["Appium", "Android Testing", "iOS Testing"],
    },
    {
      icon: Workflow,
      title: "CI/CD Integration",
      description: "Seamless pipeline integration for continuous testing and deployment",
      skills: ["Jenkins", "Azure DevOps", "Git Workflows"],
    },
    {
      icon: Layers,
      title: "BDD Frameworks",
      description: "Behavior-driven development with clear, stakeholder-readable test scenarios",
      skills: ["Cucumber", "Gherkin", "Feature Files"],
    },
    {
      icon: Bug,
      title: "Defect Management",
      description: "End-to-end defect lifecycle management and quality reporting",
      skills: ["JIRA", "Test Reporting", "Root Cause Analysis"],
    },
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
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-medium rounded-full mb-4">
            Expertise & Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            5+ years of building robust automation frameworks that transform QA from a bottleneck into a competitive advantage
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-slate-100 text-center hover:shadow-lg hover:border-violet-100 transition-all"
            >
              <p className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-xl hover:border-violet-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <area.icon size={24} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{area.title}</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">{area.description}</p>
              <div className="space-y-2">
                {area.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Work Experience */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
              Professional Journey
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Work Experience
            </h3>
            <p className="text-slate-500">Growing through challenges at Accenture</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:border-violet-200 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                    <Briefcase size={20} className="text-violet-600" />
                  </div>
                  <span className="text-slate-500 text-sm font-medium">{exp.period}</span>
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 mb-1">{exp.company}</h4>
                <p className="text-violet-600 font-medium text-sm mb-4">{exp.title}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
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
