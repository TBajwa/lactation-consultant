import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export function useSEO({ title, description, url = "https://www.thebreastfeedingwhisperer.com", image }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = `${title} | The Breastfeeding Whisperer`;

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", `${title} | The Breastfeeding Whisperer`);

    // OG Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", description);

    // JSON-LD
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "The Breastfeeding Whisperer",
      "description": "IBCLC lactation consultant offering in-home and virtual breastfeeding support in Central Florida.",
      "telephone": "+14078681569",
      "areaServed": "Central Florida",
      "url": "https://www.thebreastfeedingwhisperer.com",
      "sameAs": [
        "https://www.facebook.com/thebreastfeedingwhisperer",
        "https://www.instagram.com/thebreastfeedingwhisperer/"
      ],
      "priceRange": "$$",
      "serviceType": "Lactation Consultation"
    });

  }, [title, description, url, image]);
}
