import { persisted } from "svelte-local-storage-store";

export const devices = persisted("devices", []);