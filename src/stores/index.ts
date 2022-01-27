import { writable, Writable } from "svelte/store";

export const navMenu: Writable<boolean> = writable(false);
export const userInfoMenu: Writable<boolean> = writable(false);

export const navSet = () => {
  navMenu.set(!navMenu)
}