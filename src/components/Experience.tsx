import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Test Automation Engineer",
      company: "Accenture",
      period: "Nov 2021 – Feb 2023",
      description: "Achieved 85% automation coverage by automating 500+ test cases on Salesforce-based financial systems. Led a QA team of 4-5 professionals, increasing productivity by 30%.",
    },
    {
      title: "Test Engineering Analyst",
      company: "Accenture",
      period: "Jul 2020 – Nov 2021",
      description: "Reduced manual testing effort by 40% through mobile automation for Android and iOS. Integrated automated test suites into Jenkins CI/CD pipelines.",
    },
    {
      title: "Test Engineering Associate",
      company: "Accenture",
      period: "Aug 2018 – Jul 2020",
      description: "Designed and executed 300+ BDD test scripts using Selenium, Java, and TestNG. Maintained 98% defect closure rate managing 300+ issues in JIRA.",
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Background</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Work Experience
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Briefcase size={20} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold">Career Timeline</h3>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-border">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                <p className="text-primary text-sm font-medium mb-1">{exp.period}</p>
                <h4 className="font-display text-lg font-semibold mb-1">{exp.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
