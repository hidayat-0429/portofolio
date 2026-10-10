import Link from "next/link";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base text-zinc-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-accent-soft border border-accent-line">
            <Terminal className="w-12 h-12 text-accent" />
          </div>
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-white mb-4">
          404 <span className="text-zinc-700">|</span> Not Found
        </h1>

        <p className="text-zinc-400 mb-8 leading-relaxed">
          Waduh! Halaman yang kamu cari sepertinya tidak ada atau sudah dipindahkan.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-fill hover:bg-accent text-accent-ink font-semibold text-sm rounded-lg transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
