import N8NChatWidget from "@/components/N8NChatWidget";

const NEWS_ITEMS = [
  "Important Documents For Admission (2025 - 2026)",
  "Scholarship Applications — Last Date: March 30, 2025",
  "TECHNOVA 2025 — Annual Tech Fest Registrations Open",
  "Placement Drive: TCS, Infosys, Wipro — Campus Visit Scheduled",
  "International Conference on Emerging Technologies — Call for Papers",
];

const RECENT_POSTS = [
  "IIST Conducts AI-Powered C++ Programming Assessment Using ScratchBox",
  "10 Teams from IIST Indore Secure Their Place in the Grand Finale of National-Level Hackathons",
  "IIST Empowers Multidisciplinary Faculty with Advanced MATLAB & Simulink Training Session",
  "INDUCTION 2025: IIST and IIMR Welcome B.Tech and MBA Batch 2025",
  "IIST's Internal Hackathon: Fostering Innovation and Future-Ready Skills for Smart India Hackathon",
];

const QUICK_LINKS = [
  "Academic Calendar",
  "Examination Schedule",
  "Fee Payment Portal",
  "Library Resources",
  "Placement Cell",
  "Research & Innovation",
  "Hostel Facilities",
  "Student Grievance",
  "NAAC Documents",
  "ARIIA Report",
];

const PROGRAMS = [
  { name: "B.Tech Computer Science & Engineering", duration: "4 Years", seats: "120" },
  { name: "B.Tech Electronics & Communication", duration: "4 Years", seats: "60" },
  { name: "B.Tech Mechanical Engineering", duration: "4 Years", seats: "60" },
  { name: "B.Tech Civil Engineering", duration: "4 Years", seats: "60" },
  { name: "MBA — Business Administration", duration: "2 Years", seats: "60" },
  { name: "B.Pharm — Pharmacy", duration: "4 Years", seats: "60" },
];

const HIGHLIGHTS = [
  { value: "5000+", label: "Students" },
  { value: "A+", label: "NAAC Grade" },
  { value: "95%", label: "Placement" },
  { value: "200+", label: "Faculty" },
];

const NAV_ITEMS = ["About IIST", "Our Program", "Admissions", "Placement", "Facilities", "More", "ARIIA & IIC", "NAAC"];

// NAAC Badge component
const NaacBadge = ({ grade = "A+" }: { grade?: string }) => (
  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 text-xs font-black flex-shrink-0"
    style={{ borderColor: 'hsl(43 96% 50%)', background: 'hsl(43 96% 50%)', color: 'hsl(0 80% 40%)' }}>
    {grade}
  </div>
);

// Institution logo block
const InstitutionBlock = ({ abbr, name, color }: { abbr: string; name: string; color: string }) => (
  <div className="flex items-center gap-2">
    <NaacBadge />
    <div className="flex items-center gap-1">
      <span className="font-black text-2xl tracking-tighter" style={{ color }}>
        {"II".split("").map((c, i) => (
          <span key={i} style={{ display: 'inline-block', borderLeft: `3px solid ${color}`, paddingLeft: '1px', marginRight: '1px' }}>{c}</span>
        ))}
        <span style={{ color: 'hsl(43 96% 50%)' }}>{abbr.slice(2)}</span>
      </span>
      <div className="text-xs leading-tight" style={{ color: 'hsl(220 10% 30%)' }}>
        <span className="font-bold block">{name.split("—")[0]}</span>
        <span className="text-gray-500">{name.split("—")[1]}</span>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-college-body text-foreground">

      {/* Announcement top bar */}
      <div className="py-1.5 text-center text-xs font-semibold overflow-hidden"
        style={{ background: 'hsl(0 0% 96%)', color: 'hsl(340 80% 50%)' }}>
        <span className="animate-fade-in-up inline-block">
          📢 Important Documents For Admission (2025 - 2026) &nbsp;|&nbsp; NAAC A+ Accredited Institution &nbsp;|&nbsp; AICTE Approved
        </span>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-border py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">

          {/* Left: Main logo */}
          <div className="flex items-center gap-3">
            {/* Circular logo */}
            <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0 overflow-hidden"
              style={{ borderColor: 'hsl(43 96% 50%)', background: 'hsl(43 96% 96%)' }}>
              <div className="text-center leading-tight">
                <div className="font-black text-xs" style={{ color: 'hsl(145 100% 22%)' }}>IIST</div>
                <div className="text-xs" style={{ color: 'hsl(220 75% 38%)' }}>IIP</div>
                <div className="text-xs" style={{ color: 'hsl(0 80% 40%)' }}>IIMR</div>
              </div>
            </div>
          </div>

          {/* Center: Institution names */}
          <div className="flex flex-wrap items-center gap-6 justify-center">
            {/* IIST */}
            <div className="flex items-center gap-2">
              <NaacBadge />
              <div>
                <div className="font-black text-2xl" style={{ color: 'hsl(220 75% 38%)' }}>
                  II<span style={{ color: 'hsl(43 96% 42%)' }}>ST</span>
                </div>
                <div className="text-xs text-gray-600 leading-tight">Indore Institute of<br /><strong>Science & Technology</strong></div>
              </div>
            </div>

            {/* IIP */}
            <div className="hidden md:flex items-center gap-2">
              <NaacBadge />
              <div>
                <div className="font-black text-2xl" style={{ color: 'hsl(220 75% 38%)' }}>
                  II<span style={{ color: 'hsl(43 96% 42%)' }}>P</span>
                </div>
                <div className="text-xs text-gray-600 leading-tight">Indore Institute of<br /><strong>Pharmacy</strong></div>
              </div>
            </div>

            {/* IIMR */}
            <div className="hidden md:flex items-center gap-2">
              <NaacBadge />
              <div>
                <div className="font-black text-2xl" style={{ color: 'hsl(220 75% 38%)' }}>
                  II<span style={{ color: 'hsl(43 96% 42%)' }}>MR</span>
                </div>
                <div className="text-xs text-gray-600 leading-tight">Indore Institute of<br /><strong>Management & Research</strong></div>
              </div>
            </div>
          </div>

          {/* Right: AI button */}
          <button
            onClick={() => {
              const el = document.querySelector('.n8n-chat-toggle') as HTMLButtonElement;
              if (el) el.click();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded text-white text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{ background: 'hsl(145 100% 22%)' }}>
            🤖 Ask JARVIS AI
          </button>
        </div>
      </header>

      {/* Green Navigation */}
      <nav className="nav-bar text-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap text-sm font-bold">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a href="#"
                  className="flex items-center gap-1 px-4 py-3 hover:bg-black/20 transition-colors duration-150 tracking-wide uppercase text-xs">
                  {item}
                  {["About IIST", "Our Program", "Facilities", "More", "ARIIA & IIC", "NAAC"].includes(item) && (
                    <span className="text-white/70 text-xs">▾</span>
                  )}
                </a>
              </li>
            ))}
            <li className="ml-auto flex items-center px-4">
              <span className="text-white/80 cursor-pointer hover:text-white">🔍</span>
            </li>
          </ul>
        </div>
      </nav>

      {/* News Ticker */}
      <div className="bg-yellow-50 border-b border-yellow-200 py-1.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
          <span className="flex-shrink-0 text-white text-xs font-bold px-3 py-1 rounded"
            style={{ background: 'hsl(0 80% 45%)' }}>
            NEWS
          </span>
          <p className="text-sm font-medium" style={{ color: 'hsl(0 80% 35%)' }}>
            {NEWS_ITEMS[0]}
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — Main 2/3 */}
          <div className="lg:col-span-2 space-y-8">

            {/* Featured Article */}
            <section>
              {/* Hero image placeholder */}
              <div className="w-full aspect-video rounded overflow-hidden border border-border mb-4 relative"
                style={{ background: 'hsl(145 20% 94%)' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                  style={{ color: 'hsl(145 100% 22%)' }}>
                  <div className="text-6xl">🏫</div>
                  <p className="font-bold text-lg text-center px-8">Indore Institute of Science & Technology</p>
                  <p className="text-sm text-gray-500">NAAC A+ Accredited | AICTE Approved</p>
                </div>
              </div>
              <h2 className="font-college-heading text-xl font-semibold mt-2 leading-snug"
                style={{ color: 'hsl(220 10% 15%)' }}>
                10 Teams from IIST Indore Secure Their Place in the Grand Finale of{" "}
                <span style={{ color: 'hsl(145 100% 22%)' }}>National-Level Hackathons</span>
              </h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Students from Indore Institute of Science and Technology showcased exceptional innovation skills, competing against top engineering colleges across India and securing places in the national finals.
              </p>
              <a href="#" className="inline-block mt-2 text-sm font-semibold hover:underline"
                style={{ color: 'hsl(145 100% 22%)' }}>
                Read More →
              </a>
            </section>

            {/* Highlights banner */}
            <div className="grid grid-cols-4 gap-3">
              {HIGHLIGHTS.map((h, i) => (
                <div key={i} className="rounded-lg p-4 text-center text-white"
                  style={{ background: 'hsl(145 100% 22%)' }}>
                  <div className="font-college-heading text-2xl font-black">{h.value}</div>
                  <div className="text-white/80 text-xs mt-0.5">{h.label}</div>
                </div>
              ))}
            </div>

            {/* Programs */}
            <section className="college-card p-6">
              <h2 className="section-label">Our Programs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROGRAMS.map((p, i) => (
                  <div key={i}
                    className="border border-border rounded-lg p-4 hover:border-primary/60 hover:shadow-sm transition-all duration-200 cursor-pointer"
                    style={{}}>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: 'hsl(145 100% 22%)' }}>{p.name}</h3>
                    <div className="text-xs text-muted-foreground flex gap-3">
                      <span>⏱ {p.duration}</span>
                      <span>👥 {p.seats} Seats</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="inline-block mt-4 text-sm font-semibold hover:underline"
                style={{ color: 'hsl(145 100% 22%)' }}>
                View All Programs →
              </a>
            </section>

            {/* Events */}
            <section className="college-card p-6">
              <h2 className="section-label">Upcoming Events</h2>
              <div className="space-y-2">
                {[
                  { date: "Mar 15", title: "TECHNOVA 2025 — Annual Tech Fest", type: "Event" },
                  { date: "Mar 22", title: "Campus Placement Drive — TCS, Infosys, Wipro", type: "Placement" },
                  { date: "Apr 05", title: "International Research Symposium", type: "Academic" },
                  { date: "Apr 12", title: "Alumni Meet 2025 — Register Now", type: "Alumni" },
                ].map((ev, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 rounded hover:bg-muted/50 transition-colors border-b border-border last:border-0">
                    <div className="flex-shrink-0 w-12 text-center rounded-lg p-2 text-white text-xs font-bold"
                      style={{ background: 'hsl(145 100% 22%)' }}>
                      {ev.date.split(" ")[0]}<br />{ev.date.split(" ")[1]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{ev.title}</p>
                      <span className="tag-chip mt-1 inline-block">{ev.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar — 1/3 */}
          <aside className="space-y-6">

            {/* AI Assistant */}
            <div className="rounded-lg p-5 text-white text-center"
              style={{ background: 'hsl(145 100% 22%)' }}>
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-college-heading font-bold text-base mb-1">JARVIS AI Assistant</h3>
              <p className="text-white/80 text-xs mb-3">
                Instantly get answers about admissions, courses, campus life & more.
              </p>
              <button
                onClick={() => {
                  const el = document.querySelector('.n8n-chat-toggle') as HTMLButtonElement;
                  if (el) el.click();
                }}
                className="bg-white font-bold text-xs px-5 py-2 rounded transition-all duration-200 hover:bg-yellow-50 w-full"
                style={{ color: 'hsl(145 100% 22%)' }}>
                Chat with JARVIS
              </button>
            </div>

            {/* Recent Posts */}
            <div className="college-card p-5">
              <h3 className="section-label">Recent Posts</h3>
              <ul className="space-y-3">
                {RECENT_POSTS.map((post, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="news-bullet" />
                    <a href="#" className="text-sm text-foreground/80 hover:underline leading-snug transition-colors"
                      style={{}}>
                      {post}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="college-card p-5">
              <h3 className="section-label">Quick Links</h3>
              <ul className="space-y-0.5">
                {QUICK_LINKS.map((link, i) => (
                  <li key={i}>
                    <a href="#"
                      className="flex items-center gap-2 text-sm py-1.5 text-foreground/80 hover:underline transition-colors">
                      <span style={{ color: 'hsl(145 100% 22%)' }}>›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notice Board */}
            <div className="college-card p-5">
              <h3 className="section-label">Notice Board</h3>
              <ul className="space-y-2">
                {[
                  "Mid-Semester Exam Schedule Released",
                  "Scholarship Applications — Last Date: March 30",
                  "Guest Lecture by Dr. Sharma — March 18",
                  "Library Closed on March 20 (Holiday)",
                ].map((notice, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-foreground/80 border-b border-border pb-2 last:border-0 last:pb-0">
                    <span className="flex-shrink-0 mt-0.5 text-yellow-500">📌</span>
                    <span className="leading-snug">{notice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-10 text-white" style={{ background: 'hsl(145 100% 14%)' }}>
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-college-heading font-bold text-base mb-3">
              Indore Institute of Science & Technology
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">
              NAAC A+ Accredited | AICTE Approved | Affiliated to RGPV<br />
              Excellence in Education, Research & Innovation since 2000.
            </p>
          </div>
          <div>
            <h4 className="font-college-heading font-bold text-base mb-3">Contact Us</h4>
            <ul className="space-y-1 text-white/70 text-sm">
              <li>📍 Rau-Pithampur Road, Indore — 453331</li>
              <li>📞 +91-731-4236000</li>
              <li>✉ info@iist.ac.in</li>
              <li>🌐 www.iist.ac.in</li>
            </ul>
          </div>
          <div>
            <h4 className="font-college-heading font-bold text-base mb-3">Important Links</h4>
            <ul className="space-y-1 text-white/70 text-sm">
              {["AICTE", "RGPV University", "UGC", "NAAC", "Ministry of Education", "ARIIA"].map((l) => (
                <li key={l}><a href="#" className="hover:text-yellow-400 transition-colors">› {l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 py-4">
          <p className="text-center text-white/50 text-xs">
            © {new Date().getFullYear()} Indore Institute of Science & Technology. All Rights Reserved. | Designed with ❤️ by JARVIS AI
          </p>
        </div>
      </footer>

      <N8NChatWidget />
    </div>
  );
};

export default Index;
