import { Box, Text, Link } from '@primer/react'
import Image from 'next/image'

export function AyskaHero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f6f8fa 0%, #e1e4e8 100%)',
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
            fontSize: [4, 5, 6],
            fontWeight: 'bold',
            color: 'fg.default',
            marginBottom: 3,
            lineHeight: 1.2,
          }}
        >
          Field Activity Tracking Made Simple
        </Box>
        
        <Text
          sx={{
            fontSize: [2, 3],
            color: 'fg.muted',
            marginBottom: 5,
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          A comprehensive React Native application built with TypeScript, following SOLID principles 
          and modern development practices. Track field activities with ease and efficiency.
        </Text>
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            gap: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link
            href="/docs"
            sx={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: 'accent.emphasis',
              color: 'accent.fg',
              textDecoration: 'none',
              borderRadius: 2,
              fontWeight: 'bold',
              minWidth: ['200px', '180px'],
              minHeight: '44px',
              textAlign: 'center',
              '&:hover': {
                backgroundColor: 'accent.fg',
                color: 'accent.subtle',
              },
            }}
          >
            View Documentation
          </Link>
          
          <Link
            href="https://github.com/snh3003/ayska-field-app"
            sx={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: 'transparent',
              color: 'fg.default',
              textDecoration: 'none',
              borderRadius: 2,
              fontWeight: 'bold',
              border: '1px solid',
              borderColor: 'border.default',
              minWidth: ['200px', '180px'],
              minHeight: '44px',
              textAlign: 'center',
              '&:hover': {
                backgroundColor: 'canvas.subtle',
                borderColor: 'accent.emphasis',
              },
            }}
          >
            View on GitHub
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
