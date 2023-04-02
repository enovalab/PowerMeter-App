import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

const deploy = false;

// https://astro.build/config
export default defineConfig({
    site: "https://enovalab.github.io",
    base: deploy ? "/PowerMeter-App" : "",
    integrations: [
        svelte()
    ]
});
