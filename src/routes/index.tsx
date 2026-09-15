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
      { title: "Fadlin Nur Asyifa | Profesional Akuntansi & Keuangan" },
      {
        name: "description",
        content:
          "Fadlin Nur Asyifa adalah profesional Akuntansi & Keuangan berlatar belakang Teknologi Informasi, berpengalaman dalam Piutang Usaha, rekonsiliasi bank, SAP Business One, Microsoft Excel, pembuatan faktur, dan pengolahan data keuangan.",
      },
      { property: "og:title", content: "Fadlin Nur Asyifa | Profesional Akuntansi & Keuangan" },
      {
        property: "og:description",
        content:
          "Profesional Akuntansi & Keuangan berlatar belakang Teknologi Informasi dengan pengalaman praktis dalam piutang usaha, rekonsiliasi, SAP Business One, dan Excel.",
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
  ["Beranda", "home"], ["Tentang", "about"], ["Pengalaman", "experience"],
  ["Proyek", "projects"], ["Keahlian", "skills"], ["Sertifikasi", "certifications"],
  ["Pendidikan", "education"], ["Kontak", "contact"],
] as const;

const projects = [
  {
    number: "01", title: "Analisis Umur Piutang Usaha", icon: ReceiptText,
    description: "Analisis umur piutang berbasis Excel untuk memantau saldo terutang pelanggan, faktur jatuh tempo, status pembayaran, dan prioritas penagihan.",
    skills: ["Excel", "Piutang Usaha", "Analisis Umur Piutang", "Validasi Data"],
    detail: "Tampilan umur piutang yang terstruktur mengelompokkan saldo berdasarkan tanggal jatuh tempo, menandai risiko keterlambatan, dan menetapkan prioritas penagihan yang jelas untuk ditindaklanjuti.",
  },
  {
    number: "02", title: "Rekonsiliasi Bank", icon: Landmark,
    description: "Alur kerja rekonsiliasi bank yang membandingkan catatan keuangan perusahaan dengan mutasi bank untuk menemukan selisih dan memastikan keakuratan transaksi.",
    skills: ["Rekonsiliasi Bank", "Excel", "Analisis Data Keuangan"],
    detail: "Alur kerja ini mencocokkan mutasi bank harian dengan catatan internal, memisahkan transaksi yang belum sesuai, dan mendukung proses rekonsiliasi yang dapat ditelusuri.",
  },
  {
    number: "03", title: "Pemantauan Penyelesaian Transaksi Marketplace", icon: FileSpreadsheet,
    description: "Pemantauan dan rekonsiliasi transaksi marketplace, termasuk TikTok Shop, Shopee, Lazada, dan Blibli, mencakup transaksi penarikan dana dan penyelesaian piutang usaha.",
    skills: ["Keuangan Marketplace", "Rekonsiliasi", "Piutang Usaha", "Excel"],
    detail: "Pemantauan penyelesaian transaksi menyatukan berbagai kanal marketplace dalam satu proses pengendalian untuk penarikan dana, potongan, dan piutang yang belum terselesaikan.",
  },
  {
    number: "04", title: "Jurnal Umum & Dasar Akuntansi", icon: Calculator,
    description: "Kumpulan latihan akuntansi praktis yang mencakup pencatatan jurnal, klasifikasi akun, analisis debit-kredit, dan pencatatan transaksi keuangan dasar.",
    skills: ["Akuntansi Umum", "Pencatatan Jurnal", "Prinsip Akuntansi"],
    detail: "Proyek ini menunjukkan dasar yang disiplin dalam klasifikasi transaksi, perlakuan debit-kredit, dan dokumentasi jurnal yang konsisten.",
  },
];

const skillGroups = [
  { label: "Akuntansi & Keuangan", items: ["Piutang Usaha", "Rekonsiliasi Bank", "Pembuatan Faktur", "Pengolahan Data Keuangan", "Akuntansi Umum", "Umur Piutang", "Penyelesaian Transaksi Marketplace", "Administrasi Perpajakan"] },
  { label: "Teknologi & Data", items: ["Microsoft Excel", "SAP Business One", "Analisis Data", "Pengolahan Data", "Teknologi Informasi", "Peningkatan Proses"] },
  { label: "Excel", items: ["VLOOKUP", "XLOOKUP", "HLOOKUP", "SUM", "SUMIF", "SUMIFS", "Pivot Table", "Validasi Data", "Analisis Keuangan Dasar"] },
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
          <button className="text-left" onClick={() => scrollTo("home")} aria-label="Ke beranda">
            <span className="block font-display text-sm font-bold uppercase text-foreground">Fadlin Nur Asyifa</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Keuangan × Akuntansi × Teknologi</span>
          </button>
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Navigasi utama">
            {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="nav-link">{label}</button>)}
          </nav>
          <button className="icon-button xl:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka atau tutup navigasi">
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
              <div className="eyebrow"><span className="status-dot" /> Profesional Akuntansi & Keuangan</div>
              <h1 className="mt-8 font-display text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl lg:text-[5.5rem]">
                Fadlin Nur Asyifa<span className="text-accent">, S.Kom.</span>
              </h1>
              <p className="mt-8 max-w-3xl font-display text-2xl leading-snug text-foreground sm:text-3xl">Menjembatani Keuangan, Akuntansi <span className="text-accent">& Teknologi.</span></p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">Profesional Akuntansi & Keuangan dengan latar belakang Teknologi Informasi serta pengalaman langsung dalam Piutang Usaha, rekonsiliasi bank, pembuatan faktur, transaksi marketplace, pengolahan data keuangan, administrasi perpajakan, SAP Business One, dan Microsoft Excel.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <button className="button-primary" onClick={() => scrollTo("experience")}>Lihat Pengalaman Saya <ArrowDown size={16}/></button>
                <button className="button-secondary" onClick={() => scrollTo("projects")}>Lihat Proyek <ArrowUpRight size={16}/></button>
                <button className="button-quiet" disabled title="Berkas CV belum tersedia"><Download size={16}/> Unduh CV</button>
              </div>
            </div>
            <aside className="lg:self-end lg:pb-10">
              <div className="border-l-2 border-accent pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Terbuka untuk</p>
                <p className="mt-3 font-display text-lg leading-relaxed">Peluang Akuntansi • Keuangan • Piutang Usaha • Keuangan & TI</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
                <div className="bg-background p-5"><span className="stat-small">6+</span><span className="label-small">Tahun Pengalaman</span></div>
                <div className="bg-background p-5"><span className="stat-small">Rp7B+</span><span className="label-small">Nilai Piutang Bulanan</span></div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="section-wrap">
          <SectionHeading index="01" eyebrow="Profil Profesional" title="Saat Keuangan Bertemu Teknologi" />
          <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6 text-base leading-8 text-muted-foreground">
              <p>Saya adalah profesional Akuntansi & Keuangan dengan gelar Sarjana Komputer di bidang Teknologi Informasi. Pengalaman karier saya terutama berkembang dalam operasional keuangan dan akuntansi, sehingga memberi saya pemahaman praktis tentang transaksi keuangan, Piutang Usaha, rekonsiliasi bank, pembuatan faktur, penyelesaian transaksi marketplace, administrasi perpajakan, dan pengolahan data keuangan.</p>
              <p>Latar belakang TI memperkuat cara saya menangani pekerjaan keuangan — dengan pola pikir terstruktur, ketepatan data, peningkatan proses, dan pemecahan masalah berbasis teknologi.</p>
              <p>Saya tertarik untuk terus berkembang dalam Akuntansi, Keuangan, Piutang Usaha, Analisis Keuangan, serta peran yang mempertemukan Keuangan dan Teknologi.</p>
            </div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              <Capability title="Akuntansi & Keuangan" icon={<Landmark size={20}/>} items={["Piutang Usaha","Rekonsiliasi Bank","Pembuatan Faktur","Pengolahan Data Keuangan","Penyelesaian Transaksi Marketplace","Administrasi Perpajakan","Dukungan Pelaporan Keuangan"]}/>
              <Capability title="Teknologi" icon={<MonitorCog size={20}/>} items={["Teknologi Informasi","SAP Business One","Microsoft Excel","Pengolahan Data","Pemikiran Analitis","Peningkatan Proses","Sistem Digital"]}/>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-section">
          <div className="section-wrap">
            <SectionHeading index="02" eyebrow="Riwayat Karier" title="Pengalaman Profesional" />
            <div className="mt-14 grid gap-12 lg:grid-cols-[18rem_1fr]">
              <div><p className="role-date">Jan 2024 — Sekarang</p><h3 className="mt-2 font-display text-2xl">PT Aditya Sriwijaya</h3><p className="mt-1 font-semibold text-accent">Akuntansi</p></div>
              <div>
                <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {["Pengelolaan Piutang Usaha","Verifikasi transaksi bank harian","Rekonsiliasi BCA & Mandiri","Penyelesaian piutang melalui SAP Business One","Pemantauan deposit pelanggan dan kelebihan penarikan","Penagihan penjualan dan pembuatan faktur harian","Pemantauan penyelesaian transaksi marketplace","Pemantauan umur dan saldo piutang","Rekonsiliasi bank","Dukungan administrasi perpajakan","Pengelolaan dokumen keuangan","Dukungan stok opname bulanan"].map(item => <div className="flex gap-3 border-b border-border py-3 text-sm" key={item}><Check className="mt-0.5 shrink-0 text-accent" size={16}/><span>{item}</span></div>)}
                </div>
                <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-5">
                  {[["100+","Transaksi harian"],["Rp7 M+","Nilai piutang bulanan"],["100+","Pelanggan dipantau"],["BCA & Mandiri","Rekonsiliasi"],["SAP Business One","Pengalaman ERP"]].map(([value,label]) => <div className="bg-background p-5" key={label}><strong className="block font-display text-xl text-foreground">{value}</strong><span className="mt-2 block text-xs leading-5 text-muted-foreground">{label}</span></div>)}
                </div>
              </div>
            </div>
            <div className="my-14 border-t border-border" />
            <div className="grid gap-12 lg:grid-cols-[18rem_1fr]">
              <div><p className="role-date">2018 — 2022</p><h3 className="mt-2 font-display text-2xl">LPK Hikari Sumut</h3><p className="mt-1 font-semibold text-accent">Administrasi Keuangan</p></div>
              <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">{["Pengelolaan kas kecil","Pemrosesan faktur","Penyelesaian piutang dan utang usaha","Penagihan pelanggan & pemasok","Pelaporan penggajian","Dokumentasi administrasi keuangan","Dukungan operasional kantor"].map(item => <div className="flex gap-3 border-b border-border py-3 text-sm" key={item}><Check className="mt-0.5 shrink-0 text-accent" size={16}/><span>{item}</span></div>)}</div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-wrap">
          <SectionHeading index="03" eyebrow="Karya Pilihan" title="Proyek Keuangan & Pekerjaan Praktis" />
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {projects.map(project => <ProjectCard key={project.number} {...project}/>) }
          </div>
          <DashboardPreview />
        </section>

        <section id="skills" className="bg-dark text-dark-foreground">
          <div className="section-wrap">
            <SectionHeading index="04" eyebrow="Kompetensi Utama" title="Keahlian & Sistem" dark />
            <div className="mt-14 grid gap-10 lg:grid-cols-3">{skillGroups.map((group,i) => <div key={group.label} className="border-t border-dark-border pt-6"><span className="text-xs font-bold text-dark-muted">0{i+1}</span><h3 className="mt-3 font-display text-xl">{group.label}</h3><div className="mt-6 flex flex-wrap gap-2">{group.items.map(item => <span className="skill-chip" key={item}>{item}</span>)}</div></div>)}</div>
          </div>
        </section>

        <section id="certifications" className="section-wrap">
          <SectionHeading index="05" eyebrow="Pengembangan" title="Sertifikasi & Pembelajaran" />
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="subsection-title"><BadgeCheck size={19}/> Sertifikasi</h3>
              <div className="mt-5 border-t border-border">
                <Credential title="Brevet Pajak AB" meta="LPAM Trisakti School of Management · 2025" />
                <Credential title="Persamaan Akuntansi" meta="MySkill.id" />
                <Credential title="Jurnal Akuntansi" meta="MySkill.id" />
                <Credential title="Ketentuan Umum Perpajakan" meta="Pembelajaran profesional" />
              </div>
            </div>
            <div>
              <h3 className="subsection-title"><TrendingUp size={19}/> Sedang Dipelajari</h3>
              <div className="mt-5 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">{["Akuntansi Keuangan","Analisis Keuangan","Excel Tingkat Lanjut","Analitik Data","Keuangan + Teknologi"].map((item,i) => <div className="bg-background p-5" key={item}><span className="text-xs font-bold text-accent">0{i+1}</span><p className="mt-3 font-semibold">{item}</p></div>)}</div>
            </div>
          </div>
        </section>

        <section id="education" className="bg-section">
          <div className="section-wrap">
            <SectionHeading index="06" eyebrow="Landasan Akademik" title="Pendidikan & Keunggulan Profesional" />
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="border-l-2 border-accent pl-6"><Building2 className="text-accent"/><p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">2018 — 2024</p><h3 className="mt-2 font-display text-2xl">Sarjana Komputer / Teknologi Informasi</h3><p className="mt-3 font-semibold">Universitas Krisnadwipayana</p><p className="mt-1 text-sm text-muted-foreground">IPK: 3,25</p></div>
              <div className="education-equation">
                {[["Pendidikan TI","Pemikiran terstruktur dan berorientasi sistem"],["Pengalaman Akuntansi & Keuangan","Operasional keuangan praktis"],["Pembelajaran Keuangan Berkelanjutan","Keahlian akuntansi yang terus berkembang"]].map(([title,desc],i) => <div className="equation-item" key={title}><span>0{i+1}</span><strong>{title}</strong><small>{desc}</small></div>)}
                <div className="equation-result"><span>=</span><strong>Profesional Keuangan dengan Keunggulan Teknologi</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap">
          <SectionHeading index="07" eyebrow="Langkah Berikutnya" title="Arah Karier" />
          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">Tujuan jangka panjang saya adalah berkembang menjadi profesional Akuntansi & Keuangan yang andal, sekaligus mengembangkan kemampuan analitis dan teknologi untuk meningkatkan proses keuangan serta pengambilan keputusan bisnis.</p>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">{["Akuntansi","Keuangan","Piutang Usaha","Analisis Keuangan","Keuangan & Teknologi"].map((item,i) => <div className="career-card" key={item}><span>0{i+1}</span><BriefcaseBusiness size={20}/><h3>{item}</h3></div>)}</div>
        </section>

        <section className="border-y border-border bg-foreground text-background">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-5 lg:px-8">{[["6+ Tahun","Pengalaman Keuangan & Akuntansi"],["Rp7 M+","Nilai Transaksi Piutang Bulanan"],["100+","Pelanggan Dipantau"],["SAP Business One","Pengalaman ERP"],["Excel","Pengolahan Data Keuangan"]].map(([value,label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        </section>

        <section id="contact" className="section-wrap text-center">
          <p className="eyebrow mx-auto w-fit">Terbuka untuk peluang yang tepat</p>
          <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-semibold sm:text-6xl">Mari membangun proses keuangan yang lebih akurat dan efisien.</h2>
          <p className="mx-auto mt-7 max-w-2xl leading-7 text-muted-foreground">Saya terbuka untuk peluang, koneksi profesional, dan diskusi seputar Akuntansi, Keuangan, Piutang Usaha, Analisis Keuangan, serta Keuangan & Teknologi.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button disabled className="button-primary" title="Profil LinkedIn belum tersedia"><Linkedin size={16}/> LinkedIn</button>
            <button disabled className="button-secondary" title="Alamat email belum tersedia"><Mail size={16}/> Email</button>
            <button disabled className="button-quiet" title="Berkas CV belum tersedia"><Download size={16}/> Unduh CV</button>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Tautan kontak dan CV akan diaktifkan setelah detail tersedia.</p>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><strong className="font-display">Fadlin Nur Asyifa, S.Kom.</strong><p className="mt-1 text-sm text-muted-foreground">Profesional Akuntansi & Keuangan</p></div><p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Keuangan × Akuntansi × Teknologi</p></div></footer>
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
    <summary className="flex cursor-pointer list-none items-center justify-between p-6 sm:p-8"><div><span className="project-number">05 / Dasbor Keuangan</span><h3 className="mt-3 font-display text-2xl">Ringkasan Keuangan Manajemen</h3></div><div className="flex items-center gap-3"><span className="demo-label">Data Contoh / Demonstrasi</span><ChevronDown className="detail-chevron" size={20}/></div></summary>
    <div className="border-t border-dashboard-line p-5 sm:p-8">
      <div className="grid gap-px overflow-hidden border border-dashboard-line bg-dashboard-line sm:grid-cols-2 lg:grid-cols-5">{[["Total Pendapatan","Rp 8,42 M","+8,4%"],["Piutang Usaha","Rp 2,16 M","25,7%"],["Belum Terbayar","Rp 641 Jt","−4,2%"],["Tingkat Penagihan","92,6%","+2,1%"],["Jumlah Jatuh Tempo","Rp 184 Jt","8,5% dari piutang"]].map(([label,value,delta])=><div className="bg-dashboard p-5" key={label}><span className="text-xs text-dashboard-muted">{label}</span><strong className="mt-3 block font-display text-xl">{value}</strong><span className="mt-2 block text-xs text-dashboard-accent">{delta}</span></div>)}</div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_15rem]"><div><div className="flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-[0.15em] text-dashboard-muted">Tren Penagihan Bulanan</p><span className="text-xs text-dashboard-muted">Jan — Des</span></div><div className="mt-6 flex h-48 items-end gap-2 border-b border-dashboard-line px-2">{bars.map((height,i)=><div key={i} className="flex h-full flex-1 items-end"><span className="w-full bg-dashboard-accent/70 transition-all duration-500 group-hover:bg-dashboard-accent" style={{height:`${height}%`}} /></div>)}</div></div><div className="flex flex-col justify-center border-l border-dashboard-line pl-7"><span className="text-xs text-dashboard-muted">Kinerja penagihan</span><strong className="mt-2 font-display text-4xl">92.6%</strong><div className="mt-5 h-1.5 bg-dashboard-line"><div className="h-full w-[92.6%] bg-dashboard-accent"/></div><span className="mt-3 text-xs text-dashboard-muted">Target: 90,0%</span></div></div>
    </div>
  </details>;
}

function Credential({title,meta}:{title:string;meta:string}) { return <div className="flex items-start justify-between gap-5 border-b border-border py-5"><div><strong className="font-display text-lg">{title}</strong><p className="mt-1 text-sm text-muted-foreground">{meta}</p></div><ArrowUpRight className="shrink-0 text-accent" size={18}/></div> }