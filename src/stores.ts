/* eslint-disable import/prefer-default-export */
import { writable } from 'svelte/store';

export const clickthrough = writable(false);
export const step = writable(1);
