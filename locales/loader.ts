/* eslint-disable import/prefer-default-export */
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

export function initialize() {
  register('en-GB', () => import('./en-GB'));
  register('en-US', () => import('./en-US'));
  register('de-DE', () => import('./de-DE'));
  register('pt-BR', () => import('./pt-BR'));
  register('ru-RU', () => import('./ru-RU'));
  register('uwu', () => import('./uwu'));

  init({
    fallbackLocale: 'en-GB',
    initialLocale: getLocaleFromNavigator(),
  });
}
