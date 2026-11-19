// Satu sumber kebenaran untuk data karya: dipakai halaman utama dan halaman detail.

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: "WEB" | "MOBILE";
  type?: string;
  featured?: boolean;
  role?: string;
  tech: string[];
  description: string;
  github: string;
  secondaryGithub?: string;
  demo?: string;
  image: string;
  metrics?: string[];
}

export const projects: Project[] = [
  {
    slug: "finance-notes",
    number: "01",
    title: "Finance Notes",
    subtitle: "Mobile App + Backend API",
    category: "MOBILE",
    type: "MOBILE / FULL-STACK",
    featured: true,
    role: "Full-Stack Developer",
    tech: ["React Native", "Expo", "TypeScript", "Laravel", "Sanctum", "MySQL"],
    description:
      "Aplikasi catatan keuangan pribadi. Awalnya bikin buat sendiri karena males nyatet di notes. Ada autentikasi, CRUD transaksi lengkap, backend terpisah pakai Laravel + Sanctum.",
    github: "https://github.com/hidayat-0429/catatan-keuangan",
    secondaryGithub: "https://github.com/hidayat-0429/catatan-keuangan-api",
    image: "/project-finance-app.webp",
    metrics: ["Autentikasi pakai Sanctum", "CRUD transaksi lengkap", "Backend API terpisah"],
  },
  {
    slug: "car-rental-app",
    number: "02",
    title: "Car Rental App",
    subtitle: "Aplikasi Rental Mobil",
    category: "WEB",
    role: "Full-Stack Developer",
    tech: ["Next.js", "Prisma", "NextAuth", "PostgreSQL"],
    description:
      "Web app rental mobil. Fiturnya standar: pesan mobil, kelola armada, login user. Pakai Next.js sama Prisma biar cepet development-nya.",
    github: "https://github.com/hidayat-0429/car-rental",
    image: "/project-car-rental.webp",
    metrics: ["Login pakai NextAuth", "Kelola armada mobil"],
  },
  {
    slug: "task-reminder-app",
    number: "03",
    title: "Task Reminder App",
    subtitle: "Pengingat Tugas Kuliah",
    category: "MOBILE",
    role: "Mobile Developer",
    tech: ["Flutter", "Supabase", "Firebase FCM"],
    description:
      "App pengingat tugas kuliah. Data sinkron real-time pakai Supabase, ada push notification biar gak lupa deadline. Lumayan membantu waktu tugas lagi numpuk.",
    github: "https://github.com/hidayat-0429/pengingat_kuliah",
    image: "/project-task-reminder.webp",
    metrics: ["Sinkronisasi real-time", "Push notification"],
  },
  {
    slug: "desa-information-portal",
    number: "04",
    title: "Desa Information Portal",
    subtitle: "Portal Web Desa",
    category: "WEB",
    role: "Full-Stack Developer",
    tech: ["Laravel", "Livewire", "Tailwind CSS"],
    description:
      "Portal desa yang dibikin waktu program KKN. Buat ngelola profil desa, berita, UMKM, dan wisata di desa.",
    github: "https://github.com/hidayat-0429/kkn-umkm",
    image: "/project-desa.webp",
    metrics: ["5 modul: profil, berita, UMKM, wisata, pengaduan"],
  },
  {
    slug: "weather-app",
    number: "05",
    title: "Weather App",
    subtitle: "Aplikasi Cuaca",
    category: "MOBILE",
    role: "Mobile Developer",
    tech: ["Flutter", "Firebase FCM", "REST API"],
    description:
      "Aplikasi cuaca simple. Ngambil data dari API, deteksi lokasi otomatis, ada push notification juga. Project latihan awal pas belajar Flutter.",
    github: "https://github.com/hidayat-0429/aplikasi_cuaca",
    image: "/project-weather.webp",
    metrics: ["Data cuaca real-time", "Geolokasi otomatis"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
