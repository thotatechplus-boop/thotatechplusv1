export const metadata = { title: "Services — THOTATECH+" };

export default function Services() {
  return (
    <section className="container py-12 space-y-10">
      <h1 className="text-3xl font-bold">Our Services</h1>

      <section id="ai" className="space-y-3">
        <h2 className="text-2xl font-semibold">AI Solutions</h2>
        <p className="text-neutral-300">AI-powered recommendations, chatbots for support, and analytics for growth.</p>
        <ul className="grid md:grid-cols-3 gap-4">
          <li className="card">Product recommendations & personalization</li>
          <li className="card">AI chat assistants & knowledge search</li>
          <li className="card">Fraud detection & anomaly monitoring</li>
        </ul>
      </section>

      <section id="ecommerce" className="space-y-3">
        <h2 className="text-2xl font-semibold">eCommerce Development</h2>
        <p className="text-neutral-300">SAP Hybris & Commerce Cloud, headless commerce with Next.js, secure payments.</p>
        <ul className="grid md:grid-cols-3 gap-4">
          <li className="card">Headless storefronts & composable commerce</li>
          <li className="card">Payment, OMS, search & promotions</li>
          <li className="card">Performance & SEO optimization</li>
        </ul>
      </section>

      <section id="cloud" className="space-y-3">
        <h2 className="text-2xl font-semibold">Cloud Services</h2>
        <p className="text-neutral-300">Cloud-native architecture, microservices, CI/CD and observability.</p>
        <ul className="grid md:grid-cols-3 gap-4">
          <li className="card">Kubernetes, Docker & IaC</li>
          <li className="card">Monitoring, tracing & logging</li>
          <li className="card">Cost optimization & SRE practices</li>
        </ul>
      </section>
    </section>
  );
}
