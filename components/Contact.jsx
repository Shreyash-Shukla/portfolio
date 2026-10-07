"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Phone, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#8B9CFF", "#FF90E8", "#00E5FF", "#FFC900"],
        });
      } catch (_) {}

      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 xl:px-12">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
        
        {/* Left Column: Form */}
        <div className="rounded-2xl border-4 border-black bg-white p-5 sm:rounded-3xl sm:p-8 lg:col-span-7 lg:p-10 dark:border-white dark:bg-[#1A1A1A] brutal-shadow-lg">
          <div className="mb-8">
            <h2 className="mb-2 font-mont text-3xl font-black uppercase tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Send a <span className="text-indigo-600 dark:text-[#8B9CFF]">Message</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-400 text-sm font-mono">
              Have an internship, project, or technical opportunity? Let's connect!
            </p>
          </div>

          {submitted && (
            <div className="mb-6 flex items-center gap-3 rounded-xl border-2 border-indigo-500 bg-indigo-500/10 p-4 font-mono text-sm font-bold text-indigo-700 dark:text-[#8B9CFF]">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span>Message sent! I&apos;ll reply to your email shortly. 🚀</span>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border-2 border-red-500 rounded-xl text-red-700 dark:text-red-400 font-mono text-sm font-bold flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-gray-800 dark:text-gray-300 tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Recruiter / Collaborator"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border-2 border-black bg-gray-50 px-4 py-3.5 font-mono text-sm text-gray-900 transition-colors focus:border-[#8B9CFF] focus:outline-none dark:border-gray-700 dark:bg-[#0D0D0D] dark:text-white"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-gray-800 dark:text-gray-300 tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="yourname@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border-2 border-black bg-gray-50 px-4 py-3.5 font-mono text-sm text-gray-900 transition-colors focus:border-[#8B9CFF] focus:outline-none dark:border-gray-700 dark:bg-[#0D0D0D] dark:text-white"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs font-mono font-bold uppercase text-gray-700 dark:text-gray-300 tracking-wider">
                Message / Opportunity Details
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your team, project goals, role requirements, or tech stack..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none rounded-xl border-2 border-black bg-gray-50 px-4 py-3.5 font-mono text-sm text-gray-900 transition-colors focus:border-[#8B9CFF] focus:outline-none dark:border-gray-700 dark:bg-[#0D0D0D] dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl border-4 border-black bg-[#8B9CFF] px-6 py-4 font-mono text-base font-black text-black transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 disabled:opacity-50 sm:w-auto sm:px-10 brutal-shadow"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
            </button>
          </form>
        </div>

        {/* Right Column: Contact Info */}
        <div className="flex h-full flex-col justify-between rounded-2xl border-4 border-black bg-gray-900 p-5 text-white sm:rounded-3xl sm:p-8 lg:col-span-5 lg:p-10 dark:border-gray-700 brutal-shadow-lg">
          <div>
            <h3 className="mb-8 font-mono text-2xl font-bold uppercase tracking-wider text-[#8B9CFF]">
              Contact Information
            </h3>

            <div className="space-y-8 font-mono">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#8B9CFF]" />
                  EMAIL ADDRESS
                </p>
                <a
                  href="mailto:shreyash.shukla.dev@gmail.com"
                  className="break-all text-sm font-bold text-white transition-colors hover:text-[#8B9CFF] sm:text-lg"
                >
                  shreyash.shukla.dev@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#8B9CFF]" />
                  PHONE / WHATSAPP
                </p>
                <a
                  href="tel:+917698335369"
                  className="text-base font-bold text-white transition-colors hover:text-[#8B9CFF] sm:text-lg"
                >
                  +91 76983 35369
                </a>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8B9CFF]" />
                  LOCATION
                </p>
                <p className="text-base sm:text-lg font-bold text-white">
                  Gandhinagar, Gujarat, India
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  CONNECT WITH SHREYASH
                </p>
                <div className="flex gap-4">
                  {/* GitHub */}
                  <a
                    href="https://github.com/Shreyash-Shukla"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-gray-700 bg-gray-800 transition-all hover:border-black hover:bg-[#8B9CFF] hover:text-black brutal-shadow"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/shreyash-shukla-6a3b5a309/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-12 h-12 rounded-xl bg-gray-800 hover:bg-[#00E5FF] hover:text-black border-2 border-gray-700 hover:border-black flex items-center justify-center transition-all brutal-shadow"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-700 font-mono text-xs text-gray-300">
            <span>● RESPONSE TIME: WITHIN 1 HOUR</span>
          </div>
        </div>

      </div>
    </section>
  );
}
