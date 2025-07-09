"use client"

import { createContext, useContext, useMemo } from "react"

interface ThemeContextType {
  primaryColor: string
  secondaryColor: string
  accentColor: string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useMemo(() => ({
    primaryColor: "#FFD600",
    secondaryColor: "#FF6B35", 
    accentColor: "#FF8C42"
  }), [])

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
