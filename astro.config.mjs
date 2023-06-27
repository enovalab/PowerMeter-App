import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import serviceWorker from "astrojs-service-worker";

const deploy = true;

// https://astro.build/config
export default defineConfig({
    site: "http://enovalab.github.io",
    base: deploy ? "/PowerMeter-App" : "",
    integrations: [
        serviceWorker(),
        svelte()
    ]
});
