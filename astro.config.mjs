// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Karr Docs",
            logo: {
                src: "./src/assets/logo_tmp.jpg",
            },
            social: {
                github: "https://github.com/finxol/karr",
            },
            sidebar: [
                {
                    label: "Glossary",
                    link: "/glossary",
                },
                {
                    label: "Getting Started",
                    items: [
                        {
                            label: "Setup a new instance",
                            link: "/getting-started/setup",
                        },
                    ],
                },
                {
                    label: "Development",
                    collapsed: true,
                    items: [
                        {
                            label: "Getting Started",
                            link: "/development/getting-started",
                        },
                        {
                            label: "Project Structure",
                            link: "/development/project-structure",
                        },
                        {
                            label: "Configuration",
                            link: "/development/configuration",
                        },
                        {
                            label: "Web",
                            collapsed: true,
                            autogenerate: { directory: "development/web" },
                        },
                        {
                            label: "API",
                            collapsed: true,
                            autogenerate: { directory: "development/api" },
                        },
                        {
                            label: "Packages",
                            collapsed: false,
                            autogenerate: { directory: "development/packages" },
                        },
                        {
                            label: "API reference",
                            collapsed: true,
                            autogenerate: {
                                directory: "development/api-reference",
                            },
                        },
                    ],
                },
            ],
            customCss: [
                // Path to your Tailwind base styles:
                "./src/tailwind.css",
            ],
        }),
        tailwind({
            // Disable the default base styles:
            applyBaseStyles: false,
        }),
    ],
});
