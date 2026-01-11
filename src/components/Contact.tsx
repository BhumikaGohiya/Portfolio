import { Mail, MapPin, ArrowUpRight, Phone, Sparkles, MessageCircle, Linkedin, Github, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Bhumika,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:bhumikagohiya96@gmail.com?subject=${subject}&body=${body}`;
    
    toast.success("Opening your email client...", {
      icon: <CheckCircle className="text-emerald-500" size={18} />,
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-slate-50 via-violet-50/50 to-cyan-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full text-white text-sm font-medium mb-6">
            <Sparkles size={16} />
            Ready to collaborate
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Let's Build Something
            <span className="block bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Amazing Together</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Whether you need a QA expert, test automation architect, or quality consultant — I'd love to hear about your project.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email card */}
            <a
              href="mailto:bhumikagohiya96@gmail.com"
              className="group block p-6 bg-white rounded-2xl border border-slate-200 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-200">
                  <Mail size={22} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-500 text-sm mb-1">Email me at</p>
                  <p className="text-slate-800 font-medium group-hover:text-violet-600 transition-colors">
                    bhumikagohiya96@gmail.com
                  </p>
                </div>
                <ArrowUpRight size={20} className="text-slate-300 group-hover:text-violet-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </a>

            {/* Phone card */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200">
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm mb-1">Call or text</p>
                  <p className="text-slate-800 font-medium">+1 (613) 252-2570</p>
                </div>
              </div>
            </div>

            {/* Location card */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg shadow-orange-200">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm mb-1">Based in</p>
                  <p className="text-slate-800 font-medium">Toronto, Ontario, Canada</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/in/bhumika-gohiya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white rounded-xl border border-slate-200 text-slate-700 hover:border-violet-300 hover:text-violet-600 hover:shadow-md transition-all"
              >
                <Linkedin size={18} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white rounded-xl border border-slate-200 text-slate-700 hover:border-violet-300 hover:text-violet-600 hover:shadow-md transition-all"
              >
                <Github size={18} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900">Send a message</h3>
                  <p className="text-slate-500 text-sm">I'll get back to you within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700">
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="QA Automation Opportunity"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">
                    Your message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 focus:bg-white outline-none transition-all resize-none text-slate-900 placeholder:text-slate-400"
                    placeholder="Tell me about your project, challenges, or how I can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40"
                >
                  Send Message
                  <ArrowUpRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
