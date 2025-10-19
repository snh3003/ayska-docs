'use client'

import { Box, Text, Link, useTheme } from '@primer/react'
import Image from 'next/image'
import { THEME_CONSTANTS, COMMON_STYLES } from '@/lib/theme'

export function AyskaHero() {
  const { resolvedColorMode } = useTheme()
  
  const gradientColors = resolvedColorMode === 'day' 
    ? 'linear-gradient(135deg, #f6f8fa 0%, #eaeef2 100%)'  // Light mode
    : 'linear-gradient(135deg, #161b22 0%, #0d1117 100%)'  // Dark mode

  return (
    <Box
      sx={{
        background: gradientColors,
        padding: [4, 6, 8],
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '800px',
          width: '100%',
        }}
      >
        {/* Ayska Logo */}
        <Box
          sx={{
            marginBottom: 4,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/ayska-logo.png"
            alt="Ayska Logo"
            width={200}
            height={80}
            style={{
              objectFit: 'contain',
              maxHeight: '80px',
            }}
          />
        </Box>
        
        <Box
          as="h1"
          sx={{
            ...THEME_CONSTANTS.typography.heading.h1,
            color: 'fg.default',
            lineHeight: 1.2,
          }}
        >
          Field Activity Tracking Made Simple
        </Box>

        <Text
          sx={{
            ...THEME_CONSTANTS.typography.text.muted,
            fontSize: [2, 3],
            marginBottom: 5,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          A comprehensive React Native application built with TypeScript, following SOLID principles
          and modern development practices. Track field activities with ease and efficiency.
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
            View Documentation
          </Link>

          <Link
            href="https://github.com/snh3003/ayska-field-app"
            sx={{
              ...COMMON_STYLES.secondaryButton,
              display: 'inline-block',
            }}
          >
            View on GitHub
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
