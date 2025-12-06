module.exports = {
title: "Physical AI & Humanoid Robotics",
  tagline: "Hackathon Textbook Project",
  url: "https://mehakhamid.github.io",  // ← Your GitHub Pages URL
  baseUrl: "/Physical-AI-Humanoid-Robotics-Textbook-MH/",  // ← Repository name
  organizationName: "MehakHamid",  // ← Your GitHub username
  projectName: "Physical-AI-Humanoid-Robotics-Textbook-MH",  // ← Repository name
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Physical AI Textbook",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Textbook",
        },
        {
          to: "/ai-assistant",
          label: "AI Assistant",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: "Copyright © 2024 Physical AI Textbook",
    },
  },
};
