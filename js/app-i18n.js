/**
 * TR/EN — SITE_I18N window objesi js/i18n-data.js içinde tanımlanır
 */
(function () {
  function t(lang, key) {
    const L = window.SITE_I18N && window.SITE_I18N[lang];
    if (!L) return key;
    if (L[key] !== undefined && L[key] !== "") return L[key];
    const fb = window.SITE_I18N.tr && window.SITE_I18N.tr[key];
    return fb !== undefined ? fb : key;
  }

  function applyLang(lang) {
    if (!window.SITE_I18N) return;
    document.documentElement.lang = lang === "en" ? "en" : "tr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      var val = t(lang, key);
      if (el.tagName === "TITLE") {
        document.title = val;
        return;
      }
      el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = t(lang, key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      el.setAttribute("placeholder", t(lang, key));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (!key) return;
      el.setAttribute("alt", t(lang, key));
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (!key) return;
      el.setAttribute("title", t(lang, key));
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("lang-btn--active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try {
      localStorage.setItem("siteLang", lang);
    } catch (e) {}
  }

  function detectLang() {
    try {
      var stored = localStorage.getItem("siteLang");
      if (stored === "en" || stored === "tr") return stored;
    } catch (e) {}
    var nav = navigator.language || "";
    if (nav.toLowerCase().startsWith("en")) return "en";
    return "tr";
  }

  window.applySiteLang = applyLang;
  window.getSiteLang = function () {
    try {
      return localStorage.getItem("siteLang") || "tr";
    } catch (e) {
      return "tr";
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    var lang = detectLang();
    applyLang(lang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var l = btn.getAttribute("data-lang");
        if (l === "en" || l === "tr") applyLang(l);
      });
    });
  });
})();
