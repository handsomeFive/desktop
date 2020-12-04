import React, { useState } from "react"
import {
  theme,
  language,
  LanguageCtx,
  ThemeCtx,
  ETheme,
  ELanguage,
} from "@/config/context/global"
import Desktop from "@/pages/desktop"

export default function App() {
  const [themeValue, toggleTheme] = useState<ETheme>(theme.type as ETheme)
  const [languageValue, toggleLanguage] = useState<ELanguage>(
    language.type as ELanguage
  )

  return (
    <ThemeCtx.Provider value={{ type: themeValue, toggleTheme }}>
      <LanguageCtx.Provider value={{ type: languageValue, toggleLanguage }}>
        <Desktop />
      </LanguageCtx.Provider>
    </ThemeCtx.Provider>
  )
}
