"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Linkedin, Facebook, Twitter, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/home", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800 bg-black/40 sticky top-0 backdrop-blur z-50">
      <div className="container flex items-center justify-between py-2">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="THOTATECH+"
            width={160}
            height={50}
            className="h-auto w-auto max-h-14"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
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

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 border-t border-neutral-800">
          <nav className="flex flex-col items-start p-4 space-y-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`w-full px-3 py-2 rounded hover:bg-neutral-800 ${
                  pathname === n.href ? "bg-neutral-800" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-3 opacity-80">
              <a href="https://www.linkedin.com/company/thotatechplus-software-pvt-ltd" target="_blank"><Linkedin size={18} /></a>
              <a href="https://www.facebook.com/profile.php?id=61579189360112" target="_blank"><Facebook size={18} /></a>
              <a href="https://x.com/thotatechp4865" target="_blank"><Twitter size={18} /></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
