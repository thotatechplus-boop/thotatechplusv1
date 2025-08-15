"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Linkedin, Facebook, Twitter } from "lucide-react";

const nav = [
  { href: "/home", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-neutral-800 bg-black/40 sticky top-0 backdrop-blur z-50">
      <div className="container flex items-center justify-between">
         <Link href="/home" className="flex items-center gap-3 flex-shrink-0">
                 <Image
                   src="/logo.png"
                   alt="THOTATECH+"
                   width={160}
                   height={50}
                   className="h-auto w-auto max-h-12"
                 />
               </Link>
         <nav className="flex flex-wrap items-center gap-4 text-sm mt-2 sm:mt-0">
                  {nav.map((n) => (
                    <Link
                      key={n.href}
                      href={n.href}
                      className={`px-3 py-2 rounded-xl hover:bg-neutral-800 ${
                        pathname === n.href ? "bg-neutral-800" : ""
                      }`}
                    >
                      {n.label}
                    </Link>
                  ))}
          <div className="ml-2 flex items-center gap-3 opacity-80">
            <a href="https://www.linkedin.com/company/thotatechplus-software-pvt-ltd" target="_blank" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://www.facebook.com/profile.php?id=61579189360112" target="_blank" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://x.com/thotatechp4865" target="_blank" aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </nav>
      </div>
    </header>
  );
}
