const translations = {
  en: {
    "nav.github": "GitHub",
    "hero.title": "Prioritize what matters.",
    "hero.subtitle": "A clean, offline-first task manager built on the Eisenhower Matrix. Free and open source.",
    "hero.cta": "Download — Free",
    "mockup.q1": "Urgent & Important",
    "mockup.q2": "Important, Not Urgent",
    "mockup.q3": "Urgent, Not Important",
    "mockup.q4": "Eliminate",
    "mockup.t1a": "Send quarterly report",
    "mockup.t1b": "Fix critical bug",
    "mockup.t2a": "Learn new skills",
    "mockup.t2b": "Weekly workout",
    "mockup.t3a": "Return call",
    "mockup.t4a": "Browse social media",
    "features.title": "Simple. Focused. Yours.",
    "features.matrix.title": "Eisenhower Matrix",
    "features.matrix.desc": "Organize tasks across 4 quadrants to always focus on what truly matters, not just what's urgent.",
    "features.offline.title": "Fully Offline",
    "features.offline.desc": "No account, no server, no subscription. Your tasks are stored locally on your machine.",
    "features.open.title": "Open Source",
    "features.open.desc": "MIT licensed. Free to use, free to inspect, free to modify. No hidden fees, ever.",
    "features.multilang.title": "Multilingual",
    "features.multilang.desc": "Available in English, French, Spanish and German. Switch language in one click.",
    "download.title": "Download EisenApp",
    "download.subtitle": "Available for macOS, Windows and Linux.",
    "download.macos_arm": "macOS Apple Silicon",
    "download.macos_intel": "macOS Intel",
    "download.windows": "Windows",
    "download.linux": "Linux",
    "download.dmg": ".dmg",
    "download.exe": ".exe",
    "download.appimage": ".AppImage",
    "download.unsigned_title": "The app is not signed",
    "download.unsigned_macos": "On macOS: right-click the app → Open, or run <code>xattr -cr \"/Applications/EisenApp.app\"</code> in Terminal.",
    "download.unsigned_windows": "On Windows: click \"More info\" then \"Run anyway\" in the SmartScreen dialog.",
    "support.title": "Support the project",
    "support.desc": "EisenApp is and will always be free. If it's useful to you, you can support its development.",
    "support.btn": "Buy me a coffee",
    "footer.source": "Source code on GitHub",
    "footer.license": "MIT License",
  },
  fr: {
    "nav.github": "GitHub",
    "hero.title": "Priorisez ce qui compte.",
    "hero.subtitle": "Un gestionnaire de tâches épuré, basé sur la matrice d'Eisenhower. Gratuit et open source.",
    "hero.cta": "Télécharger — Gratuit",
    "mockup.q1": "Urgent & Important",
    "mockup.q2": "Important, Pas urgent",
    "mockup.q3": "Urgent, Pas important",
    "mockup.q4": "Éliminer",
    "mockup.t1a": "Envoyer le rapport trimestriel",
    "mockup.t1b": "Corriger le bug critique",
    "mockup.t2a": "Apprendre de nouvelles compétences",
    "mockup.t2b": "Séance de sport hebdo",
    "mockup.t3a": "Rappeler le client",
    "mockup.t4a": "Réseaux sociaux",
    "features.title": "Simple. Focalisé. À vous.",
    "features.matrix.title": "Matrice d'Eisenhower",
    "features.matrix.desc": "Organisez vos tâches en 4 quadrants pour toujours vous concentrer sur ce qui compte vraiment.",
    "features.offline.title": "100 % hors ligne",
    "features.offline.desc": "Pas de compte, pas de serveur, pas d'abonnement. Vos tâches sont stockées localement.",
    "features.open.title": "Open Source",
    "features.open.desc": "Licence MIT. Libre d'utilisation, d'inspection et de modification. Sans frais cachés.",
    "features.multilang.title": "Multilingue",
    "features.multilang.desc": "Disponible en français, anglais, espagnol et allemand. Changez de langue en un clic.",
    "download.title": "Télécharger EisenApp",
    "download.subtitle": "Disponible sur macOS, Windows et Linux.",
    "download.macos_arm": "macOS Apple Silicon",
    "download.macos_intel": "macOS Intel",
    "download.windows": "Windows",
    "download.linux": "Linux",
    "download.dmg": ".dmg",
    "download.exe": ".exe",
    "download.appimage": ".AppImage",
    "download.unsigned_title": "L'application n'est pas signée",
    "download.unsigned_macos": "Sur macOS : clic droit sur l'app → Ouvrir, ou exécutez <code>xattr -cr \"/Applications/EisenApp.app\"</code> dans le Terminal.",
    "download.unsigned_windows": "Sur Windows : cliquez \"Plus d'informations\" puis \"Exécuter quand même\" dans SmartScreen.",
    "support.title": "Soutenir le projet",
    "support.desc": "EisenApp est et restera toujours gratuit. S'il vous est utile, vous pouvez soutenir son développement.",
    "support.btn": "Offrir un café",
    "footer.source": "Code source sur GitHub",
    "footer.license": "Licence MIT",
  },
};

let currentLang = "en";

function detectLang() {
  const saved = localStorage.getItem("eisenapp-lang");
  if (saved && translations[saved]) return saved;
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  return translations[browser] ? browser : "en";
}

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem("eisenapp-lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(detectLang());

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
  });
});
