import Link from "next/link";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base text-ink flex flex-col items-center justify-center p-6 senja">
      <div className="relative max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-raised border border-line kertas">
            <Terminal className="w-12 h-12 text-accent" />
          </div>
        </div>

        <h1 className="font-judul text-4xl tracking-tight mb-4">
          404 <span className="font-judul-aksen">tidak ditemukan</span>
        </h1>

        <p className="text-ink-2 mb-8 leading-relaxed">
          Waduh! Halaman yang kamu cari sepertinya tidak ada atau sudah dipindahkan.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-fill hover:brightness-110 text-accent-ink font-semibold text-sm rounded-kontrol transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
