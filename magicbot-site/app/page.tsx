import React from "react";

export default function Page() {
  const waDemo =
    "https://wa.me/971503180618?text=Hi%20I%20want%20a%20Magicbot%20demo";
  const waStart =
    "https://wa.me/971503180618?text=Hi%20I%20want%20to%20deploy%20Magicbot%20for%20my%20business";

  const industries = [
    {
      name: "Real Estate",
      icon: "🏢",
      tag: "Property Match Engine",
      desc: "Instantly respond to property inquiries, send brochures, and book viewings automatically.",
    },
    {
      name: "Medical",
      icon: "🏥",
      tag: "HIPAA Ready Automation",
      desc: "Automate patient intake, FAQs, and appointment scheduling.",
    },
    {
      name: "Law Firms",
      icon: "⚖️",
      tag: "Lead Qualification",
      desc: "Filter and route high-intent legal inquiries instantly.",
    },
    {
      name: "Insurance",
      icon: "📊",
      tag: "Quote Automation",
      desc: "Collect data and generate instant policy quotes.",
    },
    {
      name: "Education",
      icon: "🎓",
      tag: "Student Portal AI",
      desc: "Handle admissions FAQs and course inquiries 24/7.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Lead Capture",
      icon: "💬",
      desc: "Customer messages you on WhatsApp or website.",
    },
    {
      step: "02",
      title: "AI Qualification",
      icon: "🧠",
      desc: "Magicbot understands intent and qualifies leads instantly.",
    },
    {
      step: "03",
      title: "Conversion",
      icon: "⚡",
      desc: "Responds, books, or escalates to human when needed.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans">

      {/* HERO */}
      <section className="px-6 pt-28 pb-16 text-center max-w-6xl mx-auto">

        <div className="inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-emerald-400 mb-6">
          AI WhatsApp Automation for UAE Businesses
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Turn WhatsApp into a<span className="text-emerald-400"> 24/7 sales agent.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
          Magicbot is an AI WhatsApp agent that replies instantly, qualifies leads,
          books appointments, and closes support tickets — automatically.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={waStart}
            className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:scale-105 transition"
          >
            Start Free on WhatsApp
          </a>

          <a
            href={waDemo}
            className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition"
          >
            Watch Live Demo
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          No app required • Setup in minutes • Works inside WhatsApp
        </p>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/5 py-8 text-center text-slate-400 text-sm">
        ⚡ 99.99% uptime • ⚡ {'<'}1s response time • ⚡ Built for WhatsApp-native businesses
      </section>

      {/* PROBLEM */}
      <section className="py-20 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold">
          Most businesses lose up to 70% of WhatsApp leads.
        </h2>
        <p className="mt-6 text-slate-400 text-lg">
          Slow replies, missed messages, and no qualification system = lost revenue.
        </p>
        <p className="mt-6 text-emerald-400 font-medium">
          Magicbot fixes this instantly.
        </p>
      </section>

      {/* DEMO */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto bg-[#0a0f1a] border border-white/10 rounded-2xl p-6">
          <div className="text-center text-slate-500 text-sm mb-6">
            Live AI Conversation Handling High-Volume Requests
          </div>

          <div className="bg-white/5 p-4 rounded-xl text-sm text-slate-300">
            Customer: Hi, can you handle 10,000+ brochure requests per hour?
          </div>

          <div className="mt-4 bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-xl text-slate-200 text-sm">
            <b className="text-emerald-400">Magicbot:</b> Absolutely. I will:
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>✔ Send brochures instantly</li>
              <li>✔ Qualify buyer intent automatically</li>
              <li>✔ Sync leads to CRM (HubSpot / Salesforce)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Built for high-revenue industries
        </h2>

        <p className="text-center text-slate-400 mt-4 mb-12">
          Where every missed message equals lost money.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((i) => (
            <div
              key={i.name}
              className="p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="text-3xl">{i.icon}</div>
              <h3 className="text-xl font-bold mt-4">{i.name}</h3>
              <p className="text-xs text-emerald-400 mt-1">{i.tag}</p>
              <p className="text-slate-400 mt-3 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-24 bg-black/40 border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Zero-friction automation
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {steps.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-2xl">{s.icon}</div>
                <div className="text-sm text-slate-500 mt-2">
                  PHASE {s.step}
                </div>
                <h3 className="text-xl font-bold mt-2">{s.title}</h3>
                <p className="text-slate-400 text-sm mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING (STRIPE READY) */}
      <section className="px-6 py-28 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Simple pricing that scales with you
        </h2>

        <p className="text-slate-400 mt-4">
          Start free. Upgrade when your leads increase.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="font-bold">Starter</h3>
            <p className="text-3xl mt-3">$49</p>
            <p className="text-slate-400 text-sm">Basic WhatsApp AI</p>
            <a href={waStart} className="mt-6 block bg-white text-black py-3 rounded-xl font-bold">
              Start
            </a>
          </div>

          <div className="p-6 rounded-2xl border border-emerald-500 bg-emerald-500/10 scale-105">
            <h3 className="font-bold">Growth</h3>
            <p className="text-3xl mt-3">$149</p>
            <p className="text-slate-300 text-sm">CRM + automation</p>
            <a href={waStart} className="mt-6 block bg-emerald-500 text-black py-3 rounded-xl font-bold">
              Most Popular
            </a>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="font-bold">Enterprise</h3>
            <p className="text-3xl mt-3">Custom</p>
            <p className="text-slate-400 text-sm">High volume systems</p>
            <a href={waDemo} className="mt-6 block border border-white/20 py-3 rounded-xl font-bold">
              Contact Sales
            </a>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-32 text-center relative">
        <div className="absolute inset-0 bg-emerald-500/10 blur-3xl" />

        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold">
            Stop losing WhatsApp leads.
          </h2>

          <p className="mt-6 text-slate-400">
            Start converting every conversation into revenue.
          </p>

          <a
            href={waStart}
            className="mt-10 inline-block bg-emerald-500 text-black font-bold px-10 py-4 rounded-full hover:scale-105 transition"
          >
            Deploy Magicbot Now
          </a>
        </div>
      </section>

    </main>
  );
}