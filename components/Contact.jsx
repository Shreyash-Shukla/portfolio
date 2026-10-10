"use client";

import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon, LeetCodeIcon } from "@/components/SocialIcons";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to send message");
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      try {
        confetti({ particleCount: 100, spread: 75, origin: { y: 0.6 }, colors: ["#39d353", "#70d9e8", "#c977ec"] });
      } catch {
        // A decorative effect should not change the result of a sent message.
      }
      setTimeout(() => setSubmitted(false), 6000);
    } catch (submitError) {
      setError(submitError.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="site-section">
      <div className="section-heading">
        <span className="section-eyebrow">GET IN TOUCH</span>
        <h2 className="section-title">Send a <span>Message</span></h2>
        <p className="section-copy">Have an internship, project, or technical opportunity? Let&apos;s connect.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        <div className="dark-surface rounded-2xl border-2 border-white bg-[#101010] p-6 text-white shadow-[6px_6px_0_0_#fff] sm:p-8">
          {submitted && <p role="status" className="mb-5 flex items-center gap-2 rounded-md border border-[#39d353] bg-[#39d353]/10 p-3 font-mono text-xs text-[#39d353]"><CheckCircle2 size={18} /> Message sent. I&apos;ll reply by email.</p>}
          {error && <p role="alert" className="mb-5 rounded-md border border-red-400 bg-red-400/10 p-3 font-mono text-xs text-red-300">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-mono text-xs font-bold tracking-wider text-gray-300">NAME</label>
                <input id="contact-name" type="text" required placeholder="Your name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className="w-full rounded-md border border-white/25 bg-[#1b1b1b] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#39d353]" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block font-mono text-xs font-bold tracking-wider text-gray-300">EMAIL</label>
                <input id="contact-email" type="email" required placeholder="you@example.com" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="w-full rounded-md border border-white/25 bg-[#1b1b1b] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#39d353]" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block font-mono text-xs font-bold tracking-wider text-gray-300">MESSAGE</label>
              <textarea id="contact-message" rows={6} required placeholder="Tell me what you have in mind..." value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className="w-full resize-y rounded-md border border-white/25 bg-[#1b1b1b] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#39d353]" />
            </div>
            <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-md bg-[#39d353] px-6 py-3 font-mono text-xs font-black text-black hover:bg-[#67ee7d] disabled:opacity-60"><Send size={17} />{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</button>
          </form>
        </div>

        <aside className="rounded-2xl border border-white/35 bg-[#101010] p-6 text-white sm:p-8">
          <h3 className="font-mont text-xl font-black">Contact Information</h3>
          <div className="mt-8 space-y-7">
            <div><p className="mb-2 flex items-center gap-2 font-mono text-xs font-bold text-[#39d353]"><Mail size={16} /> EMAIL</p><a href="mailto:shreyash.shukla.dev@gmail.com" className="break-all text-sm hover:underline sm:text-base">shreyash.shukla.dev@gmail.com</a></div>
            <div><p className="mb-2 flex items-center gap-2 font-mono text-xs font-bold text-[#39d353]"><Phone size={16} /> PHONE / WHATSAPP</p><a href="tel:+917698335369" className="text-sm hover:underline sm:text-base">+91 76983 35369</a></div>
            <div><p className="mb-2 flex items-center gap-2 font-mono text-xs font-bold text-[#39d353]"><MapPin size={16} /> LOCATION</p><p className="text-sm sm:text-base">Gandhinagar, Gujarat, India</p></div>
          </div>
          <div className="mt-10 border-t border-white/20 pt-6">
            <p className="mb-4 font-mono text-xs font-bold text-gray-300">FOLLOW ME</p>
            <div className="flex gap-3">
              <a href="https://github.com/Shreyash-Shukla" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-white/30 p-3 hover:border-[#39d353] hover:text-[#39d353]"><GitHubIcon size={20} /></a>
              <a href="https://www.linkedin.com/in/shreyash-shukla-6a3b5a309/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/30 p-3 hover:border-[#39d353] hover:text-[#39d353]"><LinkedInIcon size={20} /></a>
              <a href="https://x.com/Shreyash_twt" target="_blank" rel="noopener noreferrer" aria-label="X" className="rounded-full border border-white/30 p-3 hover:border-[#39d353] hover:text-[#39d353]"><XIcon size={20} /></a>
              <a href="https://leetcode.com/u/shreyash_shukla/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="rounded-full border border-white/30 p-3 hover:border-[#39d353] hover:text-[#39d353]"><LeetCodeIcon size={20} /></a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
