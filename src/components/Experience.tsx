import { Briefcase } from "lucide-react";

const Experience = () => {
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
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">
            Work Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">{exp.company}</h3>
                  <p className="text-primary font-medium">{exp.title}</p>
                </div>
                <span className="text-slate-500 text-sm font-medium whitespace-nowrap">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
