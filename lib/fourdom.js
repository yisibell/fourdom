const u = (t, s) => {
  const n = (t.getAttribute("style") || "").split(";").filter((e) => !!e.trim()).reduce((e, c) => {
    const i = c.split(":").map((d) => d.trim()), a = i[0], y = i[1];
    return e[a] = y, e;
  }, {}), r = Object.assign(n, s), l = Object.keys(r).filter((e) => !!e.trim()).reduce((e, c) => (e += `${c}: ${r[c]};`, e), "");
  t.setAttribute("style", l);
}, f = (t) => {
  t && t.parentNode && t.parentNode.removeChild(t);
}, v = (t, s) => t.classList.contains(s), b = (t, s) => {
  const o = typeof s == "string" ? [s] : s;
  t.classList.add(...o);
}, g = (t, s) => {
  const o = typeof s == "string" ? [s] : s;
  t.classList.remove(...o);
};
export {
  b as addClass,
  u as css,
  v as hasClass,
  g as removeClass,
  f as removeElement
};
