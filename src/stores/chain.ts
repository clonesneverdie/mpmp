import { writable, Writable } from "svelte/store";

export const instance = writable();
export const signer = writable();
export const myAddress: Writable<string> = writable('');
export const myShortAddress: Writable<string> = writable('');
export const chainId: Writable<number> = writable(137);
export const isConnect: Writable<boolean> = writable(false);