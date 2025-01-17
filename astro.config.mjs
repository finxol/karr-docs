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
                    label: "Getting Started",
                    items: [
                        {
                            label: "Setup",
                            link: "/getting-started/setup",
                        },
                    ],
                },
                {
                    label: "Development",
                    items: [
                        {
                            label: "Getting Started",
                            link: "/development/getting-started",
                        },
                        {
                            label: "API",
                            autogenerate: { directory: "development/api" },
                        },
                        {
                            label: "Web",
                            autogenerate: { directory: "development/web" },
                        },
                        {
                            label: "Packages",
                            autogenerate: { directory: "development/packages" },
                        },
                        {
                            label: "API reference",
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
