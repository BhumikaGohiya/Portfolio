import { Mail, MapPin, ArrowUpRight, Phone, Sparkles, MessageCircle, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
            <Sparkles size={16} />
            Ready to collaborate
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            Let's Build Something
            <span className="block text-cyan-300">Amazing Together</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
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
              className="group block p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <Mail size={22} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white/60 text-sm mb-1">Email me at</p>
                  <p className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                    bhumikagohiya96@gmail.com
                  </p>
                </div>
                <ArrowUpRight size={20} className="text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </a>

            {/* Phone card */}
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Call or text</p>
                  <p className="text-white font-medium">+1 (613) 252-2570</p>
                </div>
              </div>
            </div>

            {/* Location card */}
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Based in</p>
                  <p className="text-white font-medium">Toronto, Ontario, Canada</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/in/bhumika-gohiya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <Linkedin size={18} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <Github size={18} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-purple-900/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900">Send a message</h3>
                  <p className="text-slate-500 text-sm">I'll get back to you within 24 hours</p>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
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
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="QA Automation Opportunity"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
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
