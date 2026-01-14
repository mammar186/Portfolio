"use client";

import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const contacts = [
  { Icon: Phone, label: "+92 3328 996611" },
  { Icon: Mail, label: "muhammadammar1806dev@gmail.com" },
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 pb-20 pt-10 lg:px-0">
      <Toaster position="top-right" />

      <div className="mx-auto flex flex-col gap-8 section-shell">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold">
            Contact <span className="text-[#07d2c7]">me</span>
          </h2>
          <p className="text-slate-300">
            I am currently open to full-time, contract or part-time opportunities
            in Mobile App Development.
          </p>
        </div>

        {/* CARD */}
        <div className="card-surface relative grid gap-8 overflow-hidden rounded-xl bg-[#0c1017]/90 p-6 sm:p-8 lg:grid-cols-[1fr,1.3fr] lg:p-10">
          {/* LEFT */}
          <div className="space-y-4 text-slate-200 min-w-0">
            <p className="text-sm text-slate-300">
              Having an awesome project idea?
            </p>
            <h3 className="text-xl font-semibold text-[#07d2c7]">
              Let&apos;s Discuss.
            </h3>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              {contacts.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#07d2c7]">
                    <Icon size={18} />
                  </span>
                  <span className="flex-1 break-all leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="grid min-w-0 gap-4 text-sm text-slate-300"
          >
            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Full name
              </label>
              <input
                type="text"
                required
                placeholder="Enter name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full min-w-0 rounded-md border border-white/10 bg-[#0f141b] px-4 py-3 text-slate-100 outline-none focus:border-[#07d2c7]"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Email address
              </label>
              <input
                type="email"
                required
                placeholder="Enter email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full min-w-0 rounded-md border border-white/10 bg-[#0f141b] px-4 py-3 text-slate-100 outline-none focus:border-[#07d2c7]"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="Enter message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full min-w-0 resize-none rounded-md border border-white/10 bg-[#0f141b] px-4 py-3 text-slate-100 outline-none focus:border-[#07d2c7]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex w-full sm:w-fit items-center justify-center gap-2 rounded-md bg-[#07d2c7] px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
