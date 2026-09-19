import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { PROFILE_DATA, SOCIAL_LINKS } from '../../data/profile';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  AlertCircle,
} from 'lucide-react';
import { Button } from '../common/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || 'Unable to send your message. Please try again.');
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your message. Please try again.');
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="09"
          title="Let's build something meaningful."
          subtitle="Have an opportunity, software project, or internship in mind? I'd be glad to connect and discuss how I can contribute."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Contact Information
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Feel free to email me directly, drop a message on LinkedIn, or send a quick note through the form.
                I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-3">
              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-[#090b0f] border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[#11141b] border border-white/10 flex items-center justify-center text-[#FB3640] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PROFILE_DATA.details.email}`}
                      className="text-sm font-semibold text-white hover:text-[#FB3640] transition-colors truncate block"
                    >
                      {PROFILE_DATA.details.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PROFILE_DATA.details.email, 'email')}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors shrink-0"
                  title="Copy to clipboard"
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-[#090b0f] border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#11141b] border border-white/10 flex items-center justify-center text-[#004643] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${PROFILE_DATA.details.phoneRaw}`}
                      className="text-sm font-semibold text-white hover:text-[#FB3640] transition-colors block"
                    >
                      {PROFILE_DATA.details.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PROFILE_DATA.details.phoneRaw, 'phone')}
                  aria-label="Copy phone number"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors shrink-0"
                  title="Copy to clipboard"
                >
                  {copiedPhone ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
                      <Check className="w-4 h-4" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#090b0f] border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#11141b] border border-white/10 flex items-center justify-center text-teal-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                    Location
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {PROFILE_DATA.details.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="pt-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Connect Online
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#0e1117] border border-white/8 hover:border-[#FB3640] text-xs text-neutral-300 hover:text-white flex items-center justify-between transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-400 group-hover:text-white transition-colors">
                        {getSocialIcon(link.name)}
                      </span>
                      <span className="font-medium">{link.name}</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#090b0f] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-8">
                Please leave your details and a brief message regarding your project, internship, or inquiry.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#004643]/20 border border-[#004643] text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#004643] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Dispatched
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your message was received locally. You can also reach me directly at{' '}
                    <a
                      href={`mailto:${PROFILE_DATA.details.email}`}
                      className="text-[#FB3640] underline font-mono"
                    >
                      {PROFILE_DATA.details.email}
                    </a>
                    .
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-neutral-400 uppercase tracking-wider"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#050608] border border-white/10 focus:border-[#FB3640] focus:ring-1 focus:ring-[#FB3640] text-sm text-white placeholder:text-neutral-600 outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-neutral-400 uppercase tracking-wider"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#050608] border border-white/10 focus:border-[#FB3640] focus:ring-1 focus:ring-[#FB3640] text-sm text-white placeholder:text-neutral-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono text-neutral-400 uppercase tracking-wider"
                    >
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Web Development / Internship / Collaboration"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#050608] border border-white/10 focus:border-[#FB3640] focus:ring-1 focus:ring-[#FB3640] text-sm text-white placeholder:text-neutral-600 outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-neutral-400 uppercase tracking-wider"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, or opportunity..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#050608] border border-white/10 focus:border-[#FB3640] focus:ring-1 focus:ring-[#FB3640] text-sm text-white placeholder:text-neutral-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#FB3640] text-white text-sm font-semibold tracking-wide hover:bg-[#e02b35] transition-all duration-200 disabled:opacity-50 shadow-sm hover:shadow-[0_0_20px_rgba(251,54,64,0.35)] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <span className="text-[11px] font-mono text-neutral-500">
                      Messages are sent securely via Resend
                    </span>
                  </div>
                  {submitError && (
                    <p role="alert" className="flex items-center gap-2 text-xs text-red-400">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {submitError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
