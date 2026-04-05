import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

const BASE_URL = "https://www.thebreastfeedingwhisperer.com";
const DEFAULT_IMAGE = `${BASE_URL}/opengraph.jpg`;

function setMeta(selector: string, attr: string, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    const [attrName, attrValue] = attr.split("=");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSEO({
  title,
  description,
  url,
  image,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | The Breastfeeding Whisperer`;
    const canonicalUrl = url ? `${BASE_URL}${url}` : BASE_URL;
    const ogImage = image || DEFAULT_IMAGE;

    document.title = fullTitle;

    setMeta('meta[name="description"]', 'name=description', description);

    setMeta('meta[property="og:title"]', 'property=og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property=og:description', description);
    setMeta('meta[property="og:url"]', 'property=og:url', canonicalUrl);
    setMeta('meta[property="og:image"]', 'property=og:image', ogImage);
    setMeta('meta[property="og:type"]', 'property=og:type', "website");
    setMeta('meta[property="og:site_name"]', 'property=og:site_name', "The Breastfeeding Whisperer");

    setMeta('meta[name="twitter:card"]', 'name=twitter:card', "summary_large_image");
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name=twitter:image', ogImage);

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
      "url": BASE_URL,
      "sameAs": [
        "https://www.facebook.com/thebreastfeedingwhisperer",
        "https://www.instagram.com/thebreastfeedingwhisperer/",
      ],
      "priceRange": "$$",
      "serviceType": "Lactation Consultation",
    });
  }, [title, description, url, image]);
}
