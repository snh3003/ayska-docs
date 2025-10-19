import { Box, Text, Link, IconButton } from '@primer/react'
import { MarkGithubIcon, SunIcon, MoonIcon } from '@primer/octicons-react'
import Image from 'next/image'
import { AyskaThemeToggle } from '@/components/AyskaThemeToggleComponent'
import { AyskaHero } from '@/components/landing/AyskaHeroComponent'
import { AyskaFeatures } from '@/components/landing/AyskaFeaturesComponent'
import { AyskaCTA } from '@/components/landing/AyskaCTAComponent'

export default function Home() {
  return (
    <>
      {/* Simple Header with Navigation */}
      <Box
        sx={{
          backgroundColor: 'canvas.default',
          borderBottom: '1px solid',
          borderBottomColor: 'border.default',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: [2, 3],
            maxWidth: '1200px',
            mx: 'auto',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            sx={{
              textDecoration: 'none',
              color: 'fg.default',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Image
              src="/ayska-logo.png"
              alt="Ayska Logo"
              width={120}
              height={40}
              style={{
                objectFit: 'contain',
                maxHeight: '40px',
              }}
            />
          </Link>
          
          {/* Navigation */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Link
              href="/docs"
              sx={{
                textDecoration: 'none',
                color: 'fg.default',
                fontSize: 2,
                '&:hover': {
                  color: 'accent.fg',
                },
              }}
            >
              Docs
            </Link>
            
            <Link
              href="https://github.com/snh3003/ayska-field-app"
              sx={{
                textDecoration: 'none',
                color: 'fg.default',
                fontSize: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  color: 'accent.fg',
                },
              }}
            >
              <MarkGithubIcon size={16} />
              GitHub
            </Link>
            
            <AyskaThemeToggle />
          </Box>
        </Box>
      </Box>
      
      <AyskaHero />
      <AyskaFeatures />
      <AyskaCTA />
    </>
  )
}
