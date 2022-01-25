import { writable } from "svelte/store";

export const myAddress = writable('');
export const signer = writable();
export const isConnect = writable(false);