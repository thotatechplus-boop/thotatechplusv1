import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="container text-center space-y-6">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Logo" width={96} height={96} />
        </div>
        <h1 className="text-4xl font-extrabold">We are launching soon</h1>
        <p className="text-neutral-300 max-w-2xl mx-auto">THOTATECH+ is preparing an AI-first commerce engineering experience. Meanwhile, you can reach us anytime.</p>
        <div className="space-x-4">
          <a className="btn" href="mailto:operations@thotatechplus.com">Email Us</a>
          <Link className="btn" href="/home">Preview Site</Link>
        </div>
      </div>
    </section>
  );
}
