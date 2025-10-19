'use client'

import { IconButton, useTheme } from '@primer/react'
import { SunIcon, MoonIcon } from '@primer/octicons-react'

export function AyskaThemeToggle() {
  const { setColorMode, resolvedColorMode } = useTheme()
  
  const toggleTheme = () => {
    // Always toggle between day and night explicitly
    const newMode = resolvedColorMode === 'day' ? 'night' : 'day'
    setColorMode(newMode)
    
    // Persist the choice in localStorage
    localStorage.setItem('primer-color-mode', newMode)
  }
  
  return (
    <IconButton
      icon={resolvedColorMode === 'day' ? MoonIcon : SunIcon}
      aria-label="Toggle theme"
      onClick={toggleTheme}
      sx={{
        minWidth: '44px',
        minHeight: '44px',
        border: '1px solid',
        borderColor: 'border.default',
        backgroundColor: 'canvas.subtle',
        '&:hover': {
          backgroundColor: 'canvas.default',
          borderColor: 'accent.emphasis',
        },
      }}
    />
  )
}
