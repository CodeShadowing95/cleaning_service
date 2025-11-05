export function setPageMeta({ title, description, canonical }) {
  if (typeof document === 'undefined') return;

  // Title
  if (title) {
    document.title = title;
  }

  // Meta description
  if (description) {
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', description);
  }

  // Canonical
  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
  }

  // Basic OG updates (SPA only)
  if (title) {
    ensureOg('og:title', title);
  }
  if (description) {
    ensureOg('og:description', description);
  }
}

function ensureOg(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}