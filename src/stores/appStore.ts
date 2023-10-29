import { writable, type Writable } from "svelte/store";

export const drawerOpen: Writable<boolean> = writable(false);
