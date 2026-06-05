"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";

const navigation = [
  ["Beranda", "#beranda"],
  ["Layanan", "#layanan"],
  ["Paket", "#paket"],
  ["Portofolio", "#portofolio"],
  ["Artikel", "#artikel"],
  ["Review", "#review"],
  ["Kontak", "#kontak"],
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="site-container flex h-18 items-center justify-between">
        <a
          href="#beranda"
          aria-label="WebKertasari"
          className="text-xl font-black tracking-tight text-slate-950"
        >
          Web<span className="text-emerald-600">Kertasari</span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navigation.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <WhatsAppLink label="Konsultasi Gratis" />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Buka menu"
            >
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="text-lg font-bold">
              Menu WebKertasari
            </SheetTitle>
            <nav aria-label="Navigasi mobile" className="mt-10">
              <ul className="space-y-1">
                {navigation.map(([label, href]) => (
                  <li key={href}>
                    <SheetClose asChild>
                      <a
                        href={href}
                        className="block rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-100"
                      >
                        {label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <WhatsAppLink
                label="Konsultasi Gratis"
                className="mt-6 w-full"
              />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
