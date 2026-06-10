import React from 'react';

export default function Page() {
  const industries = [
    { name: "Real Estate", icon: "🏢", tag: "Property Match Engine", span: "md:col-span-2 md:row-span-2", desc: "Instantly cross-reference customer requests with available listings, send brochures, and book viewings completely hands-free." },
    { name: "Medical", icon: "🏥", tag: "HIPAA Compliant Ready", span: "md:col-span-2", desc: "Automate patient intake, FAQ triage, and appointment scheduling." },
    { name: "Law Firms", icon: "⚖️", tag: "Lead Qualification", span: "md:col-span-1", desc: "Securely route high-intent legal inquiries to partners." },
    { name: "Insurance", icon: "📊", tag: "Quote Automation", span: "md:col-span-1", desc: "Gather preliminary data to generate rapid policy quotes." },
    { name: "Education", icon: "🎓", tag: "Student Portal", span: "md:col-span-2", desc: "Handle admissions FAQs and course syllabus inquiries 24/7." },
  ];

  const steps = [
    { step: "01", title: "Ingestion", desc: "The customer sends a message on WhatsApp or your website.", icon: "💬", color: "text-blue-400" },
    { step: "02", title: "AI Processing", desc: "Magicbot cross-references your internal knowledge base in milliseconds.", icon: "🧠", color: "text-emerald-400" },
    { step: "03", title: "Resolution", desc: "Human-like response delivered, or seamlessly escalated to a human agent.", icon: "⚡", color: "text-purple-400" }
  ];

  const waDemo = "https://wa.me/971503180618?text=Hi%20I%20want%20a%20Magicbot%20demo";
  const waStart = "https://wa.me/971503180618?text=Hi%20I%20want%20to%20deploy%20Magicbot%20for%20my%20business";

  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden relative">
      
      {/* ADVANCED BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Dynamic AI Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_10%,#000_40%,transparent_100%)]" />
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/20 blur-[150px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[150px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          
          {/* Animated Glow Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 group cursor-pointer hover:bg-white/10 transition-colors">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
              Magicbot Engine v2.0 is live in the UAE
            </span>
            <svg className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Hyper-Modern Typography */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 max-w-5xl mx-auto leading-[1.1] pb-2">
            Never drop a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 filter drop-shadow-[0_0_20px_rgba(52,211,153,0.3)]">
              customer conversation.
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Deploy an autonomous AI agent that responds, captures leads, and closes tickets instantly. Powered by your unique business knowledge.
          </p>

          {/* Dual CTAs with advanced hover states */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href={waDemo} target="_blank" rel="noopener noreferrer" className="relative group w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
              <button className="relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#030712] border border-white/10 rounded-2xl text-white font-semibold text-lg hover:bg-white/5 transition-all duration-300">
                <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.014 1C5.4 1 .06 6.348.057 12.943c-.001 2.097.546 4.142 1.587 5.946L0 25l6.326-1.65c1.76.924 3.743 1.412 5.688 1.413h.004c6.602 0 11.954-5.352 11.958-11.954.002-3.197-1.24-6.204-3.498-8.463C18.216 2.083 15.207 1.002 12.014 1zm0 20.082h-.002c-1.772 0-3.51-.476-5.032-1.378l-.36-.214-3.742.98.998-3.648-.235-.374c-.99-1.576-1.513-3.4-1.51-5.267.003-5.462 4.453-9.912 9.923-9.912 2.646-.002 5.133 1.026 7.004 2.894 1.87 1.87 2.9 4.36 2.897 7.008-.003 5.465-4.452 9.91-9.94 9.91zm5.412-7.397c-.297-.15-1.758-.868-2.03-.967-.272-.1-.47-.15-.668.15-.198.298-.767.967-.94 1.166-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.76-1.653-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.668-1.612-.915-2.207-.242-.58-.487-.5-.668-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.016-1.04 2.478 0 1.463 1.065 2.876 1.213 3.075.149.198 2.096 3.2 5.077 4.487.71.306 1.264.49 1.694.626.713.226 1.36.194 1.872.118.572-.085 1.758-.72 2.006-1.414.248-.695.248-1.29.174-1.414-.074-.124-.272-.198-.57-.347z" />
                </svg>
                Initialize Demo
              </button>
            </a>
            <a href="#architecture" className="text-slate-400 hover:text-white font-medium flex items-center gap-2 transition-colors">
              View Architecture <span className="text-xl">↓</span>
            </a>
          </div>

        </div>
      </section>

      {/* HOLOGRAPHIC CHAT MOCKUP - Floating Effect */}
      <section className="relative z-20 px-6 -mt-10 md:-mt-20 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-[#0a0f1a]/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.1)] overflow-hidden transform perspective-1000 rotate-x-2 hover:rotate-x-0 transition-transform duration-700 ease-out">
            
            {/* Top Bar */}
            <div className="flex items-center px-6 py-4 border-b border-white/5 bg-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="mx-auto flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-400">magicbot-core-v2.1.ts</span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-6 md:p-10 space-y-6 bg-gradient-to-b from-transparent to-black/20">
              
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-white/10 backdrop-blur-md border border-white/5 text-white rounded-2xl rounded-tr-sm px-5 py-4 max-w-[85%] text-sm md:text-base font-light shadow-lg">
                  Hi, we are launching a new residential project in Downtown. Can you handle 10,000+ brochure requests per hour via WhatsApp? 🏢
                </div>
              </div>

              {/* Bot Processing State (Micro-interaction) */}
              <div className="flex justify-start items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <span className="text-lg">🤖</span>
                </div>
                <div className="bg-[#131c2c] border border-white/5 text-slate-200 rounded-2xl rounded-tl-sm px-6 py-5 max-w-[85%] shadow-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Instant Execution</span>
                  </div>
                  <p className="font-light leading-relaxed">
                    Absolutely. Magicbot handles high-concurrency requests seamlessly. I will:
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Dispatch brochures instantly.
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Qualify buyer intent (budget & timeframe).
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Sync qualified leads straight to your Salesforce/HubSpot CRM.
                    </li>
                  </ul>
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Latency: 42ms</span>
                    <span className="text-emerald-500">System Ready</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* METRICS (Glassmorphism Strip) */}
      <section className="relative z-10 py-10 px-6 border-y border-white/5 bg-white/[0.02] backdrop-blur-3xl">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
          {[
            { label: "Uptime", value: "99.99%" },
            { label: "Avg Response Time", value: "< 1s" },
            { label: "Lead Capture Rate", value: "+45%" },
            { label: "Integration", value: "Native WA" },
          ].map((stat) => (
            <div key={stat.label} className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter">{stat.value}</div>
              <div className="mt-2 text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ASYMMETRIC BENTO GRID (Industries) */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Pre-trained for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">complex ecosystems.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">Out-of-the-box intelligence designed for high-throughput service industries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
            {industries.map((ind) => (
              <div 
                key={ind.name} 
                className={`relative group rounded-3xl bg-white/[0.03] border border-white/5 overflow-hidden backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500 p-8 flex flex-col justify-between ${ind.span}`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-transparent group-hover:from-emerald-500/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0f172a] border border-white/10 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                      {ind.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-mono">
                      {ind.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{ind.name}</h3>
                  {ind.desc && (
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                      {ind.desc}
                    </p>
                  )}
                </div>

                <div className="relative z-10 mt-auto pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium group-hover:translate-x-1 transition-transform">
                    Explore Configuration
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE / HOW IT WORKS */}
      <section id="architecture" className="relative z-10 py-32 px-6 bg-black/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Zero-friction architecture</h2>
            <p className="mt-4 text-slate-400 text-lg">Your customers don&apos;t need new apps. We operate where they already are.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[50%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent -translate-y-1/2" />

            {steps.map((item) => (
              <div key={item.title} className="relative z-10 bg-[#0a0f1a] p-8 rounded-3xl border border-white/5 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl mb-6">
                  {item.icon}
                </div>
                <div className="text-xs font-mono font-bold tracking-widest text-slate-500 mb-2">
                  PHASE {item.step}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${item.color}`}>
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - IMMERSIVE */}
      <section className="relative z-10 py-40 px-6 overflow-hidden">
        {/* Deep Glow Core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-600/30 via-teal-600/30 to-blue-600/30 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Ready to upgrade your business OS?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
            Join the UAE businesses utilizing Magicbot to automate support, capture leads, and scale indefinitely.
          </p>
          
          <a
            href={waStart}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-300"
          >
            Deploy on WhatsApp
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  );
}