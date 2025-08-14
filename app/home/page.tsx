import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container py-8 space-y-12">
      <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-neutral-800">
           <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/banner.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
        <div className="absolute inset-0 bg-black/40" />
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
