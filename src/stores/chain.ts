import { writable } from "svelte/store";

export const myAddress = writable('');
export const isConnect = writable(false);