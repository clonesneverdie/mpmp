import { writable } from "svelte/store";

export const instance: any = writable();
export const signer = writable();
export const myAddress = writable('');
export const chainId = writable(137);
export const isConnect = writable(false);