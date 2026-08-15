import Link from "next/link";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col items-center justify-center p-6 selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-zinc-900/50 border border-zinc-800">
            <Terminal className="w-12 h-12 text-cyan-400" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold font-mono tracking-tighter text-white mb-4">
          404 <span className="text-zinc-700">|</span> Not Found
        </h1>
        
        <p className="text-zinc-400 mb-8 leading-relaxed">
          Waduh! Halaman yang boss cari sepertinya tidak ada atau sudah dipindahkan.
        </p>

        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-medium text-sm transition-colors rounded"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}