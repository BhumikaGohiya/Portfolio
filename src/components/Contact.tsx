import { Mail, MapPin, ArrowUpRight, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-primary font-medium mb-4">Get in touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Let's work together<span className="text-primary">.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              I'm open to discussing QA automation opportunities, test strategy consulting, 
              or collaborating on innovative quality solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <a href="mailto:bhumikagohiya96@gmail.com" className="text-slate-700 hover:text-primary transition-colors">
                  bhumikagohiya96@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="text-slate-700">+1 (613) 252-2570</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="text-slate-700">Toronto, Ontario, Canada</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-slate-900"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Send message <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
