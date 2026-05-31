"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Check,
  ClipboardCheck,
  CloudCog,
  DatabaseZap,
  GraduationCap,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  TabletSmartphone,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Product = {
  name: string;
  description: string;
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
  description: string;
  features: string[];
  highlighted?: boolean;
};

const products: Product[] = [
  {
    name: "CBT Assess",
    description:
      "Platform Computer Based Test untuk bank soal, blueprint, ujian online, analisis soal, dan rekap nilai institusi.",
    icon: ClipboardCheck,
  },
  {
    name: "OSCE Assess",
    description:
      "Sistem penilaian OSCE digital dengan station management, rubrik terstruktur, scoring real-time, dan rekap otomatis.",
    icon: GraduationCap,
  },
  {
    name: "Tutor Assess",
    description:
      "Solusi penilaian tutorial, PBL, dan aktivitas pembelajaran berbasis rubrik untuk dosen, tutor, dan pengelola blok.",
    icon: BookOpenCheck,
  },
];

const features: Feature[] = [
  {
    title: "Paperless Assessment",
    description: "Kurangi proses manual dengan alur asesmen digital dari persiapan hingga evaluasi.",
    icon: Layers3,
  },
  {
    title: "Rekap Otomatis",
    description: "Nilai, laporan, dan ringkasan performa tersaji cepat tanpa rekap spreadsheet berulang.",
    icon: DatabaseZap,
  },
  {
    title: "Dashboard Modern",
    description: "Pantau aktivitas asesmen, status peserta, dan hasil evaluasi dalam antarmuka yang bersih.",
    icon: BarChart3,
  },
  {
    title: "Aman dan Terintegrasi",
    description: "Dirancang untuk autentikasi, role access, dan integrasi dengan kebutuhan sistem kampus.",
    icon: ShieldCheck,
  },
  {
    title: "Mobile Friendly",
    description: "Pengalaman responsif untuk admin, dosen, penguji, tutor, dan peserta asesmen.",
    icon: TabletSmartphone,
  },
  {
    title: "Mudah Dikembangkan",
    description: "Arsitektur modular untuk menyesuaikan workflow, laporan, dan kebutuhan institusi.",
    icon: CloudCog,
  },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Standard",
    price: "Rp25 Juta",
    description: "Fondasi asesmen digital untuk ujian berbasis komputer.",
    features: ["CBT Assess", "Manajemen peserta", "Rekap hasil ujian", "Dashboard admin"],
  },
  {
    name: "Professional",
    price: "Rp35 Juta",
    description: "Paket untuk institusi yang membutuhkan ujian dan penilaian tutorial.",
    features: ["CBT Assess", "Tutor Assess", "Rubrik penilaian", "Laporan performa"],
  },
  {
    name: "Enterprise",
    price: "Rp60 Juta",
    description: "Paket unggulan untuk asesmen terpadu lintas skenario akademik.",
    features: ["CBT Assess", "OSCE Assess", "Tutor Assess", "Integrasi dan workflow lanjutan"],
    highlighted: true,
  },
];

const implementationPackages = [
  {
    name: "Instalasi & Training",
    price: "Rp5 Juta",
    description: "Setup sistem, konfigurasi awal, dan pelatihan penggunaan untuk tim institusi.",
  },
  {
    name: "Customisasi Minor",
    price: "Rp5-15 Juta",
    description: "Penyesuaian tampilan, laporan, field data, dan alur sederhana sesuai kebutuhan.",
  },
  {
    name: "Maintenance Tahunan",
    price: "Rp5-10 Juta",
    description: "Dukungan operasional, perawatan aplikasi, minor update, dan asistensi teknis.",
  },
];

const navItems = [
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Harga", href: "#harga" },
  { label: "Tentang", href: "#tentang" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

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
      <p className="text-sm font-semibold uppercase text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  );
}

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="DigitalTech Nusantara">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-300/40 bg-cyan-400 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20">
        DT
      </div>
      <div className="leading-tight">
        <p className="text-base font-bold text-white">DigitalTech</p>
        <p className="text-xs font-medium text-slate-400">Nusantara</p>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen overflow-hidden bg-[#0F172A] text-white"
    >
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(120deg,rgba(6,182,212,0.18),transparent_28%,transparent_72%,rgba(6,182,212,0.12))]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F172A]/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#demo"
            className="hidden rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 md:inline-flex"
          >
            Request Demo
          </a>
        </nav>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28 lg:pt-24">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.65, ease: "easeOut" }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Platform asesmen digital untuk institusi modern
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Empowering Digital Assessment
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            PT DigitalTech Nusantara membantu institusi pendidikan mengelola CBT, OSCE,
            dan penilaian tutorial secara paperless, terukur, aman, dan terintegrasi.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-4 text-base font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              Request Demo
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#produk"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-4 text-base font-bold text-white transition hover:border-cyan-300/60 hover:bg-white/10"
            >
              Lihat Produk
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {["CBT", "OSCE", "Tutor"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">{item}</p>
                <p className="mt-1 text-xs font-medium text-slate-400">Assess Suite</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-lg border border-white/12 bg-slate-900/80 p-3 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="rounded-lg border border-white/10 bg-[#0F172A] p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-400">Assessment Command Center</p>
                  <p className="mt-1 text-xl font-black text-white">Dashboard Institusi</p>
                </div>
                <div className="rounded-lg bg-cyan-400 px-3 py-2 text-xs font-black text-slate-950">
                  LIVE
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["Peserta Aktif", "1.248"],
                  ["Ujian Berjalan", "32"],
                  ["Rekap Selesai", "98%"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-medium text-slate-400">{label}</p>
                    <p className="mt-2 text-2xl font-black text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-bold text-white">Performa Asesmen</p>
                    <BarChart3 className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div className="space-y-3">
                    {[
                      ["CBT Assess", "92%"],
                      ["OSCE Assess", "84%"],
                      ["Tutor Assess", "78%"],
                    ].map(([label, width]) => (
                      <div key={label}>
                        <div className="mb-2 flex justify-between text-xs text-slate-300">
                          <span>{label}</span>
                          <span>{width}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800">
                          <div className="h-2 rounded-full bg-cyan-400" style={{ width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
                  <LockKeyhole className="h-8 w-8 text-cyan-200" />
                  <p className="mt-4 text-lg font-black text-white">Secure Workflow</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Akses berbasis role untuk admin, dosen, penguji, tutor, dan peserta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="produk" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Produk"
          title="Satu ekosistem untuk asesmen akademik digital"
          description="Setiap produk dirancang untuk mengurangi pekerjaan administratif, mempercepat rekap, dan membuat kualitas asesmen lebih mudah dipantau."
        />

        <div className="grid gap-5 md:grid-cols-3">
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
                className="group rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300/50 hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-300/12 text-cyan-300 ring-1 ring-cyan-300/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-7 text-2xl font-black text-white">{product.name}</h3>
                <p className="mt-4 leading-7 text-slate-300">{product.description}</p>
                <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">
                  Pelajari modul
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="keunggulan" className="border-y border-white/10 bg-white/[0.03] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Keunggulan"
            title="Dibangun untuk operasional asesmen yang serius"
            description="Mulai dari ujian rutin hingga skenario klinis dan tutorial, DigitalTech Nusantara membantu proses asesmen berjalan lebih konsisten."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
                  variants={fadeUp}
                  className="rounded-lg border border-white/10 bg-[#0F172A]/70 p-6"
                >
                  <Icon className="h-7 w-7 text-cyan-300" />
                  <h3 className="mt-5 text-xl font-black text-white">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="harga" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Paket Harga"
          title="Pilih paket sesuai cakupan asesmen institusi"
          description="Paket lisensi dirancang jelas untuk kebutuhan bertahap, dari CBT hingga ekosistem asesmen lengkap."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <motion.article
              key={plan.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              variants={fadeUp}
              className={`relative rounded-lg border p-6 ${
                plan.highlighted
                  ? "border-cyan-300 bg-cyan-300/10 shadow-2xl shadow-cyan-500/15"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              {plan.highlighted ? (
                <div className="absolute right-5 top-5 rounded-lg bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                  Unggulan
                </div>
              ) : null}

              <h3 className="text-2xl font-black text-white">{plan.name}</h3>
              <p className="mt-4 min-h-14 leading-7 text-slate-300">{plan.description}</p>
              <p className="mt-7 text-4xl font-black text-cyan-300">{plan.price}</p>

              <div className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-slate-200">
                    <Check className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#demo"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-bold transition ${
                  plan.highlighted
                    ? "bg-cyan-300 text-slate-950 hover:bg-white"
                    : "border border-white/15 bg-white/5 text-white hover:border-cyan-300/60"
                }`}
              >
                Konsultasi Paket
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Paket Implementasi"
            title="Pendampingan agar sistem siap digunakan"
            description="Tim kami membantu proses awal, pelatihan, dan pemeliharaan supaya adopsi platform berjalan lancar."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {implementationPackages.map((item) => (
              <div key={item.name} className="rounded-lg border border-white/10 bg-[#0F172A]/70 p-6">
                <p className="text-sm font-semibold uppercase text-cyan-300">Implementasi</p>
                <h3 className="mt-3 text-xl font-black text-white">{item.name}</h3>
                <p className="mt-5 text-3xl font-black text-white">{item.price}</p>
                <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tentang"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          variants={fadeUp}
        >
          <p className="text-sm font-semibold uppercase text-cyan-300">Tentang Kami</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Mitra teknologi untuk transformasi asesmen pendidikan.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          variants={fadeUp}
          className="rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-8"
        >
          <p className="text-lg leading-8 text-slate-300">
            PT DigitalTech Nusantara berfokus pada pengembangan solusi SaaS untuk
            assessment digital. Kami membantu institusi pendidikan membangun proses
            ujian dan penilaian yang lebih efisien, transparan, dan siap berkembang
            sesuai kebutuhan akademik.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: MonitorSmartphone, label: "SaaS Modern" },
              { icon: UsersRound, label: "Tim Institusi" },
              { icon: LockKeyhole, label: "Data Aman" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="rounded-lg border border-white/10 bg-[#0F172A]/70 p-4">
                  <Icon className="h-6 w-6 text-cyan-300" />
                  <p className="mt-3 font-bold text-white">{item.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section id="demo" className="px-5 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
          className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-cyan-300/25 bg-cyan-300/10"
        >
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-200">Request Demo</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Siap melihat DigitalTech Assess Suite bekerja untuk institusi Anda?
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                Jadwalkan demo untuk membahas kebutuhan CBT, OSCE, Tutor Assess,
                implementasi, dan opsi pengembangan sesuai workflow akademik Anda.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:hello@digitaltechnusantara.id?subject=Request%20Demo%20DigitalTech%20Assess%20Suite"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 font-black text-slate-950 transition hover:bg-cyan-200"
              >
                Email Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://digitaltechnusantara.id"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-4 font-bold text-white transition hover:border-cyan-300/60"
              >
                digitaltechnusantara.id
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:gap-4">
            <span>&copy; 2026 PT DigitalTech Nusantara</span>
            <span className="hidden text-slate-600 sm:inline">|</span>
            <span>Empowering Digital Assessment</span>
            <span className="hidden text-slate-600 sm:inline">|</span>
            <span>digitaltechnusantara.id</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
