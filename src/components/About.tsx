const About = () => {
  const skills = [
    "Selenium", "Java", "Python", "Rest Assured",
    "Playwright", "Jenkins", "Maven", "SQL",
    "TestNG", "Cucumber", "BDD/TDD", "JIRA",
    "Postman", "Azure DevOps", "Git", "Agile/Scrum"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium mb-4">About me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-slate-900">
              Building quality into every release
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                I'm a QA Automation Engineer with over 4+ years at Accenture, where I automated 
                500+ UI and API test cases using Selenium and Rest Assured, implementing BDD 
                with Cucumber and integrating testing into CI/CD pipelines.
              </p>
              <p>
                My work reduced manual regression cycles by 40% and improved defect detection 
                rates across complex enterprise and banking applications. I hold a Master's in 
                Technology Innovation Management from Carleton University.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 text-slate-900">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 hover:bg-primary hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="font-display text-4xl font-bold text-primary">500+</p>
                <p className="text-slate-500 mt-1">Test Cases</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-primary">4+</p>
                <p className="text-slate-500 mt-1">Years</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-primary">85%</p>
                <p className="text-slate-500 mt-1">Automation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
