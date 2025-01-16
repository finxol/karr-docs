// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

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
                    label: "Guides",
                    autogenerate: { directory: "guides" },
                },
                {
                    label: "API",
                    autogenerate: { directory: "api" },
                },
            ],
        }),
    ],
});
