import Image from 'next/image';

export default function About() {
  return (
    <section  className=" py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" >

        {/* --- Header --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Fusing deep e-commerce expertise with the power of modern AI.
          </p>
        </div>

        {/* --- Main Content: Two-Column Layout --- */}
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-16 items-start">

          {/* --- Left Column: Image and Quote --- */}
          <figure className="w-full md:w-1/3 lg:w-2/5 flex-shrink-0 mb-8 md:mb-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/team_photo.png" // Ensure this path is correct
                alt="A member of our team with our office inspiration"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm italic">
              "Great technology is built by curious minds, often with a loyal friend by their side."
            </figcaption>
          </figure>

          {/* --- Right Column: Text Content --- */}
          <div className="w-full md:w-2/3 lg:w-3/5">
            <h2 className="text-3xl font-bold mb-4">
              Who We Are
            </h2>
            <p className="text-lg mb-6">
              We are a Bangalore-based software studio specializing in AI-enabled e-commerce. Our team brings over a decade of experience across SAP Hybris, Java, Spring, and modern headless systems with Next.js. We don't just build platforms; we architect intelligent solutions that drive growth and create exceptional user experiences.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              What We Do
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 font-bold text-sm">✓</div>
                <p>
                  <strong className="font-semibold">Hybris & Legacy Modernization:</strong> We transition your legacy platforms to efficient, scalable, and modern architectures.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 font-bold text-sm">✓</div>
                <p >
                  <strong className="font-semibold">Headless Storefronts with Next.js:</strong> We build blazing-fast, SEO-friendly, and highly customizable front-end experiences.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 font-bold text-sm">✓</div>
                <p >
                  <strong className="font-semibold">Cloud-Native Microservices:</strong> We architect and deploy resilient microservices on AWS, Azure, and GCP for ultimate agility.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 font-bold text-sm">✓</div>
                <p >
                  <strong className="font-semibold">AI-Powered Search & Personalization:</strong> We use advanced search, personalization, and RAG to transform product discovery.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
