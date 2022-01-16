import { writable } from "svelte/store";

export const navMenu = writable(false);

export const navSet = () => {
  navMenu.set(!navMenu)
}