import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, MessageCircle, Coffee, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "bhumikagohiya96@gmail.com", href: "mailto:bhumikagohiya96@gmail.com" },
    { icon: Phone, label: "Phone", value: "+1 (613) 252-2570", href: "tel:+16132522570" },
    { icon: MapPin, label: "Location", value: "Toronto, Canada", href: null },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/BhumikaGohiya" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/bhumika-gohiya" },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length > 200) {
      newErrors.subject = "Subject must be less than 200 characters";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Open email client with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hi Bhumika,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio website`
    );
    window.location.href = `mailto:bhumikagohiya96@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    toast({
      title: "Opening email client...",
      description: "Your message is ready to send via email.",
    });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-slate-50 via-violet-50/30 to-cyan-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-200/30 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-medium rounded-full mb-4 animate-fade-in">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Let's Build Secure, Scalable
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
              Products Together
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Whether you need a QA engineer, test automation architect, or SDET — I'd love to hear about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Contact Info & Highlights */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl shadow-violet-100/20 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="group flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={20} className="text-violet-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-slate-700 font-medium hover:text-violet-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-700 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-violet-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-slate-600 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Let's Chat Card */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-8 text-white shadow-xl shadow-amber-200/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Coffee size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Let's Chat!</h3>
                  <p className="text-white/80 text-sm">Book a virtual coffee with me</p>
                </div>
              </div>
              <p className="text-white/90 mb-6 text-sm leading-relaxed">
                Prefer a quick conversation? Schedule a 15-min coffee chat to discuss opportunities, collaborations, or just to connect!
              </p>
              <a
                href="https://calendly.com/bhumikagohiya96/coffee-chat-with-bhumika?month=2026-01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-colors w-full justify-center"
              >
                <Calendar size={20} />
                Book Coffee Chat
              </a>
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/50 shadow-xl shadow-violet-100/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">Send a Message</h3>
                  <p className="text-slate-500 text-sm">I'll get back to you within 24-48 hours</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">Thanks for reaching out. I'll get back to you within 24-48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Sarah from TechBank"
                        className={`w-full px-4 py-3.5 rounded-xl border ${errors.name ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white/50'} focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-slate-400`}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@techbank.com"
                        className={`w-full px-4 py-3.5 rounded-xl border ${errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white/50'} focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-slate-400`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="QA Contract Role"
                      className={`w-full px-4 py-3.5 rounded-xl border ${errors.subject ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white/50'} focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-slate-400`}
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project…"
                      className={`w-full px-4 py-3.5 rounded-xl border ${errors.message ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white/50'} focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all resize-none placeholder:text-slate-400`}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-200 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
