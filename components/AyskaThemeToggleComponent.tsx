'use client'

import { IconButton, useTheme } from '@primer/react'
import { SunIcon, MoonIcon } from '@primer/octicons-react'
import { useEffect, useState } from 'react'

export function AyskaThemeToggle() {
  const { setColorMode, colorMode } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const toggleTheme = () => {
    setColorMode(colorMode === 'day' ? 'night' : 'day')
  }
  
  if (!mounted) {
    return (
      <IconButton
        icon={SunIcon}
        aria-label="Toggle theme"
        disabled
        sx={{
          minWidth: '44px',
          minHeight: '44px',
        }}
      />
    )
  }
  
  return (
    <IconButton
      icon={colorMode === 'day' ? MoonIcon : SunIcon}
      aria-label="Toggle theme"
      onClick={toggleTheme}
      sx={{
        minWidth: '44px',
        minHeight: '44px',
      }}
    />
  )
}
