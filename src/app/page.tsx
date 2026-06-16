"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Check,
  ClipboardCheck,
  CloudCog,
  GraduationCap,
  PackageCheck,
  LockKeyhole,
  Menu,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TabletSmartphone,
  UsersRound,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Product = {
  id: "cbt" | "tutor" | "osce";
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
  description: string;
  suitableFor: string[];
  highlights: string[];
  bonusLabel?: string;
  note?: string;
  icon: LucideIcon;
  accent: {
    border: string;
    background: string;
    iconBackground: string;
    text: string;
    softHover: string;
    shadow: string;
  };
  highlighted?: boolean;
};

type ImplementationModel = {
  name: string;
  description: string;
  cta: string;
  badge?: string;
  icon: LucideIcon;
};

type ProductScreenshot = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

type ProductMobileSummary = {
  title: string;
  description: string;
  benefits: string[];
};

type FlyerMaterial = {
  product: string;
  category: string;
  description: string;
  badges: string[];
  src: string;
  alt: string;
  demoHref: string;
  demoExternal?: boolean;
  accent: {
    border: string;
    background: string;
    label: string;
    badge: string;
    glow: string;
  };
};

type DemoFormState = {
  name: string;
  institution: string;
  position: string;
  whatsapp: string;
  email: string;
};

const products: Product[] = [
  {
    id: "cbt",
    name: "CBT Assess",
    description:
      "CBT Assess adalah platform ujian online untuk institusi pendidikan yang membutuhkan sistem CBT aman, fleksibel, dan mudah dipantau. Mulai dari import soal, generate akun peserta, kartu login PDF, pelaksanaan ujian, autosave jawaban, monitoring real-time, hingga analisis butir dan export hasil dapat dilakukan dalam satu sistem.",
    features: [
      "Berbagai tipe soal & lampiran",
      "Import soal Word berbasis AI",
      "Import Excel template",
      "Monitoring real-time proktor",
      "Analisis butir otomatis",
      "Hasil & export instan",
    ],
    icon: ClipboardCheck,
  },
  {
    id: "osce",
    name: "OSCE Assess",
    description: "Objective Structured Clinical Examination secara digital dan terstandar.",
    features: [
      "Manajemen station",
      "Rubrik/checklist OSCE",
      "Examiner scoring",
      "Rotasi peserta",
      "Rekap nilai OSCE",
    ],
    icon: GraduationCap,
  },
  {
    id: "tutor",
    name: "Tutor Assess",
    description: "Penilaian kinerja tutor/pendidik secara objektif dan terstruktur.",
    features: [
      "Penilaian Tutorial I & II",
      "Rubrik aktif",
      "Absensi dan skor 1/2/3",
      "Draft, submit final, read-only",
      "Rekap nilai tutorial",
    ],
    icon: BookOpenCheck,
  },
];

const cbtScreenshots: ProductScreenshot[] = [
  {
    title: "Impor Soal Word Berbasis AI",
    description:
      "Preview AI membaca soal dari file Word, mendeteksi opsi, kunci jawaban, media, tabel, rumus, dan status review sebelum disimpan ke bank soal.",
    src: "/screenshots/cbt/cbt-word-ai-preview.png",
    alt: "CBT Assess impor soal Word berbasis AI screenshot",
  },
  {
    title: "Bank Soal Terstruktur",
    description:
      "Kelola bank soal berdasarkan blok, mata kuliah, tingkat kesulitan, status, dan metadata soal.",
    src: "/screenshots/cbt/cbt-bank-soal.png",
    alt: "CBT Assess bank soal terstruktur screenshot",
  },
  {
    title: "Monitoring Ujian",
    description:
      "Pantau peserta, sesi ujian, status pengerjaan, dan aktivitas proktor secara real-time.",
    src: "/screenshots/cbt/cbt-dashboard.png",
    alt: "CBT Assess monitoring ujian screenshot",
  },
  {
    title: "Analisis Butir",
    description:
      "Evaluasi kualitas soal dengan analisis hasil, distribusi jawaban, dan performa peserta.",
    src: "/screenshots/cbt/cbt-analisis-butir.png",
    alt: "CBT Assess analisis butir screenshot",
  },
  {
    title: "Hasil & Export",
    description: "Rekap hasil ujian dan export nilai untuk kebutuhan akademik.",
    src: "/screenshots/cbt/cbt-hasil-ujian.png",
    alt: "CBT Assess hasil dan export nilai screenshot",
  },
];

const tutorScreenshots: ProductScreenshot[] = [
  {
    title: "Form Penilaian Tutorial",
    description: "Penilaian tutorial/PBL berbasis rubrik dengan skor, catatan, dan indikator performa.",
    src: "/screenshots/tutor/tutor-form-penilaian-2.png",
    alt: "Tutor Assess form penilaian tutorial screenshot",
  },
  {
    title: "Dashboard Tutor",
    description: "Pantau aktivitas penilaian tutor, status asesmen, dan ringkasan performa dari dashboard.",
    src: "/screenshots/tutor/tutor-dashboard.png",
    alt: "Tutor Assess dashboard screenshot",
  },
  {
    title: "Master Data",
    description: "Kelola data tutor, kelompok, peserta, dan konfigurasi penilaian tutorial.",
    src: "/screenshots/tutor/tutor-master-data.png",
    alt: "Tutor Assess master data screenshot",
  },
  {
    title: "Rubrik Penilaian",
    description: "Atur rubrik penilaian tutorial/PBL agar evaluasi lebih konsisten dan terstruktur.",
    src: "/screenshots/tutor/tutor-rubrik.png",
    alt: "Tutor Assess rubrik penilaian screenshot",
  },
  {
    title: "Form Penilaian Detail",
    description: "Input skor dan feedback tutor secara detail untuk kebutuhan rekap dan evaluasi.",
    src: "/screenshots/tutor/tutor-form-penilaian-1.png",
    alt: "Tutor Assess form penilaian detail screenshot",
  },
  {
    title: "Login Tutor",
    description: "Akses sistem penilaian tutor dengan tampilan login yang ringkas dan profesional.",
    src: "/screenshots/tutor/tutor-login.png",
    alt: "Tutor Assess login screenshot",
  },
];

const osceScreenshots: ProductScreenshot[] = [
  {
    title: "Form Penguji OSCE",
    description: "Penguji dapat menilai peserta secara real-time menggunakan rubrik station digital.",
    src: "/screenshots/osce/osce-form-penguji.png",
    alt: "OSCE Assess form penguji screenshot",
  },
  {
    title: "Dashboard OSCE",
    description: "Pantau station, peserta, penguji, dan progres penilaian OSCE dari dashboard terpusat.",
    src: "/screenshots/osce/osce-dashboard.png",
    alt: "OSCE Assess dashboard screenshot",
  },
  {
    title: "Manajemen Station",
    description: "Kelola station OSCE, skenario, alur rotasi, dan kebutuhan asesmen klinis.",
    src: "/screenshots/osce/osce-station.png",
    alt: "OSCE Assess station screenshot",
  },
  {
    title: "Rubrik OSCE",
    description: "Susun rubrik terstruktur untuk menjaga standar penilaian antar station.",
    src: "/screenshots/osce/osce-rubrik.png",
    alt: "OSCE Assess rubrik screenshot",
  },
  {
    title: "QR Code Akses",
    description: "Dukung alur akses cepat untuk peserta atau penguji melalui QR code.",
    src: "/screenshots/osce/osce-qr-code.png",
    alt: "OSCE Assess QR code screenshot",
  },
];

const productScreenshots: Record<Product["id"], ProductScreenshot[]> = {
  cbt: cbtScreenshots,
  tutor: tutorScreenshots,
  osce: osceScreenshots,
};

const productShowcaseBadges: Record<Product["id"], string[]> = {
  cbt: ["AI-assisted Import", "Structured Question Bank", "Real-time Monitoring", "Analytics Ready"],
  tutor: ["Tutorial I & II", "Rubrik Aktif", "Draft & Final Submit", "Rekap Nilai"],
  osce: ["Station OSCE", "Rubrik Digital", "Examiner Scoring", "Rekap Nilai"],
};

const productMobileSummaries: Record<Product["id"], ProductMobileSummary> = {
  cbt: {
    title: "CBT Assess",
    description:
      "Platform ujian online dengan bank soal, AI Word Import, kartu login peserta, monitoring real-time, analisis butir, dan export hasil.",
    benefits: ["AI Word Import", "Kartu login peserta", "Autosave jawaban", "Analisis butir"],
  },
  osce: {
    title: "OSCE Assess",
    description:
      "Platform digital untuk pengaturan sesi OSCE, station, penguji, rubrik, penilaian per station, QR/PIN akses, dan rekap nilai.",
    benefits: ["Setting sesi OSCE", "Station aktif & istirahat", "Rubrik digital", "Rekap nilai"],
  },
  tutor: {
    title: "Tutor Assess",
    description:
      "Sistem penilaian tutorial/PBL untuk absensi, rubrik, draft, submit final, rekap nilai, dan dokumentasi proses tutorial.",
    benefits: ["Tutorial I & II", "Rubrik aktif", "Simpan draft", "Rekap nilai tutorial"],
  },
};

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

const cbtFeatureHighlights: Feature[] = [
  {
    title: "Bank Soal Terstruktur",
    description: "Kelola soal berdasarkan blok, topik, tingkat kesulitan, dosen, status, dan metadata soal.",
    icon: ClipboardCheck,
  },
  {
    title: "Import Soal Excel",
    description: "Upload soal secara massal melalui template Excel agar persiapan ujian lebih cepat.",
    icon: CloudCog,
  },
  {
    title: "Mode Fleksibel Soal",
    description: "Soal dengan metadata belum lengkap tetap dapat digunakan selama konten dan kunci jawabannya valid.",
    icon: BookOpenCheck,
  },
  {
    title: "Akun & Kartu Login PDF",
    description: "Generate akun peserta otomatis dan siapkan kartu login PDF untuk setiap ujian.",
    icon: UsersRound,
  },
  {
    title: "Randomisasi Aman",
    description: "Urutan soal dan opsi dapat diacak untuk setiap peserta.",
    icon: Sparkles,
  },
  {
    title: "Urutan Tersimpan per Peserta",
    description: "Randomisasi tetap konsisten saat peserta refresh, logout, atau login kembali.",
    icon: LockKeyhole,
  },
  {
    title: "Autosave Jawaban",
    description: "Jawaban peserta tersimpan otomatis selama ujian berlangsung dan dapat dilanjutkan.",
    icon: CloudCog,
  },
  {
    title: "Session Lock",
    description: "Membantu mencegah ujian yang sama dibuka bersamaan dari perangkat atau browser lain.",
    icon: ShieldCheck,
  },
  {
    title: "Monitoring Real-Time",
    description: "Pantau status login, progres jawaban, aktivitas terakhir, submit, dan sesi terkunci.",
    icon: MonitorSmartphone,
  },
  {
    title: "Analisis Butir",
    description: "Hitung indeks kesukaran, daya beda, distribusi opsi, dan rekomendasi butir soal.",
    icon: BarChart3,
  },
  {
    title: "Audit Log & Role Management",
    description: "Catat aktivitas penting dan atur akses super admin, admin, proktor, dosen, serta peserta.",
    icon: LockKeyhole,
  },
  {
    title: "Export Laporan",
    description: "Ekspor hasil ujian, data dan akun peserta, serta analisis butir ke Excel atau CSV.",
    icon: PackageCheck,
  },
];

const aiWordImportProblems = [
  "Soal lama tersimpan dalam file Word",
  "Format soal antar dosen berbeda-beda",
  "Admin lelah copy-paste manual",
  "Persiapan ujian sering dikejar waktu",
  "Risiko salah input soal dan kunci jawaban tinggi",
];

const aiWordImportFlow = [
  "Upload Word",
  "AI membaca struktur soal",
  "Preview & koreksi",
  "Simpan ke bank soal",
];

const aiWordImportHighlights = [
  "Deteksi soal dan opsi",
  "Deteksi kunci jawaban",
  "Confidence score",
  "Preview koreksi sebelum simpan",
  "Cocok untuk migrasi soal lama",
];

const pricingPlans: PricingPlan[] = [
  {
    name: "CBT Assess",
    price: "Mulai dari Rp55 Juta",
    description:
      "Platform Computer Based Test untuk ujian online, bank soal, manajemen peserta, pelaksanaan ujian, hasil ujian, analisis butir, export laporan, serta fitur Impor Soal Word Berbasis AI.",
    suitableFor: ["PMB / Seleksi masuk", "Ujian blok", "Ujian semester", "Ujian teori", "Bank soal institusi"],
    highlights: [
      "Bank soal terstruktur",
      "Import soal Word berbasis AI",
      "Monitoring ujian",
      "Analisis butir",
      "Export nilai",
    ],
    icon: ClipboardCheck,
    accent: {
      border: "border-blue-200",
      background: "from-blue-50 to-white",
      iconBackground: "bg-blue-100",
      text: "text-blue-600",
      softHover: "hover:bg-blue-50 hover:border-blue-300",
      shadow: "hover:shadow-blue-100/80",
    },
  },
  {
    name: "OSCE Assess",
    price: "Mulai dari Rp55 Juta",
    description:
      "Platform penilaian OSCE digital untuk pengelolaan station, rubrik/checklist, sesi, peserta, penguji, rotasi station, dan rekap penilaian OSCE.",
    suitableFor: ["OSCE semester", "Ujian keterampilan blok", "Simulasi UKMPPD internal", "Ujian praktik klinik berbasis station"],
    highlights: [
      "Manajemen station",
      "Rubrik/checklist OSCE",
      "Examiner scoring",
      "Rotasi peserta",
      "Rekap nilai OSCE",
    ],
    icon: Stethoscope,
    accent: {
      border: "border-teal-200",
      background: "from-teal-50 to-white",
      iconBackground: "bg-teal-100",
      text: "text-teal-600",
      softHover: "hover:bg-teal-50 hover:border-teal-300",
      shadow: "hover:shadow-teal-100/80",
    },
  },
  {
    name: "Tutor Assess",
    price: "Mulai dari Rp15 Juta",
    description:
      "Platform penilaian tutorial/PBL untuk kehadiran, aktivitas diskusi, learning issue, sikap profesional, catatan tutor, dan rekap nilai tutorial mahasiswa.",
    suitableFor: ["Tutorial/PBL", "Koordinator blok", "Tutor dan dosen", "Evaluasi performa mahasiswa"],
    highlights: [
      "Penilaian Tutorial I & II",
      "Rubrik aktif",
      "Draft dan submit final",
      "Read-only final",
      "Rekap nilai tutorial",
    ],
    icon: BookOpenCheck,
    accent: {
      border: "border-purple-200",
      background: "from-purple-50 to-white",
      iconBackground: "bg-purple-100",
      text: "text-purple-600",
      softHover: "hover:bg-purple-50 hover:border-purple-300",
      shadow: "hover:shadow-purple-100/80",
    },
  },
  {
    name: "Paket CBT + OSCE Assess",
    price: "Rp110 Juta",
    description:
      "Paket implementasi CBT Assess dan OSCE Assess untuk institusi pendidikan kesehatan, termasuk bonus penggunaan Tutor Assess tanpa biaya lisensi tambahan sebagai bagian dari ekosistem Digital Assessment Suite.",
    suitableFor: ["Fakultas kedokteran", "Prodi kesehatan", "Ujian CBT & OSCE", "Ekosistem asesmen terpadu"],
    highlights: [
      "CBT Assess",
      "OSCE Assess",
      "Free Tutor Assess",
      "Ekosistem asesmen terpadu",
      "Lebih efisien untuk institusi",
    ],
    bonusLabel: "Free Tutor Assess",
    note: "Termasuk bonus Tutor Assess sesuai ruang lingkup implementasi yang disepakati.",
    icon: PackageCheck,
    accent: {
      border: "border-cyan-300",
      background: "from-cyan-50 to-white",
      iconBackground: "bg-cyan-100",
      text: "text-cyan-600",
      softHover: "hover:bg-cyan-50 hover:border-cyan-400",
      shadow: "shadow-cyan-100/80 hover:shadow-cyan-200/80",
    },
    highlighted: true,
  },
];

const implementationModels: ImplementationModel[] = [
  {
    name: "Pilot Project",
    description: "Implementasi terbatas untuk uji coba awal sebelum penggunaan penuh.",
    cta: "Mulai Pilot",
    icon: Sparkles,
  },
  {
    name: "Cloud Managed",
    description:
      "Aplikasi di-host dan dikelola oleh tim DigitalTech sehingga institusi bisa langsung menggunakan sistem tanpa mengelola server sendiri.",
    cta: "Minta Penawaran Cloud",
    badge: "Paling Praktis",
    icon: CloudCog,
  },
  {
    name: "Private Cloud",
    description: "Aplikasi berjalan pada instance dan database terpisah khusus untuk satu institusi.",
    cta: "Diskusikan Private Cloud",
    icon: ShieldCheck,
  },
  {
    name: "On-Premise",
    description: "Aplikasi diinstal pada server internal milik institusi.",
    cta: "Konsultasi On-Premise",
    icon: LockKeyhole,
  },
];

const pricingFactors = [
  "Produk yang dipilih",
  "Skema implementasi",
  "Jumlah peserta/pengguna",
  "Kebutuhan fitur tambahan",
  "Tingkat customisasi",
  "Training dan support",
];

const choiceReasons: Feature[] = [
  {
    title: "Dibangun untuk Pendidikan Kesehatan",
    description:
      "Platform dikembangkan dengan memahami kebutuhan fakultas kedokteran, program profesi dokter, skills lab, tutor, penguji, dan unit assessment.",
    icon: GraduationCap,
  },
  {
    title: "Satu Ekosistem Asesmen",
    description:
      "CBT Assess, OSCE Assess, dan Tutor Assess dapat digunakan sebagai satu ekosistem digital untuk mendukung asesmen kognitif, keterampilan klinis, dan proses tutorial.",
    icon: PackageCheck,
  },
  {
    title: "Mengurangi Beban Administrasi",
    description:
      "Rekap nilai, pengumpulan data, pengelolaan rubrik, dan dokumentasi asesmen dapat dilakukan lebih cepat dibanding proses manual berbasis kertas.",
    icon: ClipboardCheck,
  },
  {
    title: "Siap untuk Implementasi Institusi",
    description:
      "Platform dapat disesuaikan dengan kebutuhan institusi, termasuk pengaturan pengguna, role, data mahasiswa, tutor, penguji, blok, station, dan skenario.",
    icon: CloudCog,
  },
  {
    title: "Tampilan Modern dan Mudah Digunakan",
    description:
      "Antarmuka dibuat bersih, responsif, dan mudah dipahami oleh admin, dosen, tutor, penguji, maupun peserta.",
    icon: MonitorSmartphone,
  },
  {
    title: "Dukungan Pendampingan",
    description:
      "Kami menyediakan pendampingan implementasi, pelatihan awal, serta penyesuaian sistem agar institusi dapat mulai menggunakan platform dengan lebih percaya diri.",
    icon: UsersRound,
  },
];

const targetAudiences = [
  "Fakultas Kedokteran",
  "Program Studi Profesi Dokter",
  "Program Studi Keperawatan",
  "Program Studi Kebidanan",
  "Program Studi Kesehatan Lainnya",
  "Skills Lab",
  "Unit Assessment",
  "Pusat CBT",
  "Koordinator Blok / Modul",
  "Tim OSCE",
  "Rumah Sakit Pendidikan",
  "Institusi Pelatihan Kesehatan",
];

const useCases = [
  {
    title: "CBT Assess",
    problem:
      "Ujian berbasis kertas membutuhkan banyak persiapan, koreksi manual, dan rekap nilai yang memakan waktu.",
    solution:
      "CBT Assess membantu institusi menyelenggarakan ujian online mulai dari persiapan bank soal, import soal Excel, generate akun peserta, kartu login PDF, pelaksanaan ujian, monitoring proktor, rekap nilai otomatis, hingga analisis butir.",
    benefits: [
      "PMB / seleksi masuk mahasiswa baru",
      "Ujian blok",
      "Try out internal",
      "Ujian semester",
      "Ujian kompetensi internal",
      "Bank soal institusi",
    ],
    icon: ClipboardCheck,
  },
  {
    title: "OSCE Assess",
    problem:
      "Penilaian OSCE manual sering membutuhkan banyak lembar kertas, rekap berulang, dan koordinasi station yang kompleks.",
    solution:
      "OSCE Assess membantu penguji melakukan penilaian station secara digital dengan rubrik terstruktur, monitoring peserta, dan rekap hasil yang lebih cepat.",
    benefits: [
      "Penilaian station lebih rapi",
      "Rubrik digital terstruktur",
      "Mengurangi kertas",
      "Rekap hasil lebih cepat",
      "Mendukung monitoring station",
    ],
    icon: Stethoscope,
  },
  {
    title: "Tutor Assess",
    problem:
      "Penilaian tutorial/PBL sering tersebar dalam format manual dan sulit direkap secara konsisten antar tutor.",
    solution:
      "Tutor Assess membantu tutor menilai mahasiswa menggunakan rubrik yang lebih objektif, terdokumentasi, dan mudah direkap oleh pengelola blok.",
    benefits: [
      "Rubrik penilaian lebih konsisten",
      "Catatan tutor terdokumentasi",
      "Rekap nilai lebih cepat",
      "Monitoring status penilaian",
      "Mendukung evaluasi tutorial/PBL",
    ],
    icon: BookOpenCheck,
  },
];

const beforeAfterRows = [
  ["Koreksi manual", "Rekap otomatis"],
  ["Rubrik kertas", "Rubrik digital"],
  ["Rekap lambat", "Export data cepat"],
  ["Data tercecer", "Data tersimpan terstruktur"],
  ["Sulit monitoring", "Dashboard pemantauan"],
];

const securityFeatures: Feature[] = [
  {
    title: "Session Lock",
    description:
      "Membantu mencegah peserta membuka ujian yang sama dari perangkat atau browser lain secara bersamaan.",
    icon: LockKeyhole,
  },
  {
    title: "Audit Log Aktivitas",
    description:
      "Aktivitas penting admin dan peserta tercatat untuk mendukung keamanan dan ketertelusuran pelaksanaan ujian.",
    icon: ClipboardCheck,
  },
  {
    title: "Role-Based Access",
    description:
      "Kontrol akses untuk super admin, admin, proktor, dosen, dan peserta sesuai tanggung jawabnya.",
    icon: ShieldCheck,
  },
  {
    title: "Randomisasi Tersimpan",
    description:
      "Urutan soal dan opsi dapat diacak serta tetap konsisten untuk setiap peserta saat login kembali.",
    icon: Sparkles,
  },
  {
    title: "Data Cloud Terstruktur",
    description:
      "Data ujian tersimpan terstruktur pada database cloud PostgreSQL untuk mendukung operasional dan dokumentasi institusi.",
    icon: CloudCog,
  },
];

const implementationSteps = [
  {
    title: "Konsultasi Kebutuhan",
    description:
      "Kami berdiskusi dengan institusi untuk memahami kebutuhan asesmen, jumlah pengguna, jenis ujian, alur kerja, dan target implementasi.",
  },
  {
    title: "Setup dan Konfigurasi Sistem",
    description:
      "Sistem disiapkan sesuai kebutuhan institusi, termasuk konfigurasi produk, role pengguna, struktur data, dan pengaturan awal.",
  },
  {
    title: "Input Data dan Training",
    description:
      "Data awal dapat diimpor atau disiapkan, kemudian dilakukan pelatihan penggunaan untuk admin, dosen, tutor, penguji, atau operator.",
  },
  {
    title: "Go-Live dan Pendampingan Awal",
    description:
      "Platform mulai digunakan dalam skenario demo, pilot, atau implementasi nyata, disertai pendampingan awal untuk memastikan penggunaan berjalan lancar.",
  },
];

const faqs = [
  [
    "Apakah platform ini bisa digunakan untuk fakultas kedokteran?",
    "Ya. Platform ini sangat sesuai untuk fakultas kedokteran dan program profesi dokter karena mendukung CBT, OSCE, dan penilaian tutorial/PBL.",
  ],
  [
    "Apakah bisa digunakan oleh program studi kesehatan lain?",
    "Bisa. Platform dapat disesuaikan untuk program studi keperawatan, kebidanan, kesehatan masyarakat, farmasi, dan institusi pendidikan kesehatan lainnya.",
  ],
  [
    "Apakah sistem bisa digunakan untuk ujian blok?",
    "Ya. CBT Assess dapat digunakan untuk ujian blok, try out, ujian internal, kuis, dan asesmen berbasis soal pilihan ganda.",
  ],
  [
    "Apakah bisa import data mahasiswa dari Excel?",
    "Sistem dapat disiapkan untuk mendukung input atau import data, termasuk data mahasiswa, tutor, penguji, kelompok, dan komponen asesmen sesuai kebutuhan modul.",
  ],
  [
    "Apakah OSCE Assess mendukung multi-station?",
    "Ya. OSCE Assess dirancang untuk mendukung pengelolaan station, rubrik, penguji, dan rekap hasil penilaian OSCE.",
  ],
  [
    "Apakah Tutor Assess bisa digunakan untuk PBL atau tutorial?",
    "Ya. Tutor Assess membantu tutor menilai proses tutorial/PBL menggunakan rubrik yang lebih objektif, terdokumentasi, dan mudah direkap.",
  ],
  [
    "Apakah sistem bisa dipasang di server institusi?",
    "Bisa dibahas sesuai kebutuhan. Kami dapat menyiapkan opsi implementasi cloud maupun skema server institusi, tergantung kesiapan infrastruktur dan kebijakan data.",
  ],
  [
    "Apakah tersedia training penggunaan?",
    "Ya. Paket implementasi dapat mencakup pelatihan untuk admin, dosen, tutor, penguji, atau operator.",
  ],
  [
    "Apakah sistem bisa dikustomisasi?",
    "Bisa. Penyesuaian dapat dilakukan untuk kebutuhan tertentu seperti struktur blok, rubrik, format laporan, alur pengguna, atau tampilan tertentu.",
  ],
  [
    "Bagaimana cara meminta demo?",
    "Institusi dapat mengisi form Request Demo atau menghubungi WhatsApp resmi DigitalTech Solusi Nusantara untuk menjadwalkan sesi demo.",
  ],
];

const whatsappPhone = "628139788650";
const officialEmail = "admin@digitaltechsolusi.com";
const cbtDemoUrl = "https://cbt.digitaltechsolusi.com";

const flyerMaterials: FlyerMaterial[] = [
  {
    product: "CBT Assess",
    category: "Computer Based Test",
    description:
      "Solusi ujian online dengan bank soal, import Word berbasis AI, monitoring peserta, analisis butir, dan export hasil.",
    badges: ["AI Word Import", "Analisis Butir", "Monitoring Ujian"],
    src: "/flyers/cbt-assess-flyer.png",
    alt: "Flyer CBT Assess - PT DigitalTech Solusi Nusantara",
    demoHref: cbtDemoUrl,
    demoExternal: true,
    accent: {
      border: "border-blue-200",
      background: "from-blue-50 to-white",
      label: "text-blue-600",
      badge: "border-blue-100 bg-blue-50 text-blue-700",
      glow: "shadow-blue-100/80",
    },
  },
  {
    product: "OSCE Assess",
    category: "OSCE Digital",
    description:
      "Platform web untuk pengaturan sesi OSCE, station, penguji, rubrik, penilaian per station, dan rekap nilai.",
    badges: ["Setting Sesi", "Station OSCE", "Rubrik Digital"],
    src: "/flyers/osce-assess-flyer.png",
    alt: "Flyer OSCE Assess - PT DigitalTech Solusi Nusantara",
    demoHref: "#demo",
    accent: {
      border: "border-teal-200",
      background: "from-teal-50 to-white",
      label: "text-teal-600",
      badge: "border-teal-100 bg-teal-50 text-teal-700",
      glow: "shadow-teal-100/80",
    },
  },
  {
    product: "Tutor Assess",
    category: "Tutorial/PBL Assessment",
    description:
      "Sistem penilaian tutorial/PBL untuk absensi, rubrik, draft, submit final, rekap nilai, dan dokumentasi proses tutorial.",
    badges: ["Tutorial I & II", "Rubrik Tutor", "Rekap Nilai"],
    src: "/flyers/tutor-assess-flyer.png",
    alt: "Flyer Tutor Assess - PT DigitalTech Solusi Nusantara",
    demoHref: "#demo",
    accent: {
      border: "border-violet-200",
      background: "from-violet-50 to-white",
      label: "text-violet-600",
      badge: "border-violet-100 bg-violet-50 text-violet-700",
      glow: "shadow-violet-100/80",
    },
  },
];

const companyHighlights = [
  ["Legal entity", "PT DigitalTech Solusi Nusantara"],
  ["Fokus", "Assessment technology for education and healthcare"],
  ["Produk utama", "CBT Assess, OSCE Assess, Tutor Assess"],
  ["Target", "Institusi pendidikan dan kesehatan"],
  ["Lokasi", "Medan, Indonesia"],
  ["Kontak resmi", `WhatsApp: 0813-9788-650 | Email: ${officialEmail}`],
];

const navItems = [
  { label: "Produk", href: "#produk" },
  { label: "Fitur", href: "#fitur" },
  { label: "Solusi", href: "#use-case" },
  { label: "Harga", href: "#harga" },
  { label: "Tentang Kami", href: "#tentang" },
];

const floatingNavItems = [
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Solusi", href: "#use-case" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
  { label: "Demo", href: "#demo" },
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
const demoFields: Array<{
  label: string;
  name: keyof DemoFormState;
  placeholder: string;
  type: string;
  required?: boolean;
  className?: string;
}> = [
  { label: "Nama", name: "name", placeholder: "Nama lengkap", type: "text", required: true },
  { label: "Institusi", name: "institution", placeholder: "Nama institusi", type: "text", required: true },
  { label: "Jabatan", name: "position", placeholder: "Jabatan", type: "text" },
  { label: "Nomor WhatsApp", name: "whatsapp", placeholder: "0813-9788-650", type: "text", required: true },
  { label: "Email", name: "email", placeholder: "nama@institusi.ac.id", type: "email", className: "sm:col-span-2" },
];
const demoProductOptions = ["CBT Assess", "OSCE Assess", "Tutor Assess", "Bundle 3 Produk"];
const whatsappUrl =
  "https://wa.me/628139788650?text=Halo%20PT%20DigitalTech%20Solusi%20Nusantara%2C%20saya%20ingin%20request%20demo%20CBT%2C%20OSCE%2C%20atau%20Tutor%20Assess.";
const generalWhatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
  "Halo DigitalTech Solusi Nusantara, saya ingin berkonsultasi mengenai CBT Assess, OSCE Assess, dan Tutor Assess."
)}`;
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function Logo() {
  return (
    <a href="#home" className="inline-flex items-center" aria-label="PT DigitalTech Solusi Nusantara">
      <Image
        src="/logo-dtn.png"
        alt="PT DigitalTech Solusi Nusantara"
        width={240}
        height={80}
        priority
        sizes="(min-width: 1024px) 280px, (min-width: 768px) 245px, 175px"
        className="h-auto w-[175px] object-contain md:w-[245px] lg:w-[280px]"
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
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1.5 rounded-3xl border border-slate-200 bg-white/65 p-1.5 shadow-lg shadow-slate-200/50 backdrop-blur-xl lg:flex"
      aria-label="Navigasi section"
    >
      {floatingNavItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="group flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-slate-600 transition-all hover:bg-cyan-50 hover:text-cyan-600"
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
        <p className="mt-1 text-xs leading-5 text-slate-600">Role access & kontrol data</p>
      </div>
    </motion.div>
  );
}

function ProductBenefitList({ product }: { product: Product }) {
  return (
    <div className="rounded-3xl border border-cyan-100 bg-white/85 p-5 shadow-xl shadow-cyan-100/50 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-black uppercase tracking-wide text-cyan-600">Benefit utama</p>
        {product.id === "cbt" ? (
          <span className="rounded-full bg-slate-950 px-3 py-1 text-[0.68rem] font-black uppercase tracking-wide text-white">
            Produk utama
          </span>
        ) : null}
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {product.features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-3 text-sm font-semibold text-slate-700"
          >
            <Check className="mt-0.5 h-4 w-4 flex-none text-cyan-600" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductShowcase() {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeProduct = products[activeProductIndex];
  const activeScreenshots = productScreenshots[activeProduct.id];
  const currentScreenshot = activeScreenshots[activeSlide];
  const activeBadges = productShowcaseBadges[activeProduct.id];
  const activeSummary = productMobileSummaries[activeProduct.id];
  const primaryDemoLabel = `Lihat Demo ${activeProduct.name}`;
  const primaryDemoHref = activeProduct.id === "cbt" ? cbtDemoUrl : "#demo";
  const isExternalDemo = activeProduct.id === "cbt";

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % activeScreenshots.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [activeScreenshots.length]);

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + activeScreenshots.length) % activeScreenshots.length);
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % activeScreenshots.length);
  };

  const selectProduct = (index: number) => {
    setActiveProductIndex(index);
    setActiveSlide(0);
    setLightboxOpen(false);
  };

  return (
    <section
      id="produk"
      className="relative overflow-hidden bg-gradient-to-br from-white via-cyan-50/70 to-violet-50/60 px-5 pb-28 pt-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(6,182,212,0.16),transparent_30%),radial-gradient(circle_at_86%_24%,rgba(59,130,246,0.14),transparent_28%),linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:auto,auto,42px_42px,42px_42px]" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" />
      <div id="solusi" className="relative mx-auto max-w-7xl xl:pr-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-wide text-cyan-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Product Showcase
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Satu Ekosistem untuk Asesmen Akademik Digital
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              DigitalTech Solusi Nusantara membantu institusi mengelola CBT, OSCE, dan penilaian tutorial secara
              paperless, terukur, dan terintegrasi.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {products.map((product, index) => {
                const isActive = index === activeProductIndex;

                return (
                  <button
                    key={product.name}
                    type="button"
                    onClick={() => selectProduct(index)}
                    className={`rounded-full border px-4 py-3 text-sm font-black transition-all ${
                      isActive
                        ? "border-cyan-300 bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-600 text-white shadow-xl shadow-cyan-200/70"
                        : "border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                    }`}
                  >
                    {product.name}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-3xl border border-cyan-100 bg-white/90 p-4 shadow-xl shadow-cyan-100/50 backdrop-blur lg:hidden">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-cyan-600">Produk aktif</p>
                  <h3 className="mt-1 text-2xl font-black text-slate-950">{activeSummary.title}</h3>
                </div>
                {activeProduct.id === "cbt" ? (
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-[0.68rem] font-black uppercase tracking-wide text-white">
                    Utama
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{activeSummary.description}</p>
              <div className="mt-4 grid gap-2 min-[380px]:grid-cols-2">
                {activeSummary.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-2 rounded-2xl border border-slate-100 bg-slate-50/90 px-3 py-2.5 text-xs font-black text-slate-700"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-cyan-600" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:mt-6 lg:flex-col xl:flex-row">
              <a
                href={primaryDemoHref}
                target={isExternalDemo ? "_blank" : undefined}
                rel={isExternalDemo ? "noopener noreferrer" : undefined}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-600 px-5 text-sm font-black text-white shadow-xl shadow-cyan-200/70 transition-all hover:-translate-y-0.5 hover:shadow-cyan-300/70"
              >
                {primaryDemoLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-200 bg-white/85 px-5 text-sm font-black text-slate-950 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-50"
              >
                Jadwalkan Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 lg:mt-6">
              {activeBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-cyan-100 bg-white/80 px-3 py-1.5 text-xs font-black text-slate-700 shadow-sm backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-7 hidden lg:block">
              <ProductBenefitList product={activeProduct} />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
            className="relative min-w-0"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-cyan-200/40 via-blue-200/30 to-violet-200/40 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/70 bg-white/80 p-2 shadow-2xl shadow-cyan-200/70 backdrop-blur-xl sm:p-3">
              <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600 sm:inline-flex">
                    Live Preview
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 px-3 py-1 text-xs font-black text-white shadow-lg shadow-cyan-100">
                    {activeProduct.name}
                  </span>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="relative mt-3 block h-[240px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white text-left shadow-inner min-[390px]:h-[255px] sm:aspect-[16/9] sm:h-auto sm:min-h-[380px] lg:min-h-[460px]"
                  aria-label={`Perbesar screenshot ${currentScreenshot.title}`}
                >
                  <Image
                    src={currentScreenshot.src}
                    alt={currentScreenshot.alt}
                    fill
                    sizes="(min-width: 1280px) 760px, (min-width: 1024px) 64vw, 100vw"
                    className="object-contain object-top p-1.5 sm:p-2"
                    priority={activeSlide === 0}
                  />
                  <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-3 sm:p-4">
                    <span className="line-clamp-1 rounded-full border border-white/80 bg-white/85 px-3 py-1 text-xs font-black text-slate-700 shadow-sm backdrop-blur">
                      {currentScreenshot.title}
                    </span>
                    <span className="hidden rounded-full bg-slate-950/85 px-3 py-1 text-xs font-black text-white backdrop-blur sm:inline-flex">
                      Klik untuk memperbesar
                    </span>
                  </div>
                </button>

                <div className="grid gap-3 px-1 py-4 sm:py-5 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <h3 className="text-lg font-black text-slate-950 sm:text-2xl">{currentScreenshot.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 sm:line-clamp-none sm:text-base sm:leading-7">
                      {currentScreenshot.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goToPrevious}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                      aria-label="Screenshot sebelumnya"
                    >
                      <ArrowRight className="h-4 w-4 rotate-180" />
                    </button>
                    <button
                      type="button"
                      onClick={goToNext}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                      aria-label="Screenshot berikutnya"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-2 overflow-x-auto px-1 pb-3 sm:grid sm:grid-cols-2 sm:gap-3 sm:overflow-visible xl:grid-cols-5">
                  {activeScreenshots.map((screenshot, index) => (
                    <button
                      key={screenshot.src}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`group relative h-16 w-28 flex-none overflow-hidden rounded-2xl border bg-white text-left transition-all sm:h-24 sm:w-auto ${
                        index === activeSlide
                          ? "border-cyan-400 shadow-lg shadow-cyan-100 ring-4 ring-cyan-100"
                          : "border-slate-200 opacity-75 hover:border-cyan-300 hover:opacity-100"
                      }`}
                      aria-label={`Tampilkan ${screenshot.title}`}
                    >
                      <Image src={screenshot.src} alt={screenshot.alt} fill sizes="180px" className="object-cover object-top" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
                      <span className="absolute inset-x-2 bottom-2 line-clamp-2 text-xs font-black leading-4 text-white">
                        {screenshot.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-6xl rounded-3xl bg-white p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg"
              aria-label="Tutup preview screenshot"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={currentScreenshot.src}
                alt={currentScreenshot.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="grid gap-4 p-4 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-2xl font-black text-slate-950">{currentScreenshot.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{currentScreenshot.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50"
                  aria-label="Screenshot sebelumnya"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50"
                  aria-label="Screenshot berikutnya"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [demoForm, setDemoForm] = useState<DemoFormState>({
    name: "",
    institution: "",
    position: "",
    whatsapp: "",
    email: "",
  });
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formError, setFormError] = useState("");
  const [activeFlyer, setActiveFlyer] = useState<FlyerMaterial | null>(null);

  useEffect(() => {
    if (!activeFlyer) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveFlyer(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeFlyer]);

  const updateDemoField = (field: keyof DemoFormState, value: string) => {
    setDemoForm((current) => ({ ...current, [field]: value }));
    if (formError) {
      setFormError("");
    }
  };

  const toggleProduct = (product: string) => {
    setSelectedProducts((current) =>
      current.includes(product) ? current.filter((item) => item !== product) : [...current, product]
    );
    if (formError) {
      setFormError("");
    }
  };

  const submitDemoRequest = () => {
    const name = demoForm.name.trim();
    const institution = demoForm.institution.trim();
    const whatsapp = demoForm.whatsapp.trim();

    if (!name || !institution || !whatsapp || selectedProducts.length === 0) {
      setFormError("Mohon isi Nama, Institusi, Nomor WhatsApp, dan pilih minimal satu produk.");
      return;
    }

    const message = [
      "Halo DigitalTech Solusi Nusantara, saya ingin mengajukan permintaan demo.",
      "",
      `Nama: ${name}`,
      `Institusi: ${institution}`,
      `Jabatan: ${demoForm.position.trim() || "-"}`,
      `Nomor WhatsApp: ${whatsapp}`,
      `Email: ${demoForm.email.trim() || "-"}`,
      `Produk yang diminati: ${selectedProducts.join(", ")}`,
      "",
      "Kebutuhan:",
      "Saya ingin mengetahui demo produk, konsultasi kebutuhan, dan proposal implementasi.",
      "",
      "Mohon informasi jadwal demo yang tersedia. Terima kasih.",
    ].join("\n");

    window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

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
              <a
                href="#demo"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 font-bold text-white shadow-lg shadow-slate-300/80 transition-all hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Coba Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#produk"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 font-bold text-slate-950 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50"
              >
                Jelajahi Produk
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

      <ProductShowcase />

      <section id="fitur-cbt" className="border-y border-slate-200 bg-gradient-to-b from-cyan-50/70 to-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[2rem] border border-cyan-200 bg-gradient-to-br from-white via-cyan-50 to-violet-50 p-6 shadow-xl shadow-cyan-100/70 sm:p-8 lg:p-10"
          >
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
            <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-slate-950 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white">
                    Fitur Pembeda CBT Assess
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-white/80 px-3 py-1.5 text-xs font-black text-cyan-700 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    AI Word Question Import
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  Impor Soal Word Berbasis AI
                </h2>
                <p className="mt-5 text-lg font-bold leading-8 text-slate-800">
                  Ubah file soal Word dosen menjadi bank soal CBT Assess secara otomatis, lengkap dengan deteksi opsi,
                  kunci jawaban, confidence score, dan preview koreksi.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  Dosen tidak perlu lagi menyalin soal satu per satu. Cukup upload file Word, CBT Assess akan membantu
                  membaca struktur soal, mendeteksi opsi dan kunci jawaban, lalu menampilkan preview koreksi sebelum
                  soal disimpan ke bank soal.
                </p>

                <div className="mt-7 rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur">
                  <h3 className="font-black text-slate-950">Mengatasi Masalah Nyata Panitia Ujian</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {aiWordImportProblems.map((problem) => (
                      <div key={problem} className="flex items-start gap-2 text-sm font-semibold leading-6 text-slate-700">
                        <Check className="mt-1 h-4 w-4 flex-none text-cyan-600" />
                        <span>{problem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={cbtDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 text-sm font-black text-white shadow-lg shadow-slate-300/70 transition-all hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Lihat Demo CBT Assess
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#demo"
                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-cyan-200 bg-white/80 px-6 text-sm font-black text-slate-950 shadow-sm transition-all hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-50"
                  >
                    Jadwalkan Demo
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-lg shadow-slate-200/60 backdrop-blur sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-200">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wide text-cyan-600">AI-Powered Workflow</p>
                    <h3 className="mt-1 text-xl font-black text-slate-950">Dari Word ke Bank Soal</h3>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {aiWordImportFlow.map((step, index) => (
                    <div key={step} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-xs font-black text-cyan-700">
                        {index + 1}
                      </span>
                      <p className="mt-3 text-sm font-black leading-6 text-slate-800">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-violet-100 bg-violet-50/70 p-5">
                  <p className="text-sm font-black text-slate-950">Highlight fitur</p>
                  <div className="mt-4 grid gap-3">
                    {aiWordImportHighlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                        <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white text-violet-600 shadow-sm">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mx-auto mb-12 mt-16 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">CBT Assess</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              12 Fitur Inti CBT Assess
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Fitur operasional lengkap untuk mendukung persiapan, pelaksanaan, pemantauan, dan evaluasi ujian online.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cbtFeatureHighlights.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ delay: index * 0.025, duration: 0.45, ease: "easeOut" }}
                  variants={fadeUp}
                  className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/60"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-slate-950">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
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
            description="Lihat tampilan nyata CBT Assess, Tutor Assess, dan OSCE Assess dalam satu ekosistem asesmen digital yang terintegrasi."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;
              const screenshot = productScreenshots[product.id][0];

              return (
                <motion.article
                  key={product.id}
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
                      Screenshot
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes="(min-width: 1024px) 380px, 100vw"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-black text-slate-950">{product.name}</h3>
                  <p className="mt-2 text-sm font-black text-cyan-600">{screenshot.title}</p>
                  <p className="mt-3 leading-7 text-slate-600">{screenshot.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="materi-produk" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">Materi Produk</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Materi Produk DigitalTech Assess Suite
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Materi visual resmi untuk membantu institusi memahami solusi CBT, OSCE, dan penilaian tutorial/PBL
              dalam ekosistem DigitalTech Assess Suite.
            </p>
            <span className="mt-5 inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-cyan-700">
              Siap untuk presentasi, WhatsApp, dan audiensi institusi
            </span>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {flyerMaterials.map((material, index) => (
              <motion.article
                key={material.product}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                transition={{ delay: index * 0.06, duration: 0.5, ease: "easeOut" }}
                variants={fadeUp}
                className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-gradient-to-br p-5 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl ${material.accent.border} ${material.accent.background} ${material.accent.glow}`}
              >
                <button
                  type="button"
                  onClick={() => setActiveFlyer(material)}
                  className="relative h-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-left shadow-sm sm:h-[400px] lg:h-[380px] xl:h-[420px]"
                  aria-label={`Lihat flyer ${material.product}`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white via-cyan-50 to-slate-100 p-6 text-center">
                    <Sparkles className={`h-9 w-9 ${material.accent.label}`} />
                    <p className="mt-4 text-sm font-black uppercase tracking-wide text-slate-500">Preview Flyer</p>
                    <p className="mt-2 text-2xl font-black text-slate-950">{material.product}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Letakkan file resmi di <span className="font-mono text-xs">{material.src}</span>
                    </p>
                  </div>
                  <Image
                    src={material.src}
                    alt={material.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-slate-950">
                      Klik untuk memperbesar
                    </span>
                  </div>
                </button>

                <div className="flex flex-1 flex-col pt-6">
                  <p className={`text-xs font-black uppercase tracking-wide ${material.accent.label}`}>
                    {material.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">{material.product}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{material.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {material.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`rounded-full border px-3 py-1 text-xs font-black ${material.accent.badge}`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveFlyer(material)}
                      className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-slate-800"
                    >
                      Lihat Flyer
                    </button>
                    <a
                      href={material.demoHref}
                      target={material.demoExternal ? "_blank" : undefined}
                      rel={material.demoExternal ? "noopener noreferrer" : undefined}
                      className={`inline-flex h-12 items-center justify-center rounded-xl border bg-white/75 px-5 text-sm font-black text-slate-950 transition ${material.accent.border}`}
                    >
                      Lihat Demo
                    </a>
                    <a
                      href="#demo"
                      className="inline-flex h-12 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 px-5 text-sm font-black text-cyan-700 transition hover:bg-cyan-100"
                    >
                      Minta Proposal
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
            className="mt-8 grid gap-4 rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-5 shadow-sm shadow-cyan-100/70 md:grid-cols-[1fr_auto] md:items-center md:p-6"
          >
            <p className="text-center text-base font-black leading-7 text-slate-800 md:text-left">
              Butuh proposal lengkap atau demo produk untuk institusi Anda?
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-black text-white shadow-lg shadow-slate-200/80 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Minta Proposal Kerja Sama
              </a>
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-cyan-200 bg-white px-5 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                Jadwalkan Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {activeFlyer ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-sm sm:p-5"
          onClick={() => setActiveFlyer(null)}
          role="presentation"
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Flyer ${activeFlyer.product}`}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
              <div>
                <p className={`text-xs font-black uppercase tracking-wide ${activeFlyer.accent.label}`}>
                  {activeFlyer.category}
                </p>
                <h3 className="mt-1 text-xl font-black text-slate-950 sm:text-2xl">{activeFlyer.product}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveFlyer(null)}
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-slate-950 text-white shadow-lg transition hover:bg-slate-800"
                aria-label="Tutup flyer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto bg-slate-100 p-3 sm:p-5">
              <div className="relative mx-auto min-h-[520px] max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white via-cyan-50 to-slate-100 p-8 text-center">
                  <Sparkles className={`h-10 w-10 ${activeFlyer.accent.label}`} />
                  <p className="mt-4 text-sm font-black uppercase tracking-wide text-slate-500">Preview Flyer</p>
                  <p className="mt-2 text-3xl font-black text-slate-950">{activeFlyer.product}</p>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                    File flyer resmi belum ditemukan pada path <span className="font-mono text-xs">{activeFlyer.src}</span>.
                  </p>
                </div>
                <Image
                  src={activeFlyer.src}
                  alt={activeFlyer.alt}
                  width={900}
                  height={1400}
                  sizes="(min-width: 1024px) 760px, 92vw"
                  className="relative z-10 h-auto w-full"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>

            <div className="grid gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:flex sm:items-center sm:justify-end sm:px-6">
              <a
                href={activeFlyer.src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-950 transition hover:bg-slate-50"
              >
                Buka Gambar Penuh
              </a>
              <a
                href="#demo"
                onClick={() => setActiveFlyer(null)}
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-slate-800"
              >
                Minta Proposal / Jadwalkan Demo
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <section id="keunggulan" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Kenapa DigitalTech"
            title="Kenapa Memilih DigitalTech Solusi Nusantara?"
            description="Kami menghadirkan platform asesmen digital yang dirancang untuk membantu institusi pendidikan dan kesehatan menjalankan evaluasi akademik secara lebih efisien, objektif, dan terdokumentasi."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {choiceReasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
                  variants={fadeUp}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-black text-slate-950">{reason.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{reason.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="target" className="border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Target Institusi"
            title="Cocok untuk Berbagai Institusi Pendidikan dan Kesehatan"
            description="DigitalTech Assess Suite dapat digunakan oleh berbagai unit akademik dan institusi yang membutuhkan asesmen digital yang rapi dan terdokumentasi."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {targetAudiences.map((audience, index) => (
              <motion.div
                key={audience}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.02, duration: 0.45, ease: "easeOut" }}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-cyan-100 bg-white px-4 py-4 text-sm font-black text-slate-700 shadow-sm shadow-slate-200/70"
              >
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                  <Check className="h-4 w-4" />
                </span>
                {audience}
              </motion.div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-slate-600">
            Platform dapat disesuaikan dengan struktur akademik dan kebutuhan asesmen masing-masing institusi.
          </p>
        </div>
      </section>

      <section id="use-case" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Use Case"
            title="Masalah Asesmen yang Kami Bantu Selesaikan"
            description="DigitalTech Assess Suite dirancang untuk menyederhanakan proses asesmen yang sebelumnya manual, lambat, dan sulit direkap."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {useCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                  variants={fadeUp}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm shadow-slate-200/70"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
                  </div>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-xs font-black uppercase tracking-wide text-rose-500">Problem</p>
                      <p className="mt-2 leading-7 text-slate-600">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wide text-cyan-600">Solusi</p>
                      <p className="mt-2 leading-7 text-slate-600">{item.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {item.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-cyan-600" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
            className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm shadow-slate-200/70"
          >
            <div className="border-b border-slate-200 bg-white px-6 py-5">
              <h3 className="text-xl font-black text-slate-950">Sebelum dan Sesudah Digitalisasi</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Gambaran perubahan operasional saat proses asesmen dipusatkan dalam satu platform.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100 text-slate-700">
                    <th className="px-6 py-4 font-black">Sebelum Digitalisasi</th>
                    <th className="px-6 py-4 font-black">Dengan DigitalTech Assess Suite</th>
                  </tr>
                </thead>
                <tbody>
                  {beforeAfterRows.map(([before, after]) => (
                    <tr key={before} className="border-b border-slate-200 last:border-b-0">
                      <td className="px-6 py-4 text-slate-600">{before}</td>
                      <td className="px-6 py-4 font-semibold text-slate-800">{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="keamanan" className="border-y border-slate-200 bg-cyan-50/60 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Keamanan Data"
            title="Keamanan dan Privasi Data Menjadi Prioritas"
            description="Kami memahami bahwa data asesmen, nilai mahasiswa, dan informasi akademik harus dikelola secara hati-hati dan terstruktur."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
                  variants={fadeUp}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70"
                >
                  <Icon className="h-7 w-7 text-cyan-600" />
                  <h3 className="mt-5 text-lg font-black text-slate-950">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="fitur" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
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

      <section id="implementasi" className="border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Alur Implementasi"
            title="Alur Implementasi yang Terarah"
            description="Kami membantu institusi mulai dari identifikasi kebutuhan hingga sistem siap digunakan untuk asesmen."
          />

          <div className="grid gap-5 lg:grid-cols-4">
            {implementationSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.5, ease: "easeOut" }}
                variants={fadeUp}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
              >
                <div className="absolute right-4 top-4 text-6xl font-black leading-none text-cyan-50">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-300/70">
                  {index + 1}
                </div>
                <h3 className="relative mt-6 text-xl font-black text-slate-950">{step.title}</h3>
                <p className="relative mt-4 leading-7 text-slate-600">{step.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-100 bg-white p-5 text-center shadow-sm shadow-cyan-100/70">
            <p className="text-sm font-bold leading-7 text-slate-600">
              Implementasi dapat dilakukan secara bertahap, mulai dari satu modul terlebih dahulu atau langsung
              menggunakan Bundle 3 Produk.
            </p>
          </div>
        </div>
      </section>

      <section
        id="harga"
        className="relative overflow-hidden bg-gradient-to-br from-white via-cyan-50/70 to-violet-50/60 px-5 py-20 sm:px-6 lg:px-8 xl:pr-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(6,182,212,0.16),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(16,185,129,0.14),transparent_26%),linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:auto,auto,44px_44px,44px_44px]" />
        <div className="absolute bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="HARGA"
            title="Paket yang Fleksibel untuk Institusi"
            description="Nominal berikut merupakan acuan lisensi dan implementasi awal. Estimasi final disesuaikan dengan ruang lingkup produk, skema implementasi, jumlah pengguna, serta kebutuhan institusi."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <motion.article
                  key={plan.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
                  variants={fadeUp}
                  className={`relative flex h-full flex-col overflow-hidden rounded-3xl border bg-gradient-to-br p-6 shadow-xl shadow-slate-200/60 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl ${plan.accent.border} ${plan.accent.background} ${plan.accent.shadow} ${
                    plan.highlighted ? "ring-2 ring-cyan-200/80 xl:-mt-3 xl:pb-9" : ""
                  }`}
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/70 blur-3xl" />
                  {plan.highlighted ? (
                    <div className="absolute -bottom-20 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-cyan-300/30 blur-3xl" />
                  ) : null}
                  {plan.highlighted ? (
                    <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 px-3 py-1 text-xs font-black text-white shadow-lg shadow-cyan-200">
                      Paling Direkomendasikan
                    </div>
                  ) : null}

                  <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${plan.accent.iconBackground} shadow-sm`}>
                    <Icon className={`h-7 w-7 ${plan.accent.text}`} />
                  </div>
                  {plan.bonusLabel ? (
                    <span className="relative mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 shadow-sm shadow-emerald-100">
                      <Sparkles className="h-3.5 w-3.5" />
                      {plan.bonusLabel}
                    </span>
                  ) : null}
                  <h3 className={`relative ${plan.bonusLabel ? "mt-3" : "mt-6"} text-2xl font-black text-slate-950`}>
                    {plan.name}
                  </h3>
                  <p className="relative mt-5 text-xs font-black uppercase tracking-wide text-slate-500">
                    Lisensi / Implementasi Awal
                  </p>
                  <p className={`relative mt-2 text-3xl font-black leading-tight ${plan.accent.text}`}>{plan.price}</p>
                  <p className="relative mt-4 leading-7 text-slate-600">{plan.description}</p>

                  <div className="relative mt-6 rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm">
                    <p className="text-sm font-black text-slate-950">Cocok untuk</p>
                    <div className="mt-3 grid gap-2">
                      {plan.suitableFor.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm font-semibold text-slate-700">
                          <Check className={`mt-0.5 h-4 w-4 flex-none ${plan.accent.text}`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-4 flex-1 rounded-2xl border border-slate-200/70 bg-slate-50/75 p-4">
                    <p className="text-sm font-black text-slate-950">Highlight fitur</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {plan.highlights.map((item) => (
                        <span
                          key={item}
                          className={`rounded-full border px-3 py-1 text-xs font-black ${plan.accent.border} ${plan.accent.text} bg-white/80`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-8 grid gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 font-bold text-white shadow-lg shadow-slate-300/60 transition hover:-translate-y-0.5 hover:bg-slate-800"
                    >
                      Minta Proposal
                    </a>
                    <a
                      href="#demo"
                      className={`inline-flex h-12 items-center justify-center rounded-2xl border bg-white/80 px-5 font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 ${plan.accent.border} ${plan.accent.softHover}`}
                    >
                      Lihat Detail
                    </a>
                  </div>
                  {plan.note ? (
                    <p className="mt-4 text-xs font-medium leading-5 text-slate-500">{plan.note}</p>
                  ) : null}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skema-implementasi" className="border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Skema Implementasi"
            title="Pilih Skema Implementasi"
            description="Kami menyediakan beberapa model implementasi agar sesuai dengan kebutuhan teknis, kebijakan data, dan anggaran institusi."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {implementationModels.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                  variants={fadeUp}
                  className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/60"
                >
                  {item.badge ? (
                    <div className="absolute right-5 top-5 rounded-full bg-cyan-500 px-3 py-1 text-xs font-black text-white shadow-lg shadow-cyan-200">
                      {item.badge}
                    </div>
                  ) : null}

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-slate-950">{item.name}</h3>
                  <p className="mt-4 flex-1 leading-7 text-slate-600">{item.description}</p>
                  <a
                    href="#demo"
                    className="mt-7 inline-flex h-12 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-4 text-sm font-black text-slate-950 transition hover:bg-cyan-100"
                  >
                    {item.cta}
                  </a>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              variants={fadeUp}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
            >
              <p className="text-sm font-black uppercase tracking-wide text-cyan-600">Estimasi Proposal</p>
              <h3 className="mt-3 text-2xl font-black text-slate-950">Bagaimana harga ditentukan?</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {pricingFactors.map((factor) => (
                  <div key={factor} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-cyan-600" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              variants={fadeUp}
              className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6 shadow-xl shadow-cyan-100/70"
            >
              <p className="text-sm font-black uppercase tracking-wide text-cyan-600">Butuh Rekomendasi?</p>
              <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Masih bingung memilih paket yang tepat?
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Kami dapat membantu merekomendasikan kombinasi produk dan skema implementasi yang paling sesuai untuk
                institusi Anda.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#demo"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-950 px-5 font-bold text-white transition hover:bg-slate-800"
                >
                  Jadwalkan Demo
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-cyan-200 bg-white px-5 font-bold text-slate-950 transition hover:bg-cyan-50"
                >
                  Minta Proposal
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-green-200 bg-white px-5 font-bold text-slate-950 transition hover:bg-green-50"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </motion.div>
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

      <section id="faq" className="border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            description="Beberapa hal yang biasanya ditanyakan institusi sebelum menggunakan DigitalTech Assess Suite."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {faqs.map(([question, answer], index) => (
              <motion.details
                key={question}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.02, duration: 0.45, ease: "easeOut" }}
                variants={fadeUp}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70 open:border-cyan-200 open:shadow-cyan-100/70"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-black text-slate-950">
                  {question}
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-cyan-50 text-cyan-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section id="tentang" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
          >
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">Tentang Kami</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Tentang PT DigitalTech Solusi Nusantara
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              PT DigitalTech Solusi Nusantara adalah perusahaan teknologi yang berfokus pada pengembangan platform
              asesmen digital untuk institusi pendidikan dan kesehatan. Kami membantu institusi mengelola proses
              evaluasi akademik secara lebih efisien, objektif, terdokumentasi, dan siap mengikuti kebutuhan
              transformasi digital.
            </p>
            <a
              href="#demo"
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 font-bold text-white shadow-lg shadow-slate-300/70 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Jadwalkan Demo
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
            className="rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-slate-50 p-6 shadow-sm shadow-slate-200/70 sm:p-8"
          >
            <p className="text-lg leading-8 text-slate-600">
              Melalui DigitalTech Assess Suite, kami menghadirkan tiga solusi utama: CBT Assess untuk ujian berbasis
              komputer, OSCE Assess untuk penilaian keterampilan klinis, dan Tutor Assess untuk penilaian tutorial/PBL
              berbasis rubrik. Ketiga produk ini dirancang untuk mendukung proses asesmen yang lebih modern, paperless,
              dan terintegrasi.
            </p>

            <div className="mt-7 grid gap-3">
              {companyHighlights.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm sm:grid-cols-[150px_1fr] sm:items-center"
                >
                  <p className="text-xs font-black uppercase tracking-wide text-cyan-600">{label}</p>
                  <p className="font-bold text-slate-800">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="demo" className="bg-white px-5 py-20 pb-28 sm:px-6 sm:pb-24 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
          className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 shadow-2xl shadow-cyan-100/70"
        >
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:p-10">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-600">Request Demo</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Siap melihat DigitalTech Assess Suite bekerja untuk institusi Anda?
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                Isi form singkat berikut atau hubungi kami melalui WhatsApp untuk berdiskusi tentang CBT Assess,
                OSCE Assess, Tutor Assess, atau Bundle 3 Produk.
              </p>

              <div className="mt-7 grid gap-3">
                {["Demo produk", "Konsultasi kebutuhan", "Proposal implementasi"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-cyan-100 bg-white/80 px-4 py-3 text-sm font-black text-slate-700 shadow-sm">
                    <Check className="h-4 w-4 text-cyan-600" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={generalWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-green-200 bg-white px-5 py-3 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Hubungi langsung via WhatsApp: 0813-9788-650
              </a>
              <a
                href={`mailto:${officialEmail}`}
                className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-cyan-100 bg-white px-5 py-3 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                Atau kirim email ke {officialEmail}
              </a>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                submitDemoRequest();
              }}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70 sm:p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {demoFields.map((field) => (
                  <label key={field.name} className={field.className}>
                    <span className="text-sm font-bold text-slate-700">
                      {field.label}
                      {field.required ? <span className="text-cyan-600"> *</span> : null}
                    </span>
                    <input
                      type={field.type}
                      value={demoForm[field.name]}
                      onChange={(event) => updateDemoField(field.name, event.target.value)}
                      placeholder={field.placeholder}
                      className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                    />
                  </label>
                ))}

                <div className="sm:col-span-2">
                  <span className="text-sm font-bold text-slate-700">Produk yang diminati</span>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    {demoProductOptions.map((product) => {
                      const isSelected = selectedProducts.includes(product);

                      return (
                        <button
                          key={product}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => toggleProduct(product)}
                          className={`flex min-h-14 items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-black transition-all ${
                            isSelected
                              ? "border-cyan-300 bg-gradient-to-r from-cyan-50 to-blue-50 text-slate-950 shadow-lg shadow-cyan-100/70"
                              : "border-slate-200 bg-white text-slate-700 hover:border-cyan-200 hover:bg-cyan-50"
                          }`}
                        >
                          <span
                            className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border transition ${
                              isSelected
                                ? "border-cyan-500 bg-cyan-500 text-white"
                                : "border-slate-300 bg-white text-transparent"
                            }`}
                          >
                            <Check className="h-4 w-4" />
                          </span>
                          {product}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {formError ? (
                <p className="mt-4 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-bold text-rose-600">
                  {formError}
                </p>
              ) : null}

              <button
                type="submit"
                className="mt-5 inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 font-black text-white shadow-lg shadow-cyan-200/70 transition-all hover:-translate-y-0.5 hover:from-cyan-600 hover:to-blue-700"
              >
                Kirim Permintaan Demo
                <ArrowRight className="h-5 w-5" />
              </button>

              <a
                href={generalWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-green-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-green-50"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Hubungi via WhatsApp
              </a>
            </form>
          </div>
        </motion.div>
      </section>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Request demo via WhatsApp"
        className="fixed bottom-3 right-3 z-50 inline-flex h-10 max-w-[calc(100vw-1.5rem)] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#25D366] to-teal-500 px-3 text-xs font-black text-white shadow-2xl shadow-green-200/70 transition-all hover:-translate-y-1 hover:from-green-500 hover:to-teal-600 sm:bottom-8 sm:right-8 sm:h-14 sm:px-5 sm:text-sm"
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
            <a
              href={`mailto:${officialEmail}`}
              className="mt-2 block text-sm font-semibold text-slate-600 transition hover:text-cyan-700"
            >
              Email: {officialEmail}
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
          &copy; 2026 PT DigitalTech Solusi Nusantara. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
