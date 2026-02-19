import N8NChatWidget from "@/components/N8NChatWidget";

const NEWS_ITEMS = [
  "Student wins National AI Hackathon 2025 — 1st Prize",
  "IIST Indore Signs MoU with leading Tech Giants for Research Collaboration",
  "Annual Tech Fest 'TECHNOVA 2025' — Registrations Open",
  "Placement Drive: 95% Placement Record Achieved — Batch 2025",
  "New Research Lab Inaugurated by Honourable Vice Chancellor",
  "International Conference on Emerging Technologies — Call for Papers",
];

const RECENT_POSTS = [
  "AI-Powered C++ Programming Assessment Using ScratchBox",
  "10 Teams Secure Place in Grand Finale of National-Level Hackathons",
  "Faculty Empowered with Advanced MATLAB & Simulink Training",
  "INDUCTION 2025: Welcome B.Tech and MBA Batch 2025",
  "Internal Hackathon: Fostering Innovation for Smart India Hackathon",
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
];

const PROGRAMS = [
  { name: "B.Tech Computer Science", duration: "4 Years", seats: "120" },
  { name: "B.Tech Electronics & Communication", duration: "4 Years", seats: "60" },
  { name: "B.Tech Mechanical Engineering", duration: "4 Years", seats: "60" },
  { name: "MBA — Business Analytics", duration: "2 Years", seats: "60" },
];

const STATS = [
  { value: "5000+", label: "Students Enrolled" },
  { value: "200+", label: "Faculty Members" },
  { value: "95%", label: "Placement Rate" },
  { value: "150+", label: "Industry Partners" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-college-body">

      {/* Top bar */}
      <div className="top-bar-stripe text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>Affiliated to RGPV | NAAC Accredited Institution</span>
          <div className="hidden md:flex items-center gap-4">
            <span>📞 +91-731-XXXXXXXX</span>
            <span>✉ info@iist.ac.in</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
              style={{ background: 'hsl(276 72% 35%)' }}
            >
              II
            </div>
            <div>
              <h1 className="font-college-heading text-xl md:text-2xl font-bold leading-tight"
                style={{ color: 'hsl(276 72% 28%)' }}>
                Indian Institute of Information Science & Technology
              </h1>
              <p className="text-sm text-muted-foreground font-college-body mt-0.5">
                IIST Indore — Excellence in Education & Research
              </p>
              <div className="flex gap-2 mt-1">
                <span className="tag-chip">NAAC Accredited</span>
                <span className="tag-chip">AICTE Approved</span>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="md:ml-auto flex flex-col items-end gap-2">
            <button
              onClick={() => {
                const el = document.querySelector('.n8n-chat-toggle') as HTMLButtonElement;
                if (el) el.click();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded text-white text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{ background: 'hsl(276 72% 35%)' }}
            >
              <span>🤖</span>
              <span>Ask JARVIS AI</span>
            </button>
            <p className="text-xs text-muted-foreground">Your personal campus AI assistant</p>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="nav-bar text-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap gap-0 text-sm font-semibold">
            {["Home", "About", "Academics", "Admissions", "Research", "Faculty", "Students", "Placements", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block px-4 py-3 hover:bg-white/20 transition-colors duration-150 tracking-wide"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Ticker */}
      <div className="bg-yellow-50 border-b border-yellow-200 py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
          <span
            className="flex-shrink-0 text-white text-xs font-bold px-3 py-1 rounded"
            style={{ background: 'hsl(43 96% 50%)', color: 'hsl(240 10% 15%)' }}
          >
            NEWS
          </span>
          <div className="overflow-hidden flex-1">
            <p className="text-sm text-yellow-900 animate-fade-in-up">
              {NEWS_ITEMS[Math.floor(Date.now() / 5000) % NEWS_ITEMS.length]}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="hero-band text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              className="inline-block text-xs font-semibold px-3 py-1 rounded"
              style={{ background: 'hsl(43 96% 50%)', color: 'hsl(240 10% 15%)' }}
            >
              Admissions Open 2025-26
            </div>
            <h2 className="font-college-heading text-3xl md:text-4xl font-bold leading-tight">
              Shaping Future Leaders in Technology & Innovation
            </h2>
            <p className="text-white/80 text-base leading-relaxed max-w-lg">
              IIST Indore is a premier institution offering world-class education in engineering, technology, and management. With state-of-the-art infrastructure and industry-focused curriculum, we prepare students for the challenges of tomorrow.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white font-semibold px-6 py-2.5 rounded text-sm transition-all duration-200 hover:bg-yellow-50"
                style={{ color: 'hsl(276 72% 35%)' }}>
                Apply Now
              </button>
              <button className="border border-white/60 text-white font-semibold px-6 py-2.5 rounded text-sm hover:bg-white/10 transition-all duration-200">
                Know More
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-5 text-center border border-white/20">
                <div className="font-college-heading text-3xl font-bold text-white">{s.value}</div>
                <div className="text-white/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — Main */}
          <div className="lg:col-span-2 space-y-8">

            {/* Welcome */}
            <section className="college-card p-6">
              <h2 className="section-label">Welcome to IIST Indore</h2>
              <p className="text-foreground/80 text-sm leading-relaxed mb-3">
                Indian Institute of Information Science & Technology (IIST), Indore is committed to academic excellence and holistic student development. Our institution combines rigorous academics with cutting-edge research and industry collaboration.
              </p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                With a dedicated faculty, modern laboratories, and a vibrant campus life, IIST Indore offers an unparalleled educational experience that prepares graduates for global careers and responsible citizenship.
              </p>
              <div className="mt-4 p-4 rounded-lg border-l-4 text-sm italic text-foreground/70"
                style={{ borderColor: 'hsl(276 72% 35%)', background: 'hsl(276 30% 97%)' }}>
                "Education is not the filling of a pail, but the lighting of a fire." — William Butler Yeats
              </div>
            </section>

            {/* Programs */}
            <section className="college-card p-6">
              <h2 className="section-label">Academic Programs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROGRAMS.map((p, i) => (
                  <div key={i} className="border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-sm transition-all duration-200 cursor-pointer">
                    <h3 className="font-semibold text-sm mb-1" style={{ color: 'hsl(276 72% 35%)' }}>{p.name}</h3>
                    <div className="text-xs text-muted-foreground flex gap-3">
                      <span>⏱ {p.duration}</span>
                      <span>👥 {p.seats} Seats</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="inline-block mt-4 text-sm font-semibold hover:underline" style={{ color: 'hsl(276 72% 35%)' }}>
                View All Programs →
              </a>
            </section>

            {/* Events */}
            <section className="college-card p-6">
              <h2 className="section-label">Upcoming Events</h2>
              <div className="space-y-3">
                {[
                  { date: "Mar 15", title: "TECHNOVA 2025 — Annual Tech Fest", type: "Event" },
                  { date: "Mar 22", title: "Campus Placement Drive — TCS, Infosys, Wipro", type: "Placement" },
                  { date: "Apr 05", title: "International Research Symposium", type: "Academic" },
                  { date: "Apr 12", title: "Alumni Meet 2025 — Register Now", type: "Alumni" },
                ].map((ev, i) => (
                  <div key={i} className="flex gap-4 items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-shrink-0 w-12 text-center rounded-lg p-2 text-white text-xs font-bold"
                      style={{ background: 'hsl(276 72% 35%)' }}>
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

          {/* Right Sidebar */}
          <aside className="space-y-6">

            {/* AI Assistant CTA */}
            <div className="rounded-lg p-5 text-white text-center"
              style={{ background: 'hsl(276 72% 35%)' }}>
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-college-heading font-bold text-base mb-1">JARVIS AI Assistant</h3>
              <p className="text-white/80 text-xs mb-3">Get instant answers about admissions, courses, campus life, and more.</p>
              <button
                onClick={() => {
                  const el = document.querySelector('.n8n-chat-toggle') as HTMLButtonElement;
                  if (el) el.click();
                }}
                className="bg-white font-bold text-xs px-5 py-2 rounded transition-all duration-200 hover:bg-yellow-50 w-full"
                style={{ color: 'hsl(276 72% 35%)' }}
              >
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
                    <a href="#" className="text-sm text-foreground/80 hover:text-primary hover:underline leading-snug transition-colors">
                      {post}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="college-card p-5">
              <h3 className="section-label">Quick Links</h3>
              <ul className="space-y-1">
                {QUICK_LINKS.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm py-1.5 hover:text-primary transition-colors text-foreground/80"
                    >
                      <span style={{ color: 'hsl(276 72% 35%)' }}>›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notice board */}
            <div className="college-card p-5">
              <h3 className="section-label">Notice Board</h3>
              <ul className="space-y-2">
                {[
                  "Mid-Semester Exam Schedule Released",
                  "Scholarship Applications — Last Date: March 30",
                  "Library Closed on March 20 (Holiday)",
                  "Guest Lecture by Dr. Sharma — March 18",
                ].map((notice, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-foreground/80 border-b border-border pb-2 last:border-0 last:pb-0">
                    <span className="flex-shrink-0 mt-1 text-yellow-500">📌</span>
                    <span className="leading-snug">{notice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-white" style={{ background: 'hsl(276 72% 20%)' }}>
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-college-heading font-bold text-base mb-3">IIST Indore</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Dedicated to academic excellence, innovation, and producing industry-ready professionals since 2005.
            </p>
          </div>
          <div>
            <h4 className="font-college-heading font-bold text-base mb-3">Contact Us</h4>
            <ul className="space-y-1 text-white/70 text-sm">
              <li>📍 Scheme 74-C, Vijay Nagar, Indore — 452010</li>
              <li>📞 +91-731-XXXXXXXX</li>
              <li>✉ info@iist.ac.in</li>
              <li>🌐 www.iist.ac.in</li>
            </ul>
          </div>
          <div>
            <h4 className="font-college-heading font-bold text-base mb-3">Important Links</h4>
            <ul className="space-y-1 text-white/70 text-sm">
              {["AICTE", "RGPV University", "UGC", "NAAC", "Ministry of Education"].map((l) => (
                <li key={l}><a href="#" className="hover:text-yellow-400 transition-colors">› {l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 py-4">
          <p className="text-center text-white/50 text-xs">
            © {new Date().getFullYear()} Indian Institute of Information Science & Technology, Indore. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* N8N Chat Widget */}
      <N8NChatWidget />
    </div>
  );
};

export default Index;
