import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import serviceWorker from "astrojs-service-worker";

// https://astro.build/config
export default defineConfig({
    site: "https://enovalab.github.io",
    integrations: [
        // serviceWorker(),
        svelte()
    ]
});
