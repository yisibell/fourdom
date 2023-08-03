function m(s, l) {
  const n = (s.getAttribute("style") || "").split(";").filter((t) => !!t.trim()).reduce((t, e) => {
    const i = e.split(":").map((u) => u.trim()), o = i[0], y = i[1];
    return t[o] = y, t;
  }, {}), c = Object.assign(n, l), r = Object.keys(c).filter((t) => !!t.trim()).reduce((t, e) => (t += `${e}: ${c[e]};`, t), "");
  s.setAttribute("style", r);
}
export {
  m as css
};
