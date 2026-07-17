import { useEffect } from "react";

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonical, 
  image,
  schema 
}) {
  useEffect(() => {
    document.title = title || "MBBS in Vietnam | VietnamBBS";

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };

    const setOG = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", property); document.head.appendChild(el); }
      el.content = content;
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) { el = document.createElement("link"); el.rel = rel; document.head.appendChild(el); }
      el.href = href;
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", "index, follow");
    setMeta("author", "VietnamBBS");

    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:url", canonical || window.location.href);
    setOG("og:type", "website");
    setOG("og:site_name", "MBBS in Vietnam - VietnamBBS");
    setOG("og:image", image || "https://www.vietnambbs.com/logo.png");

    setLink("canonical", canonical || window.location.href);

    // ✅ JSON-LD Structured Data
    if (schema) {
      let script = document.querySelector("#json-ld-schema");
      if (!script) {
        script = document.createElement("script");
        script.id = "json-ld-schema";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

}, [title, description, keywords, canonical, image, JSON.stringify(schema)]);

  return null;
}