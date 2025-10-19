'use client'

import { useState } from 'react'
import { Header, Box, Text, Link, IconButton } from '@primer/react'
import { MarkGithubIcon, ThreeBarsIcon, XIcon } from '@primer/octicons-react'
import { AyskaThemeToggle } from '@/components/AyskaThemeToggleComponent'

export function AyskaMainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  
  return (
    <Header
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
          <Text
            sx={{
              fontSize: [3, 4],
              fontWeight: 'bold',
              fontFamily: 'mono',
            }}
          >
            AYSKA
          </Text>
        </Link>
        
        {/* Desktop Navigation */}
        <Box
          sx={{
            display: ['none', 'flex'],
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Link
            href="/"
            sx={{
              textDecoration: 'none',
              color: 'fg.default',
              fontSize: 2,
              '&:hover': {
                color: 'accent.fg',
              },
            }}
          >
            Home
          </Link>
          
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
        
        {/* Mobile Menu Button */}
        <Box
          sx={{
            display: ['flex', 'none'],
            alignItems: 'center',
            gap: 2,
          }}
        >
          <AyskaThemeToggle />
          <IconButton
            icon={mobileMenuOpen ? XIcon : ThreeBarsIcon}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMobileMenu}
            sx={{
              minWidth: '44px',
              minHeight: '44px',
            }}
          />
        </Box>
      </Box>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <Box
          sx={{
            display: ['block', 'none'],
            backgroundColor: 'canvas.subtle',
            borderTop: '1px solid',
            borderTopColor: 'border.default',
            padding: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              maxWidth: '1200px',
              mx: 'auto',
            }}
          >
            <Link
              href="/"
              sx={{
                textDecoration: 'none',
                color: 'fg.default',
                fontSize: 2,
                padding: 2,
                '&:hover': {
                  color: 'accent.fg',
                  backgroundColor: 'canvas.default',
                  borderRadius: 2,
                },
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link
              href="/docs"
              sx={{
                textDecoration: 'none',
                color: 'fg.default',
                fontSize: 2,
                padding: 2,
                '&:hover': {
                  color: 'accent.fg',
                  backgroundColor: 'canvas.default',
                  borderRadius: 2,
                },
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            
            <Link
              href="https://github.com/snh3003/ayska-field-app"
              sx={{
                textDecoration: 'none',
                color: 'fg.default',
                fontSize: 2,
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  color: 'accent.fg',
                  backgroundColor: 'canvas.default',
                  borderRadius: 2,
                },
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <MarkGithubIcon size={16} />
              GitHub
            </Link>
          </Box>
        </Box>
      )}
    </Header>
  )
}
