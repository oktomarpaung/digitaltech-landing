"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Check,
  ClipboardCheck,
  CloudCog,
  GraduationCap,
  LockKeyhole,
  Menu,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  TabletSmartphone,
  UsersRound,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Product = {
  name: string;
  description: string;
  features: string[];
  icon: LucideIcon;
};

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type PricingPlan = {
  name: string;
  price: string;
  modules: string;
  highlighted?: boolean;
};

type ImplementationPackage = {
  name: string;
  price: string;
  description: string;
};

const products: Product[] = [
  {
    name: "CBT Assess",
    description: "Computer Based Test untuk ujian online yang aman dan fleksibel.",
    features: ["Berbagai tipe soal", "Acak soal & opsi", "Proctoring online", "Laporan hasil instan"],
    icon: ClipboardCheck,
  },
  {
    name: "Tutor Assess",
    description: "Penilaian kinerja tutor/pendidik secara objektif dan terstruktur.",
    features: ["Instrumen penilaian lengkap", "Observasi & feedback", "Rekap otomatis", "Analitik kinerja tutor"],
    icon: BookOpenCheck,
  },
  {
    name: "OSCE Assess",
    description: "Objective Structured Clinical Examination secara digital dan terstandar.",
    features: ["Manajemen station OSCE", "Penilaian real-time", "Rubrik terstruktur", "Laporan komprehensif"],
    icon: GraduationCap,
  },
];

const features: Feature[] = [
  {
    title: "Keamanan Tinggi",
    description: "Role access untuk admin, dosen, penguji, tutor, dan peserta dalam satu sistem terkontrol.",
    icon: ShieldCheck,
  },
  {
    title: "Akses Fleksibel",
    description: "Workflow asesmen terstruktur yang mudah diakses lintas perangkat dan skenario ujian.",
    icon: MonitorSmartphone,
  },
  {
    title: "Analitik Cerdas",
    description: "Dashboard pemantauan real-time untuk melihat progres, status peserta, dan performa modul.",
    icon: BarChart3,
  },
  {
    title: "Konfigurasi Mudah",
    description: "Rekap nilai otomatis, rubrik, dan pengaturan ujian dapat disesuaikan kebutuhan institusi.",
    icon: CloudCog,
  },
  {
    title: "Dukungan Profesional",
    description: "Export laporan dan pendampingan operasional untuk tim akademik, admin, dan manajemen.",
    icon: UsersRound,
  },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Standard",
    price: "Rp25 Juta",
    modules: "CBT Assess",
  },
  {
    name: "Professional",
    price: "Rp35 Juta",
    modules: "CBT Assess + Tutor Assess",
  },
  {
    name: "Enterprise",
    price: "Rp60 Juta",
    modules: "CBT Assess + OSCE Assess + Tutor Assess",
    highlighted: true,
  },
];

const implementationPackages: ImplementationPackage[] = [
  {
    name: "Instalasi & Training",
    price: "Rp5 Juta",
    description: "Setup sistem, konfigurasi awal, dan pelatihan penggunaan untuk tim institusi.",
  },
  {
    name: "Customisasi Minor",
    price: "Rp5-15 Juta",
    description: "Penyesuaian tampilan, laporan, field data, dan alur minor sesuai kebutuhan.",
  },
  {
    name: "Maintenance Tahunan",
    price: "Rp5-10 Juta",
    description: "Dukungan operasional, perawatan aplikasi, minor update, dan asistensi teknis.",
  },
];

const navItems = [
  { label: "Produk", href: "#produk" },
  { label: "Fitur", href: "#fitur" },
  { label: "Solusi", href: "#solusi" },
  { label: "Harga", href: "#harga" },
  { label: "Tentang Kami", href: "#tentang" },
];

const floatingNavItems = [
  { label: "Produk", href: "#produk" },
  { label: "Fitur", href: "#fitur" },
  { label: "Solusi", href: "#solusi" },
  { label: "Harga", href: "#harga" },
];

const benefits = ["Aman & Terpercaya", "Cepat & Stabil", "Insight Real-time"];
const dashboardStats = [
  ["Total Tes", "1.245"],
  ["Peserta", "8.764"],
  ["Selesai", "6.321"],
  ["Rata-rata Nilai", "82.4"],
];
const socialProof = [
  "Fakultas Kedokteran",
  "Program Profesi Dokter",
  "Institusi Kesehatan",
  "Rumah Sakit Pendidikan",
  "Pusat CBT",
];
const demoFields = ["Nama", "Institusi", "Jabatan", "Nomor WhatsApp", "Email"];
const productOptions = ["CBT Assess", "OSCE Assess", "Tutor Assess", "Bundle Enterprise"];
const whatsappUrl =
  "https://wa.me/628139788650?text=Halo%20DigitalTech%20Nusantara%2C%20saya%20ingin%20request%20demo%20CBT%2C%20OSCE%2C%20atau%20Tutor%20Assess.";
const platformPreviews = [
  {
    title: "CBT Assess Dashboard Preview",
    description: "Ringkasan ujian, peserta, progress, dan hasil asesmen dalam satu dashboard.",
    type: "cbt",
    icon: ClipboardCheck,
  },
  {
    title: "Tutor Assess Rubric Preview",
    description: "Rubrik observasi tutor dengan indikator, feedback, dan rekap kinerja.",
    type: "tutor",
    icon: BookOpenCheck,
  },
  {
    title: "OSCE Assess Station Preview",
    description: "Manajemen station OSCE, status penguji, dan skor real-time.",
    type: "osce",
    icon: GraduationCap,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function Logo() {
  return (
    <a href="#home" className="inline-flex items-center" aria-label="DigitalTech Nusantara">
      <Image
        src="/logo-dtn.png"
        alt="PT DigitalTech Nusantara"
        width={240}
        height={80}
        priority
        sizes="(min-width: 768px) 230px, 170px"
        className="h-auto w-[170px] object-contain md:w-[230px]"
      />
    </a>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="#25D366"
        d="M16 3.2c-7.05 0-12.8 5.64-12.8 12.58 0 2.38.68 4.69 1.96 6.68L3.2 28.8l6.54-1.9A12.96 12.96 0 0 0 16 28.36c7.05 0 12.8-5.64 12.8-12.58S23.05 3.2 16 3.2Z"
      />
      <path
        fill="#fff"
        d="M22.91 18.89c-.37-.18-2.2-1.08-2.54-1.2-.34-.12-.59-.18-.84.19-.25.37-.96 1.2-1.18 1.44-.22.25-.43.28-.8.1-.37-.19-1.57-.58-2.99-1.84a11.13 11.13 0 0 1-2.07-2.57c-.22-.37-.02-.57.16-.75.17-.17.37-.43.56-.65.18-.22.25-.37.37-.62.12-.25.06-.46-.03-.65-.09-.18-.84-2.02-1.15-2.76-.3-.72-.61-.62-.84-.63h-.72c-.25 0-.65.09-.99.46-.34.37-1.3 1.27-1.3 3.09 0 1.82 1.33 3.58 1.52 3.83.19.25 2.62 4 6.35 5.6.89.38 1.58.61 2.12.78.89.28 1.71.24 2.35.15.72-.11 2.2-.9 2.51-1.77.31-.87.31-1.61.22-1.77-.09-.15-.34-.24-.71-.43Z"
      />
    </svg>
  );
}

function FloatingSectionNav() {
  return (
    <nav
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 rounded-3xl border border-slate-200 bg-white/80 p-2 shadow-lg shadow-slate-200/60 backdrop-blur-xl lg:flex"
      aria-label="Navigasi section"
    >
      {floatingNavItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-cyan-50 hover:text-cyan-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      variants={fadeUp}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </motion.div>
  );
}

function ProductIllustration({ productName }: { productName: string }) {
  if (productName === "Tutor Assess") {
    return (
      <div className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-3 w-24 rounded-full bg-cyan-200" />
          <BookOpenCheck className="h-5 w-5 text-cyan-600" />
        </div>
        <div className="space-y-3">
          {["Komunikasi", "Fasilitasi", "Feedback"].map((item, index) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-3">
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-600">
                <span>{item}</span>
                <span>{index + 3}/4</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
                  style={{ width: `${72 + index * 8}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (productName === "OSCE Assess") {
    return (
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4">
        <div className="grid grid-cols-3 gap-2">
          {["S1", "S2", "S3", "S4", "S5", "S6"].map((station, index) => (
            <div
              key={station}
              className={`rounded-xl border p-3 text-center text-xs font-black ${
                index % 3 === 0
                  ? "border-cyan-200 bg-cyan-100 text-cyan-700"
                  : "border-slate-200 bg-white text-slate-600"
              }`}
            >
              {station}
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3">
          <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-600">
            <span>Station Active</span>
            <span>84%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-4">
      <div className="mb-4 grid grid-cols-3 gap-2">
        {["Tes", "Aktif", "Nilai"].map((item) => (
          <div key={item} className="rounded-xl bg-white p-3 text-xs font-black text-slate-600 shadow-sm">
            {item}
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-3">
        <svg className="h-20 w-full" viewBox="0 0 260 90" role="img" aria-label="CBT dashboard chart">
          <path d="M8 72 C 54 26, 82 38, 116 48 S 174 76, 218 20 252 34" fill="none" stroke="#06B6D4" strokeWidth="7" strokeLinecap="round" />
          <path d="M8 72 C 54 26, 82 38, 116 48 S 174 76, 218 20 252 34" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

function PlatformPreview({ type }: { type: string }) {
  if (type === "tutor") {
    return (
      <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
        {["Persiapan Diskusi", "Aktivasi Kelompok", "Feedback Tutor", "Refleksi"].map((item, index) => (
          <div key={item} className="grid grid-cols-[1fr_auto] gap-3 rounded-xl bg-slate-50 p-3">
            <span className="text-sm font-bold text-slate-700">{item}</span>
            <span className="rounded-full bg-cyan-100 px-2 py-1 text-xs font-black text-cyan-700">{index + 1}.0</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "osce") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {["Anamnesis", "Pemeriksaan", "Diagnosis", "Tindakan", "Komunikasi", "Etika"].map((station, index) => (
            <div
              key={station}
              className={`rounded-xl border p-3 ${
                index < 3 ? "border-cyan-200 bg-cyan-50" : "border-slate-200 bg-slate-50"
              }`}
            >
              <p className="text-xs font-black text-slate-950">Station {index + 1}</p>
              <p className="mt-1 text-xs text-slate-600">{station}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid grid-cols-3 gap-3">
        {["Ujian", "Peserta", "Skor"].map((item, index) => (
          <div key={item} className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs font-bold text-slate-500">{item}</p>
            <p className="mt-2 text-lg font-black text-slate-950">{["32", "1.245", "82.4"][index]}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
        {["Farmakologi", "Anatomi", "Klinis"].map((row, index) => (
          <div key={row} className="grid grid-cols-[1fr_auto] border-b border-slate-100 bg-white px-3 py-2 last:border-b-0">
            <span className="text-sm font-bold text-slate-700">{row}</span>
            <span className="text-sm font-black text-cyan-700">{90 - index * 6}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
      className="relative"
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-cyan-200/40 blur-3xl" />
      <div className="relative rounded-2xl border border-slate-200 bg-white/85 p-3 shadow-2xl shadow-blue-200/60 backdrop-blur">
        <div className="rounded-xl border border-slate-200 bg-slate-50">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700">
              Live Dashboard
            </div>
          </div>

          <div className="grid gap-3 p-4 sm:grid-cols-2">
            {dashboardStats.map(([label, value]) => (
              <div key={label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold text-slate-500">{label}</p>
                <p className="mt-2 text-2xl font-black text-slate-950">{value}</p>
              </div>
            ))}
          </div>

          <div className="mx-4 mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-black text-slate-950">Insight Real-time</p>
              <BarChart3 className="h-5 w-5 text-cyan-600" />
            </div>
            <svg className="mb-4 h-24 w-full" viewBox="0 0 420 120" role="img" aria-label="Grafik tren asesmen">
              <defs>
                <linearGradient id="heroChartGradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
              {[20, 50, 80, 110].map((y) => (
                <line key={y} x1="0" x2="420" y1={y} y2={y} stroke="#E2E8F0" strokeWidth="1" />
              ))}
              <motion.path
                d="M8 88 C 62 46, 92 58, 132 72 S 210 104, 258 42 320 48 412 24"
                fill="none"
                stroke="url(#heroChartGradient)"
                strokeLinecap="round"
                strokeWidth="7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.45, duration: 1.4, ease: "easeInOut" }}
              />
            </svg>
            <div className="space-y-3">
              {[
                ["CBT Assess", "92%"],
                ["Tutor Assess", "78%"],
                ["OSCE Assess", "84%"],
              ].map(([label, width]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-xs font-medium text-slate-600">
                    <span>{label}</span>
                    <span>{width}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" style={{ width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-7 left-4 hidden w-32 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/80 sm:block">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-slate-200" />
        <div className="rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 p-3">
          <TabletSmartphone className="h-6 w-6 text-cyan-600" />
          <p className="mt-4 text-lg font-black text-slate-950">98%</p>
          <p className="text-xs text-slate-600">Mobile ready</p>
        </div>
      </div>

      <div className="absolute -right-2 -top-6 max-w-[190px] rounded-2xl border border-cyan-100 bg-white/95 p-4 shadow-xl shadow-cyan-100/80 backdrop-blur sm:-right-8">
        <LockKeyhole className="h-7 w-7 text-cyan-600" />
        <p className="mt-3 text-sm font-black text-slate-950">Keamanan Terjamin</p>
        <p className="mt-1 text-xs leading-5 text-slate-600">Data terenkripsi end-to-end</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main id="home" className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
          <Logo />

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 transition hover:text-cyan-600">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#" className="rounded-lg px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
              Login
            </a>
            <a href="#demo" className="rounded-lg bg-[#0F172A] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-300/70 transition hover:bg-cyan-600">
              Coba Demo
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:border-cyan-300 lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-5 mb-4 rounded-xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/80 lg:hidden"
          >
            {[...navItems, { label: "Login", href: "#" }, { label: "Coba Demo", href: "#demo" }].map((item) => (
              <a
                key={`${item.label}-${item.href}`}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 text-cyan-600" />
              </a>
            ))}
          </motion.div>
        ) : null}
      </header>

      <FloatingSectionNav />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/60 to-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(6,182,212,0.16),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(37,99,235,0.16),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-6 sm:pt-18 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div initial="hidden" animate="visible" transition={{ duration: 0.65, ease: "easeOut" }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-black text-cyan-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Assess Suite
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 max-[420px]:text-[2.7rem] lg:text-[4rem]">
              Platform Asesmen Digital{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Terintegrasi
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Solusi asesmen modern untuk institusi pendidikan dan kesehatan. Kelola CBT, OSCE, dan penilaian tutorial
              dalam satu ekosistem digital yang aman, fleksibel, dan terintegrasi.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#produk" className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-6 font-bold text-white shadow-xl shadow-slate-300/80 transition hover:bg-cyan-600">
                Jelajahi Produk
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#demo" className="inline-flex h-14 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 font-bold text-slate-950 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50">
                Coba Demo
              </a>
            </div>

            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-slate-500">
              Dirancang untuk Fakultas Kedokteran, Program Profesi Dokter, Pusat CBT, dan Institusi Kesehatan.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                  <Check className="h-4 w-4 text-cyan-600" />
                  {benefit}
                </div>
              ))}
            </div>
          </motion.div>

          <DashboardMockup />
        </div>
      </section>

      <section id="produk" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div id="solusi" className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Solusi / Produk"
            title="Tiga Solusi, Satu Platform"
            description="Pilih modul asesmen yang sesuai dengan kebutuhan institusi Anda."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                  variants={fadeUp}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-100/70"
                >
                  <ProductIllustration productName={product.name} />
                  <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-7 text-2xl font-black text-slate-950">{product.name}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{product.description}</p>

                  <div className="mt-6 space-y-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-cyan-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#demo" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-cyan-700">
                    Pelajari Selengkapnya
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Preview Platform"
            title="Preview Platform DigitalTech Assess Suite"
            description="Ilustrasi antarmuka sementara untuk menggambarkan pengalaman dashboard, rubrik, dan station digital sebelum screenshot asli aplikasi dipasang."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {platformPreviews.map((preview, index) => {
              const Icon = preview.icon;

              return (
                <motion.article
                  key={preview.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                  variants={fadeUp}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
                      Preview
                    </span>
                  </div>
                  <PlatformPreview type={preview.type} />
                  <h3 className="mt-6 text-xl font-black text-slate-950">{preview.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{preview.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="fitur" className="border-y border-slate-200 bg-cyan-50/60 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Keunggulan"
            title="Teknologi untuk Asesmen yang Lebih Baik"
            description="Dibangun untuk membantu institusi menjalankan asesmen yang aman, efisien, dan mudah dikembangkan."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
                  variants={fadeUp}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70"
                >
                  <Icon className="h-7 w-7 text-cyan-600" />
                  <h3 className="mt-5 text-lg font-black text-slate-950">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="harga" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Harga"
            title="Paket yang Fleksibel untuk Institusi"
            description="Pilih paket sesuai cakupan asesmen. Tim kami dapat membantu menyiapkan proposal berdasarkan kebutuhan implementasi."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <motion.article
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                variants={fadeUp}
                className={`relative rounded-2xl border p-6 ${
                  plan.highlighted
                    ? "border-cyan-400 bg-cyan-50 shadow-xl shadow-cyan-100/80"
                    : "border-slate-200 bg-white shadow-sm shadow-slate-200/70"
                }`}
              >
                {plan.highlighted ? (
                  <div className="absolute right-5 top-5 rounded-full bg-[#0F172A] px-3 py-1 text-xs font-black text-white">
                    Paling Direkomendasikan
                  </div>
                ) : null}

                <h3 className="text-2xl font-black text-slate-950">{plan.name}</h3>
                <p className="mt-6 text-4xl font-black text-slate-950">{plan.price}</p>
                <p className="mt-3 leading-7 text-slate-600">{plan.modules}</p>

                <div className="mt-8 grid gap-3">
                  <a href="#demo" className="inline-flex h-12 items-center justify-center rounded-lg bg-[#0F172A] px-5 font-bold text-white transition hover:bg-cyan-600">
                    Minta Proposal
                  </a>
                  <a href="#demo" className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 font-bold text-slate-950 transition hover:border-cyan-300 hover:bg-cyan-50">
                    Jadwalkan Demo
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Implementasi"
            title="Pendampingan agar Sistem Siap Digunakan"
            description="Dari instalasi hingga maintenance, tim kami membantu transisi digital berjalan lebih rapi."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {implementationPackages.map((item) => (
              <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
                <p className="text-sm font-bold uppercase text-cyan-600">Paket Implementasi</p>
                <h3 className="mt-3 text-xl font-black text-slate-950">{item.name}</h3>
                <p className="mt-5 text-3xl font-black text-slate-950">{item.price}</p>
                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Social Proof"
            title="Dirancang untuk Institusi Pendidikan dan Kesehatan"
            description="Platform ini disiapkan untuk berbagai kebutuhan asesmen akademik, profesi, dan layanan kesehatan."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {socialProof.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-black text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tentang" className="border-y border-slate-200 bg-cyan-50/60 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55, ease: "easeOut" }} variants={fadeUp}>
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">Tentang Kami</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Partner Teknologi untuk Transformasi Asesmen
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-8"
          >
            <p className="text-lg leading-8 text-slate-600">
              PT DigitalTech Nusantara adalah perusahaan pengembang platform asesmen digital yang membantu institusi
              pendidikan dan kesehatan mengelola CBT, OSCE, dan Tutorial Assessment secara modern, paperless, aman,
              dan terintegrasi.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="demo" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
          className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white shadow-xl shadow-cyan-100/70"
        >
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:p-10">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-600">Request Demo</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Siap melihat DigitalTech Assess Suite bekerja untuk institusi Anda?
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                Isi form singkat berikut untuk mulai berdiskusi tentang kebutuhan CBT, OSCE, Tutor Assess, atau Bundle Enterprise.
              </p>
            </div>

            <form className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {demoFields.map((field) => (
                  <label key={field} className={field === "Email" ? "sm:col-span-2" : undefined}>
                    <span className="text-sm font-bold text-slate-700">{field}</span>
                    <input
                      type={field === "Email" ? "email" : "text"}
                      placeholder={field}
                      className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                    />
                  </label>
                ))}

                <label className="sm:col-span-2">
                  <span className="text-sm font-bold text-slate-700">Produk yang diminati</span>
                  <select className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100">
                    {productOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              <button type="button" className="mt-5 inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 font-black text-white transition hover:bg-cyan-600">
                Kirim Permintaan Demo
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-3 right-3 z-50 inline-flex h-10 max-w-[calc(100vw-1.5rem)] items-center justify-center gap-2 rounded-lg bg-cyan-500 px-3 text-xs font-black text-white shadow-2xl shadow-cyan-300/60 transition hover:bg-cyan-600 sm:bottom-6 sm:right-6 sm:h-14 sm:px-5 sm:text-sm"
      >
        <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        <span>Request Demo</span>
      </a>

      <footer className="border-t border-slate-200 bg-white px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Logo />
            <p className="mt-4 text-sm font-semibold text-slate-600">Platform Asesmen Digital Terintegrasi</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-cyan-700"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Demo: 0813-9788-650
            </a>
          </div>

          <div className="flex flex-col gap-4 text-sm font-semibold text-slate-600 sm:flex-row sm:items-center">
            {navItems.slice(0, 4).map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-cyan-600">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 pt-6 text-sm text-slate-500">
          &copy; 2026 PT DigitalTech Nusantara. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
