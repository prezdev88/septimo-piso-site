/* Theme toggle — light / dark with system default + persistence.
   The pre-paint init lives inline in each page's <head> to avoid a flash;
   this file only wires up the button. */
(function () {
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function current() {
    var attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark" || attr === "light") return attr;
    return mq.matches ? "dark" : "light";
  }

  function sync() {
    var dark = current() === "dark";
    btn.setAttribute("aria-pressed", String(dark));
    btn.setAttribute(
      "aria-label",
      dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
    );
  }

  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    sync();
  });

  // Follow system changes while the user hasn't made an explicit choice.
  mq.addEventListener("change", function () {
    var stored;
    try {
      stored = localStorage.getItem("theme");
    } catch (e) {}
    if (stored !== "dark" && stored !== "light") sync();
  });

  sync();
})();
