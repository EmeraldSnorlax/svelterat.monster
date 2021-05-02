/* eslint-disable import/prefer-default-export */
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

export function initialize() {
  register('en-GB', () => import('./en-GB'));
  register('en-US', () => import('./en-US'));
  register('pt-BR', () => import('./pt-BR'));
  register('uwu', () => import('./uwu'));

  init({
    fallbackLocale: 'en-GB',
    initialLocale: getLocaleFromNavigator(),
  });
}
