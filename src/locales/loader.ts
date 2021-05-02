/* eslint-disable import/prefer-default-export */
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

export function initialize() {
  register('en', () => import('./en.json'));
  register('uwu', () => import('./uwu.json'));
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });
}
