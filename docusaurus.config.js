module.exports = {
  title: "Physical AI & Humanoid Robotics",
  tagline: "Hackathon Textbook Project",
  url: "https://example.com",
  baseUrl: "/",
  organizationName: "hackathon",
  projectName: "physical-ai-textbook",
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
      ],
    },
    footer: {
      style: "dark",
      copyright: "Copyright © 2024 Physical AI Textbook - Hackathon Project",
    },
  },
}