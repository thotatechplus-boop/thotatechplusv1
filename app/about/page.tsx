export default function About() {
  return (
    <section className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">About THOTATECH+</h1>
      <p>
        We are a Bangalore-based software studio specializing in AI-enabled e-commerce. Our team brings 10+ years across
        SAP Hybris, Java, Spring, and modern headless systems with Next.js.
      </p>
      <ul className="list-disc pl-6 text-neutral-300">
        <li>Hybris & legacy commerce modernization</li>
        <li>Headless storefronts with Next.js</li>
        <li>Cloud-native microservices on AWS/Azure/GCP</li>
        <li>Search, personalization and RAG over product catalogs</li>
      </ul>
    </section>
  );
}
