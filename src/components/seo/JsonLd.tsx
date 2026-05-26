import { siteConfig } from "@/lib/site-metadata";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description:
      "KEYRA eSIM — trusted global connectivity with deterministic identity and telecom-grade provisioning.",
    publisher: {
      "@type": "Organization",
      name: "KEYRA",
      url: siteConfig.parentUrl,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/developers?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "KEYRA eSIM",
    description: siteConfig.tagline,
    brand: { "@type": "Brand", name: "KEYRA" },
    category: "Telecommunications",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
    </>
  );
}
