"use client";

import { useEffect, useSyncExternalStore } from "react";

const langganan = () => () => {};

// Skrip hanya hidup di HTML server supaya jalan sebelum paint. Render ulang di
// klien (rute 404 pakai shell error) menyinkronkan tema lewat effect, bukan tag skrip.
export function TemaBoot({ kode }: { kode: string }) {
  const server = useSyncExternalStore(
    langganan,
    () => false,
    () => true,
  );

  useEffect(() => {
    try {
      const t = localStorage.getItem("tema");
      if (t === "gelap" || t === "terang") document.documentElement.dataset.tema = t;
    } catch {
      document.documentElement.dataset.tema = "terang";
    }
  }, []);

  if (!server) return null;
  return <script dangerouslySetInnerHTML={{ __html: kode }} />;
}