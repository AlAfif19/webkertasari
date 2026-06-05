import { contact } from "@/data/contact";

const footerLinks = [
  ["Layanan", "#layanan"],
  ["Paket", "#paket"],
  ["Portofolio", "#portofolio"],
  ["Artikel", "#artikel"],
  ["Kontak", "#kontak"],
] as const;

export function Footer() {
  const socials = Object.entries(contact.socials);

  return (
    <footer className="bg-slate-950 py-12 text-slate-300">
      <div className="site-container grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-xl font-black text-white">
            Web<span className="text-emerald-400">Kertasari</span>
          </p>
          <p className="mt-4 max-w-sm leading-7">
            Jasa pembuatan website lokal untuk UMKM, personal, organisasi,
            dan bisnis berbasis data.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-white">Menu cepat</h2>
          <ul className="mt-4 space-y-2">
            {footerLinks.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white">Kontak</h2>
          <address className="mt-4 space-y-2 not-italic">
            <p>{contact.phoneDisplay}</p>
            <a href={`mailto:${contact.email}`} className="block hover:text-white">
              {contact.email}
            </a>
            <p>{contact.location}</p>
          </address>
          {socials.length > 0 ? (
            <div className="mt-4 flex gap-3">
              {socials.map(([name, href]) => (
                <a key={name} href={href} target="_blank" rel="noreferrer">
                  {name}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <p className="site-container mt-10 border-t border-slate-800 pt-6 text-sm">
        © 2026 WebKertasari. All rights reserved.
      </p>
    </footer>
  );
}
