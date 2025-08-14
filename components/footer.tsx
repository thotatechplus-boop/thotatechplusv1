export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black/40">
      <div className="container grid md:grid-cols-3 gap-6 py-8 text-sm">
        <div>
          <div className="font-semibold mb-2">THOTATECH+ Software Pvt. Ltd.</div>
          <p>AI-first commerce engineering. We build cloud-native, headless, data-driven solutions.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p>operations@thotatechplus.com</p>
          <p>+91 9886187188</p>
          <p>103, 4th Cross, Ayyappa Layout, Munne Kolla,<br/> Marathahalli, Bangalore - 560037</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow</div>
          <p><a href="https://www.linkedin.com/company/thotatechplus-software-pvt-ltd" target="_blank">LinkedIn</a></p>
          <p><a href="https://www.facebook.com/profile.php?id=61579189360112" target="_blank">Facebook</a></p>
          <p><a href="https://x.com/thotatechp4865" target="_blank">Twitter/X</a></p>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 pb-6">© {new Date().getFullYear()} THOTATECH+ Software Private Limited. All rights reserved.</div>
    </footer>
  );
}
