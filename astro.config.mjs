import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    site: "https://enovalab.github.io",
    base: "/PowerMeter-App",
    integrations: [
        svelte()
    ]
});
