import Link from "next/link";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base text-ink grid-paper flex flex-col items-center justify-center p-6">
      <div className="relative max-w-md text-center">
        <p className="font-meta text-[12px] text-accent mb-6">Error / halaman hilang</p>

        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-kartu-sm bg-raised border border-line panel">
            <Terminal className="w-12 h-12 text-accent" />
          </div>
        </div>

        <h1 className="font-display text-5xl mb-4">
          404
          <span className="block mt-2 text-2xl text-accent">tidak ditemukan</span>
        </h1>

        <p className="text-ink-2 mb-8 leading-relaxed">
          Waduh! Halaman yang kamu cari sepertinya tidak ada atau sudah dipindahkan.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-deep text-accent-ink font-semibold text-sm rounded-kontrol transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}