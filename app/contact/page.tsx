export default function Contact() {
  return (
    <section className="container py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-neutral-300">We usually respond within one business day.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <form className="grid gap-4" action="https://formspree.io/f/mrbldpkv" method="POST">
          <input className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-2" name="name" placeholder="Your name" required />
          <input className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-2" name="email" type="email" placeholder="Your email" required />
          <textarea className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-2" name="message" rows={6} placeholder="How can we help?" required />
          <button className="btn w-fit" type="submit">Send Message</button>
        </form>

        <div className="space-y-3">
          <div className="rounded-2xl overflow-hidden border border-neutral-800">
            <iframe
              title="Thotatech+ Location"
              src="https://www.google.com/maps?q=103,+4th+Cross,+Ayyappa+Layout,+Munne+Kolla,+Marathahalli,+Bangalore+560037&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
