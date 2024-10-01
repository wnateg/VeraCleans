import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "VeraCleans",
  tagline: "Pure Clean, Naturally Green.",
  description: "Vera Cleans provides eco-friendly house cleaning with natural, plant-based products, ensuring a safe and healthy home. Our green cleaning approach protects your family and the environment while delivering a sparkling clean you can trust.",
  description_short: "Vera Cleans offers natural, eco-friendly house cleaning services using plant-based products, creating a healthier home for you and the environment.",
  url: "https://veracleans.com",
  author: "Layla-Vera",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Home Cleaning Services`,
  description: SITE.description,
  image: ogImageSrc,
};
