import {InjectionToken} from '@angular/core';

export type TranslationTokenType = [string, string[]][];

export const TRANSLATION_TOKEN = new InjectionToken<TranslationTokenType>(
  'TRANSLATION_TOKEN');

export const TRANSLATION_FILES: TranslationTokenType = [
  ['de', [`/assets/i18n/de.json`]],
  ['en', [`/assets/i18n/en.json`]],
  ['fr', [`/assets/i18n/fr.json`]],
  ['it', [`/assets/i18n/it.json`]]
];
