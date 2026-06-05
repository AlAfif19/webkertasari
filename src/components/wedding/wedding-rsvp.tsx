"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { loadRsvp, saveRsvp } from "@/lib/wedding-storage";
import type { WeddingRsvp as WeddingRsvpValue } from "@/types/wedding";

export function WeddingRsvp() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] =
    useState<WeddingRsvpValue["attendance"]>("hadir");
  const [guestCount, setGuestCount] = useState(1);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const saved = loadRsvp();
    if (!saved) return;
    setName(saved.name);
    setAttendance(saved.attendance);
    setGuestCount(saved.guestCount);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.trim().length < 2) {
      setStatus("Isi nama tamu minimal 2 karakter.");
      return;
    }

    const saved = saveRsvp({
      name,
      attendance,
      guestCount: attendance === "tidak-hadir" ? 0 : guestCount,
    });

    setStatus(
      saved
        ? "Konfirmasi tersimpan di browser ini."
        : "Penyimpanan browser tidak tersedia.",
    );
  }

  return (
    <div className="wedding-panel rounded-3xl p-6 sm:p-8">
      <h2 className="wedding-serif text-3xl font-semibold">
        Konfirmasi Kehadiran
      </h2>
      <p className="mt-3 leading-7 text-stone-600">
        Simulasi: data hanya tersimpan di browser ini dan tidak dikirim kepada
        siapa pun.
      </p>
      <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rsvp-name" className="font-semibold">
            Nama tamu
          </label>
          <input
            id="rsvp-name"
            value={name}
            maxLength={60}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 min-h-12 w-full rounded-xl border border-stone-300 bg-white px-4"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="rsvp-attendance" className="font-semibold">
              Kehadiran
            </label>
            <select
              id="rsvp-attendance"
              value={attendance}
              onChange={(event) => {
                const value = event.target
                  .value as WeddingRsvpValue["attendance"];
                setAttendance(value);
                if (value === "tidak-hadir") setGuestCount(0);
                if (value === "hadir" && guestCount === 0) setGuestCount(1);
              }}
              className="mt-2 min-h-12 w-full rounded-xl border border-stone-300 bg-white px-4"
            >
              <option value="hadir">Hadir</option>
              <option value="tidak-hadir">Tidak hadir</option>
            </select>
          </div>
          <div>
            <label htmlFor="rsvp-guests" className="font-semibold">
              Jumlah tamu
            </label>
            <select
              id="rsvp-guests"
              value={guestCount}
              disabled={attendance === "tidak-hadir"}
              onChange={(event) => setGuestCount(Number(event.target.value))}
              className="mt-2 min-h-12 w-full rounded-xl border border-stone-300 bg-white px-4 disabled:bg-stone-100"
            >
              {[0, 1, 2, 3, 4, 5].map((count) => (
                <option key={count} value={count}>
                  {count}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button type="submit" className="w-full bg-[#876b3f] hover:bg-[#6f5733]">
          Simpan konfirmasi
        </Button>
        <p role="status" aria-live="polite" className="min-h-6 text-sm font-semibold text-stone-700">
          {status}
        </p>
      </form>
    </div>
  );
}
