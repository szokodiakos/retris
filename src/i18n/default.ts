export type Translations = typeof defaultTranslations

export type TranslationKey = keyof Translations

export const defaultTranslations = {
  "display.waiting.header.line1": "Take out your phone and go to {{url}}.",
  "display.waiting.header.line2": "This screen will turn into a Tetris matrix.",
}
