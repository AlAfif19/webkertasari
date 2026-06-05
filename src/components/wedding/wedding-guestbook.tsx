"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  loadGuestbookEntries,
  saveGuestbookEntry,
} from "@/lib/wedding-storage";
import type { WeddingGuestbookEntry } from "@/types/wedding";

export function WeddingGuestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState<WeddingGuestbookEntry[]>([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setEntries(loadGuestbookEntries());
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.trim().length < 2) {
      setStatus("Isi nama pengirim minimal 2 karakter.");
      return;
    }

    if (message.trim().length < 2) {
      setStatus("Isi pesan dan doa minimal 2 karakter.");
      return;
    }

    const saved = saveGuestbookEntry({ name, message });
    if (!saved) {
      setStatus("Penyimpanan browser tidak tersedia.");
      return;
    }

    setEntries(loadGuestbookEntries());
    setMessage("");
    setStatus("Ucapan tersimpan di browser ini.");
  }

  return (
    <div className="wedding-panel rounded-3xl p-6 sm:p-8">
      <h2 className="wedding-serif text-3xl font-semibold">Buku Tamu</h2>
      <p className="mt-3 leading-7 text-stone-600">
        Simulasi: ucapan hanya tersimpan di browser ini dan dapat hilang jika
        penyimpanan browser dibersihkan.
      </p>
      <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="guestbook-name" className="font-semibold">
            Nama pengirim
          </label>
          <input
            id="guestbook-name"
            value={name}
            maxLength={60}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 min-h-12 w-full rounded-xl border border-stone-300 bg-white px-4"
          />
        </div>
        <div>
          <label htmlFor="guestbook-message" className="font-semibold">
            Pesan dan doa
          </label>
          <textarea
            id="guestbook-message"
            value={message}
            maxLength={240}
            rows={4}
            onChange={(event) => setMessage(event.target.value)}
            className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3"
          />
        </div>
        <Button type="submit" className="w-full bg-[#876b3f] hover:bg-[#6f5733]">
          Simpan ucapan
        </Button>
        <p role="status" aria-live="polite" className="min-h-6 text-sm font-semibold text-stone-700">
          {status}
        </p>
      </form>

      <div className="mt-8 border-t border-stone-200 pt-8">
        <h3 className="wedding-serif text-xl font-semibold">
          Ucapan yang tersimpan
        </h3>
        {entries.length === 0 ? (
          <p className="mt-4 text-stone-500">
            Belum ada ucapan di browser ini.
          </p>
        ) : (
          <ul className="mt-4 space-y-4">
            {entries.map((entry, index) => (
              <li
                key={`${entry.name}-${entry.message}-${index}`}
                className="rounded-2xl bg-[#fbf7ef] p-5"
              >
                <p className="font-semibold">{entry.name}</p>
                <p className="mt-2 leading-7 text-stone-600">
                  {entry.message}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
