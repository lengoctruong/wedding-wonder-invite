export function getShareUrl() {
  const base = "https://lengoctruong.github.io/wedding-wonder-invite/";
  const v = import.meta.env.VITE_BUILD_ID || Date.now().toString();
  // append ?v=xxx để buộc platform rescrape khi share riêng tư
  return `${base}?v=${encodeURIComponent(v)}`;
}
