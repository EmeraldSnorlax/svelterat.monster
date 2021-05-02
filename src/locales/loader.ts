/* eslint-disable import/prefer-default-export */
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

export function initialize() {
  register('en-GB', () => import('./en-GB.json'));
  register('en-US', () => import('./en-US.json'));
  register('uwu', () => import('./uwu.json'));
  init({
    fallbackLocale: 'en-GB',
    initialLocale: getLocaleFromNavigator(),
  });
}
