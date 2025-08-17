import Image from "next/image";
export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black/40">
      <div className="container grid md:grid-cols-4 gap-6 py-8 text-sm">
        {/* About */}
        <div>
          <div className="font-semibold mb-2">THOTATECH+ Software Pvt. Ltd.</div>
          <p>AI-first commerce engineering. We build cloud-native, headless, data-driven solutions.</p>
        </div>

        {/* Contact */}
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p>103, 4th Cross, Ayyappa Layout,<br/> Munne Kollala, Marathahalli,<br/> Bangalore - 560037</p>
          <p>operations@thotatechplus.com</p>
          <p>+91 8546 8546 11</p>
        </div>

        {/* Follow */}
        <div>
          <div className="font-semibold mb-2">Follow</div>
          <p><a href="https://www.linkedin.com/company/thotatechplus-software-pvt-ltd" target="_blank">LinkedIn</a></p>
          <p><a href="https://www.facebook.com/profile.php?id=61579189360112" target="_blank">Facebook</a></p>
          <p><a href="https://x.com/thotatechp4865" target="_blank">Twitter/X</a></p>
        </div>

        {/* Visitor counter + Logo */}
        <div className="flex flex-col items-start md:items-center">
          {/* Visitor Counter */}
          <a href="https://hits.sh/your-domain.com/">
            <img
              alt="Hits"
              src="https://hits.sh/your-domain.com.svg?style=flat-square&label=Visitors"
              className="mb-3"
            />
          </a>

          {/* Footer Logo */}
          <Image
            src="/logo.png"
            alt="THOTATECH+"
            width={160}   // bigger size
            height={50}
            className="h-auto w-auto max-h-9"
          />
        </div>
      </div>

      <div className="text-center text-xs text-neutral-500 pb-6">
        © 2024 THOTATECH+ Software Private Limited. All rights reserved.
      </div>
    </footer>
  );
}
