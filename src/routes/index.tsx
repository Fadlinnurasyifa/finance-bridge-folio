import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Check,
  ChevronDown,
  Download,
  FileSpreadsheet,
  Landmark,
  Linkedin,
  Mail,
  Menu,
  MonitorCog,
  ReceiptText,
  TrendingUp,
  X,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fadlin Nur Asyifa | Accounting & Finance Professional" },
      {
        name: "description",
        content:
          "Fadlin Nur Asyifa is an Accounting & Finance professional with an Information Technology background, experienced in Accounts Receivable, bank reconciliation, SAP Business One, Microsoft Excel, invoicing, and financial data processing.",
      },
      { property: "og:title", content: "Fadlin Nur Asyifa | Accounting & Finance Professional" },
      {
        property: "og:description",
        content:
          "Accounting & Finance professional with an Information Technology background and practical experience in AR, reconciliation, SAP Business One, and Excel.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const navItems = [
  ["Home", "home"], ["About", "about"], ["Experience", "experience"],
  ["Projects", "projects"], ["Skills", "skills"], ["Certifications", "certifications"],
  ["Education", "education"], ["Contact", "contact"],
] as const;

const projects = [
  {
    number: "01", title: "Accounts Receivable Aging Analysis", icon: ReceiptText,
    description: "An Excel-based AR aging analysis designed to monitor customer outstanding balances, overdue invoices, payment status, and collection priorities.",
    skills: ["Excel", "AR", "Aging Analysis", "Data Validation"],
    detail: "A structured aging view groups balances by due date, flags overdue exposure, and establishes clear collection priorities for follow-up.",
  },
  {
    number: "02", title: "Bank Reconciliation", icon: Landmark,
    description: "Practical bank reconciliation workflow comparing company financial records with bank mutations to identify discrepancies and ensure transaction accuracy.",
    skills: ["Bank Reconciliation", "Excel", "Financial Data Analysis"],
    detail: "The workflow pairs daily bank movements against internal records, isolates unmatched items, and supports a traceable reconciliation process.",
  },
  {
    number: "03", title: "Marketplace Settlement Monitoring", icon: FileSpreadsheet,
    description: "Monitoring and reconciliation of marketplace transactions including TikTok Shop, Shopee, Lazada, and Blibli, including withdrawal transactions and AR settlement.",
    skills: ["Marketplace Finance", "Reconciliation", "AR", "Excel"],
    detail: "Settlement monitoring brings multiple marketplace channels into one control process for withdrawals, deductions, and outstanding receivables.",
  },
  {
    number: "04", title: "General Journal & Basic Accounting", icon: Calculator,
    description: "A collection of practical accounting exercises covering journal entries, account classification, debit-credit analysis, and basic financial transaction recording.",
    skills: ["General Accounting", "Journal Entries", "Accounting Principles"],
    detail: "The work demonstrates a disciplined foundation in transaction classification, debit-credit treatment, and consistent journal documentation.",
  },
];

const skillGroups = [
  { label: "Accounting & Finance", items: ["Accounts Receivable", "Bank Reconciliation", "Invoicing", "Financial Data Processing", "General Accounting", "AR Aging", "Marketplace Settlement", "Tax Administration"] },
  { label: "Technology & Data", items: ["Microsoft Excel", "SAP Business One", "Data Analysis", "Data Processing", "Information Technology", "Process Improvement"] },
  { label: "Excel", items: ["VLOOKUP", "XLOOKUP", "HLOOKUP", "SUM", "SUMIF", "SUMIFS", "Pivot Table", "Data Validation", "Basic Financial Analysis"] },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button className="text-left" onClick={() => scrollTo("home")} aria-label="Go to home">
            <span className="block font-display text-sm font-bold uppercase text-foreground">Fadlin Nur Asyifa</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Finance × Accounting × Technology</span>
          </button>
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
            {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="nav-link">{label}</button>)}
          </nav>
          <button className="icon-button xl:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 xl:hidden">{navItems.map(([label,id]) => <button key={id} onClick={() => scrollTo(id)} className="block w-full border-b border-border py-3 text-left text-sm font-semibold">{label}</button>)}</nav>}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden border-b border-border pt-18">
          <div className="hero-grid" aria-hidden="true" />
          <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_20rem] lg:px-8 lg:py-24">
            <div className="max-w-4xl animate-rise">
              <div className="eyebrow"><span className="status-dot" /> Accounting & Finance Professional</div>
              <h1 className="mt-8 font-display text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl lg:text-[5.5rem]">
                Fadlin Nur Asyifa<span className="text-accent">, S.Kom.</span>
              </h1>
              <p className="mt-8 max-w-3xl font-display text-2xl leading-snug text-foreground sm:text-3xl">Bridging Finance, Accounting <span className="text-accent">& Technology.</span></p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">Accounting & Finance professional with an Information Technology background and hands-on experience in Accounts Receivable, bank reconciliation, invoicing, marketplace transactions, financial data processing, tax administration, SAP Business One, and Microsoft Excel.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <button className="button-primary" onClick={() => scrollTo("experience")}>View My Experience <ArrowDown size={16}/></button>
                <button className="button-secondary" onClick={() => scrollTo("projects")}>View Projects <ArrowUpRight size={16}/></button>
                <button className="button-quiet" disabled title="CV file not yet provided"><Download size={16}/> Download CV</button>
              </div>
            </div>
            <aside className="lg:self-end lg:pb-10">
              <div className="border-l-2 border-accent pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Open to</p>
                <p className="mt-3 font-display text-lg leading-relaxed">Accounting • Finance • AR • Finance & IT Opportunities</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
                <div className="bg-background p-5"><span className="stat-small">6+</span><span className="label-small">Years Experience</span></div>
                <div className="bg-background p-5"><span className="stat-small">Rp7B+</span><span className="label-small">Monthly AR Exposure</span></div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="section-wrap">
          <SectionHeading index="01" eyebrow="Professional Profile" title="Where Finance Meets Technology" />
          <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6 text-base leading-8 text-muted-foreground">
              <p>I am an Accounting & Finance professional with a Bachelor’s degree in Information Technology. My career experience has developed primarily in finance and accounting operations, giving me a practical understanding of financial transactions, Accounts Receivable, bank reconciliation, invoicing, marketplace settlements, tax administration, and financial data processing.</p>
              <p>My IT background strengthens the way I approach financial work — with structured thinking, data accuracy, process improvement, and technology-driven problem solving.</p>
              <p>I am particularly interested in growing further in Accounting, Finance, Accounts Receivable, Financial Analysis, and roles where Finance and Technology intersect.</p>
            </div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              <Capability title="Accounting & Finance" icon={<Landmark size={20}/>} items={["Accounts Receivable","Bank Reconciliation","Invoicing","Financial Data Processing","Marketplace Settlement","Tax Administration","Financial Reporting Support"]}/>
              <Capability title="Technology" icon={<MonitorCog size={20}/>} items={["Information Technology","SAP Business One","Microsoft Excel","Data Processing","Analytical Thinking","Process Improvement","Digital Systems"]}/>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-section">
          <div className="section-wrap">
            <SectionHeading index="02" eyebrow="Career History" title="Professional Experience" />
            <div className="mt-14 grid gap-12 lg:grid-cols-[18rem_1fr]">
              <div><p className="role-date">Jan 2024 — Present</p><h3 className="mt-2 font-display text-2xl">PT Aditya Sriwijaya</h3><p className="mt-1 font-semibold text-accent">Accounting</p></div>
              <div>
                <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {["Accounts Receivable management","Daily bank transaction verification","BCA & Mandiri reconciliation","AR settlement through SAP Business One","Customer deposits and over-WD monitoring","Daily sales billing and invoicing","Marketplace settlement monitoring","AR aging and outstanding monitoring","Bank reconciliation","Tax administration support","Financial document management","Monthly stock opname support"].map(item => <div className="flex gap-3 border-b border-border py-3 text-sm" key={item}><Check className="mt-0.5 shrink-0 text-accent" size={16}/><span>{item}</span></div>)}
                </div>
                <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-5">
                  {[["100+","Daily transactions"],["Rp7B+","Monthly AR value"],["100+","Customers monitored"],["BCA & Mandiri","Reconciliation"],["SAP Business One","ERP experience"]].map(([value,label]) => <div className="bg-background p-5" key={label}><strong className="block font-display text-xl text-foreground">{value}</strong><span className="mt-2 block text-xs leading-5 text-muted-foreground">{label}</span></div>)}
                </div>
              </div>
            </div>
            <div className="my-14 border-t border-border" />
            <div className="grid gap-12 lg:grid-cols-[18rem_1fr]">
              <div><p className="role-date">2018 — 2022</p><h3 className="mt-2 font-display text-2xl">LPK Hikari Sumut</h3><p className="mt-1 font-semibold text-accent">Finance Administration</p></div>
              <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">{["Petty cash management","Invoice processing","AR/AP settlement","Customer & supplier collection","Payroll reporting","Administrative financial documentation","Office operational support"].map(item => <div className="flex gap-3 border-b border-border py-3 text-sm" key={item}><Check className="mt-0.5 shrink-0 text-accent" size={16}/><span>{item}</span></div>)}</div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-wrap">
          <SectionHeading index="03" eyebrow="Selected Work" title="Finance Projects & Practical Work" />
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {projects.map(project => <ProjectCard key={project.number} {...project}/>) }
          </div>
          <DashboardPreview />
        </section>

        <section id="skills" className="bg-dark text-dark-foreground">
          <div className="section-wrap">
            <SectionHeading index="04" eyebrow="Core Capabilities" title="Skills & Systems" dark />
            <div className="mt-14 grid gap-10 lg:grid-cols-3">{skillGroups.map((group,i) => <div key={group.label} className="border-t border-dark-border pt-6"><span className="text-xs font-bold text-dark-muted">0{i+1}</span><h3 className="mt-3 font-display text-xl">{group.label}</h3><div className="mt-6 flex flex-wrap gap-2">{group.items.map(item => <span className="skill-chip" key={item}>{item}</span>)}</div></div>)}</div>
          </div>
        </section>

        <section id="certifications" className="section-wrap">
          <SectionHeading index="05" eyebrow="Development" title="Certifications & Learning" />
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="subsection-title"><BadgeCheck size={19}/> Certifications</h3>
              <div className="mt-5 border-t border-border">
                <Credential title="Brevet Pajak AB" meta="LPAM Trisakti School of Management · 2025" />
                <Credential title="Accounting Equation" meta="MySkill.id" />
                <Credential title="Accounting Jurnal" meta="MySkill.id" />
                <Credential title="General Provisions of Taxation" meta="Professional learning" />
              </div>
            </div>
            <div>
              <h3 className="subsection-title"><TrendingUp size={19}/> Currently Learning</h3>
              <div className="mt-5 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">{["Financial Accounting","Financial Analysis","Advanced Excel","Data Analytics","Finance + Technology"].map((item,i) => <div className="bg-background p-5" key={item}><span className="text-xs font-bold text-accent">0{i+1}</span><p className="mt-3 font-semibold">{item}</p></div>)}</div>
            </div>
          </div>
        </section>

        <section id="education" className="bg-section">
          <div className="section-wrap">
            <SectionHeading index="06" eyebrow="Academic Foundation" title="Education & Professional Advantage" />
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="border-l-2 border-accent pl-6"><Building2 className="text-accent"/><p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">2018 — 2024</p><h3 className="mt-2 font-display text-2xl">Bachelor of Computer Science / Information Technology</h3><p className="mt-3 font-semibold">Universitas Krisnadwipayana</p><p className="mt-1 text-sm text-muted-foreground">GPA: 3.25</p></div>
              <div className="education-equation">
                {[["IT Education","Structured, systems-oriented thinking"],["Accounting & Finance Experience","Practical financial operations"],["Continuous Finance Learning","Evolving accounting expertise"]].map(([title,desc],i) => <div className="equation-item" key={title}><span>0{i+1}</span><strong>{title}</strong><small>{desc}</small></div>)}
                <div className="equation-result"><span>=</span><strong>Finance Professional with a Technology Advantage</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap">
          <SectionHeading index="07" eyebrow="The Next Chapter" title="Career Direction" />
          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">My long-term goal is to grow into a strong Accounting & Finance professional while developing analytical and technology capabilities that improve financial processes and business decision-making.</p>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">{["Accounting","Finance","Accounts Receivable","Financial Analysis","Finance & Technology"].map((item,i) => <div className="career-card" key={item}><span>0{i+1}</span><BriefcaseBusiness size={20}/><h3>{item}</h3></div>)}</div>
        </section>

        <section className="border-y border-border bg-foreground text-background">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-5 lg:px-8">{[["6+ Years","Finance & Accounting Experience"],["Rp7B+","Monthly AR Transaction Exposure"],["100+","Customers Monitored"],["SAP Business One","ERP Experience"],["Excel","Financial Data Processing"]].map(([value,label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        </section>

        <section id="contact" className="section-wrap text-center">
          <p className="eyebrow mx-auto w-fit">Available for the right opportunity</p>
          <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-semibold sm:text-6xl">Let’s build more accurate, efficient financial processes.</h2>
          <p className="mx-auto mt-7 max-w-2xl leading-7 text-muted-foreground">I’m open to opportunities, professional connections, and conversations around Accounting, Finance, Accounts Receivable, Financial Analysis, and Finance & Technology.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button disabled className="button-primary" title="LinkedIn profile not yet provided"><Linkedin size={16}/> LinkedIn</button>
            <button disabled className="button-secondary" title="Email address not yet provided"><Mail size={16}/> Email</button>
            <button disabled className="button-quiet" title="CV file not yet provided"><Download size={16}/> Download CV</button>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Contact links and CV will be activated when details are provided.</p>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><strong className="font-display">Fadlin Nur Asyifa, S.Kom.</strong><p className="mt-1 text-sm text-muted-foreground">Accounting & Finance Professional</p></div><p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Finance × Accounting × Technology</p></div></footer>
    </div>
  );
}

function SectionHeading({ index, eyebrow, title, dark = false }: { index:string; eyebrow:string; title:string; dark?:boolean }) {
  return <div className="grid gap-4 border-b border-border pb-7 md:grid-cols-[8rem_1fr]"><div className={dark ? "text-dark-muted" : "text-muted-foreground"}><span className="text-xs font-bold">{index}</span><p className="mt-2 text-xs font-bold uppercase tracking-[0.16em]">{eyebrow}</p></div><h2 className="font-display text-3xl font-semibold sm:text-5xl">{title}</h2></div>;
}

function Capability({title,icon,items}:{title:string;icon:React.ReactNode;items:string[]}) {
  return <div className="bg-background p-6 sm:p-8"><div className="flex items-center gap-3 text-accent">{icon}<h3 className="font-display text-lg text-foreground">{title}</h3></div><ul className="mt-6 space-y-3">{items.map(item=><li key={item} className="flex items-center gap-3 text-sm"><span className="h-px w-4 bg-accent"/>{item}</li>)}</ul></div>;
}

function ProjectCard({number,title,icon:Icon,description,skills,detail}:typeof projects[number]) {
  return <details className="project-card group"><summary><div className="flex items-center justify-between"><span className="project-number">{number}</span><Icon className="text-accent" size={22}/></div><h3 className="mt-8 font-display text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p><div className="mt-6 flex items-center justify-between"><div className="flex flex-wrap gap-2">{skills.slice(0,3).map(skill=><span className="tag" key={skill}>{skill}</span>)}</div><ChevronDown className="detail-chevron shrink-0 text-accent" size={20}/></div></summary><div className="border-t border-border px-6 py-5"><p className="text-sm leading-7 text-muted-foreground">{detail}</p></div></details>;
}

function DashboardPreview() {
  const bars = [38,48,44,61,57,72,68,81,76,88,84,94];
  return <details className="dashboard mt-4 group" open>
    <summary className="flex cursor-pointer list-none items-center justify-between p-6 sm:p-8"><div><span className="project-number">05 / Financial Dashboard</span><h3 className="mt-3 font-display text-2xl">Management Finance Overview</h3></div><div className="flex items-center gap-3"><span className="demo-label">Sample / Demonstration Data</span><ChevronDown className="detail-chevron" size={20}/></div></summary>
    <div className="border-t border-dashboard-line p-5 sm:p-8">
      <div className="grid gap-px overflow-hidden border border-dashboard-line bg-dashboard-line sm:grid-cols-2 lg:grid-cols-5">{[["Total Revenue","Rp 8.42B","+8.4%"],["Accounts Receivable","Rp 2.16B","25.7%"],["Outstanding","Rp 641M","−4.2%"],["Collection Rate","92.6%","+2.1%"],["Overdue Amount","Rp 184M","8.5% of AR"]].map(([label,value,delta])=><div className="bg-dashboard p-5" key={label}><span className="text-xs text-dashboard-muted">{label}</span><strong className="mt-3 block font-display text-xl">{value}</strong><span className="mt-2 block text-xs text-dashboard-accent">{delta}</span></div>)}</div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_15rem]"><div><div className="flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-[0.15em] text-dashboard-muted">Monthly Collection Trend</p><span className="text-xs text-dashboard-muted">Jan — Dec</span></div><div className="mt-6 flex h-48 items-end gap-2 border-b border-dashboard-line px-2">{bars.map((height,i)=><div key={i} className="flex h-full flex-1 items-end"><span className="w-full bg-dashboard-accent/70 transition-all duration-500 group-hover:bg-dashboard-accent" style={{height:`${height}%`}} /></div>)}</div></div><div className="flex flex-col justify-center border-l border-dashboard-line pl-7"><span className="text-xs text-dashboard-muted">Collection performance</span><strong className="mt-2 font-display text-4xl">92.6%</strong><div className="mt-5 h-1.5 bg-dashboard-line"><div className="h-full w-[92.6%] bg-dashboard-accent"/></div><span className="mt-3 text-xs text-dashboard-muted">Target: 90.0%</span></div></div>
    </div>
  </details>;
}

function Credential({title,meta}:{title:string;meta:string}) { return <div className="flex items-start justify-between gap-5 border-b border-border py-5"><div><strong className="font-display text-lg">{title}</strong><p className="mt-1 text-sm text-muted-foreground">{meta}</p></div><ArrowUpRight className="shrink-0 text-accent" size={18}/></div> }