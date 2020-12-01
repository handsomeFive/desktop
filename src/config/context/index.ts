import React from "react"

export enum ETheme {
  dark = "dark",
  light = "light",
}

export enum ELanguage {
  cn = "cn",
  en = "en",
}

interface Context {
  type: string;
  [funcName: string]: any;
}

export const themes: ETheme[] = [ETheme.dark, ETheme.light]
export const languages: ELanguage[] = [ELanguage.cn, ELanguage.en]
export const theme: Context = {
  type: themes[0],
  toggleTheme: () => {},
}
export const language: Context = {
  type: languages[0],
  toggleLanguage: () => {},
}

export const ThemeCtx = React.createContext(theme)
export const LanguageCtx = React.createContext(language)
