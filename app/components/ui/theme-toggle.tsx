"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { IoMoon } from "@react-icons/all-files/io5/IoMoon"
import { IoSunny } from "@react-icons/all-files/io5/IoSunny"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-3 box-content mainTextColor hover:primaryTextColor transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <IoMoon size={24} />
      ) : (
        <IoSunny size={24} />
      )}
    </button>
  )
}
