import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container py-8 space-y-12">
      <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-neutral-800">
        <Image src="/banner.png" alt="Banner" fill priority style={{objectFit:"fill"}} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="p-8 md:p-12 space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold">AI‑First Commerce Engineering</h1>
            <p className="max-w-2xl text-neutral-200">We build cloud-native, headless e‑commerce platforms with AI search, personalization and analytics.</p>
            <div className="flex gap-3">
              <Link href="/services" className="btn">Our Services</Link>
              <Link href="/contact" className="btn">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Headless & MACH", desc: "Next.js storefronts, composable services, API-first integrations.", href: "/services#ecommerce" },
          { title: "AI for Commerce", desc: "Recommenders, chatbots, RAG search over catalog.", href: "/services#ai" },
          { title: "Cloud-Native", desc: "Microservices, containers, CI/CD, observability.", href: "/services#cloud" },
        ].map((c) => (
          <a key={c.title} href={c.href} className="card hover:border-brand-red/60 transition">
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <p className="text-neutral-300">{c.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
