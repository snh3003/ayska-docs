'use client'

import { Box, Text, Link, useTheme } from '@primer/react'
import { THEME_CONSTANTS, COMMON_STYLES } from '@/lib/theme'

export function AyskaCTA() {
  const { resolvedColorMode } = useTheme()
  
  const backgroundColor = resolvedColorMode === 'day'
    ? '#ddf4ff'  // Light blue in light mode
    : '#0d1117'  // Dark background in dark mode

  return (
    <Box
      sx={{
        padding: [4, 6, 8],
        backgroundColor: backgroundColor,
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '600px',
          mx: 'auto',
        }}
      >
        <Box
          as="h2"
          sx={{
            ...THEME_CONSTANTS.typography.heading.h2,
            marginBottom: 3,
            color: 'fg.default',
          }}
        >
          Ready to Explore?
        </Box>
        
        <Text
          sx={{
            ...THEME_CONSTANTS.typography.text.muted,
            fontSize: [2, 3],
            marginBottom: 5,
          }}
        >
          Dive into our comprehensive documentation and start building with Ayska today.
        </Text>
        
        <Box
          sx={{
            ...COMMON_STYLES.responsiveDisplay,
            gap: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link
            href="/docs"
            sx={{
              ...COMMON_STYLES.primaryButton,
              display: 'inline-block',
            }}
          >
            Get Started
          </Link>
          
          <Link
            href="https://github.com/snh3003/ayska-field-app"
            sx={{
              fontSize: 2,
              color: 'accent.fg',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            View Source Code →
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
