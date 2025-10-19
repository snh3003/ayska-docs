'use client'

import { useState } from 'react'
import { Box, Text, Link, IconButton } from '@primer/react'
import { MarkGithubIcon, ThreeBarsIcon, XIcon } from '@primer/octicons-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

const AyskaThemeToggle = dynamic(() => import('@/components/AyskaThemeToggleComponent').then(mod => ({ default: mod.AyskaThemeToggle })), {
  ssr: false,
  loading: () => (
    <div
      style={{
        minWidth: '44px',
        minHeight: '44px',
        border: '1px solid var(--color-border-default)',
        backgroundColor: 'var(--color-canvas-subtle)',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  ),
})
// Note: getAllDocs is server-side only, we'll use a static list for client-side
import { THEME_CONSTANTS, COMMON_STYLES } from '@/lib/theme'

// Static docs list for client-side use
const docsList = [
  { slug: 'project-setup-guide', title: 'Project Setup Guide', description: 'Complete guide to setting up the Ayska Field App development environment', order: 1 },
  { slug: 'dev-guide', title: 'Developer Guide', description: 'Comprehensive guide for developing the Ayska Field App', order: 2 },
  { slug: 'data-flow-guide', title: 'Data Flow Guide', description: 'Understanding data flow in the Ayska Field App', order: 3 },
  { slug: 'design-patterns-guide', title: 'Design Patterns Guide', description: 'Design patterns and architectural decisions', order: 4 },
  { slug: 'api-specification', title: 'API Specification', description: 'Complete API documentation and specifications', order: 5 },
  { slug: 'ui-best-practices', title: 'UI Best Practices', description: 'UI guidelines and best practices', order: 6 },
]

export function AyskaUnifiedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const isDocsPage = pathname.startsWith('/docs')
  const currentDocSlug = pathname.split('/').pop()

  return (
    <Box sx={COMMON_STYLES.stickyHeader}>
      <Box sx={COMMON_STYLES.container}>
        <Box sx={COMMON_STYLES.flexBetween}>
          {/* Logo */}
          <Link
            href="/"
            sx={{
              ...COMMON_STYLES.navLink,
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
                ...COMMON_STYLES.navLink,
                color: pathname === '/' ? THEME_CONSTANTS.navigation.activeColor : THEME_CONSTANTS.navigation.linkColor,
                fontWeight: pathname === '/' ? 'bold' : 'normal',
              }}
            >
              Home
            </Link>
            
            {/* Docs Link */}
            <Link
              href="/docs"
              sx={{
                ...COMMON_STYLES.navLink,
                color: isDocsPage ? THEME_CONSTANTS.navigation.activeColor : THEME_CONSTANTS.navigation.linkColor,
                fontWeight: isDocsPage ? 'bold' : 'normal',
              }}
            >
              Docs
            </Link>
            
            <Link
              href="https://github.com/snh3003/ayska-field-app"
              sx={{
                ...COMMON_STYLES.navLink,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
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
              maxWidth: THEME_CONSTANTS.layout.maxWidth,
              margin: '0 auto',
            }}
          >
            <Link
              href="/"
              sx={{
                ...COMMON_STYLES.navLink,
                padding: 2,
                color: pathname === '/' ? THEME_CONSTANTS.navigation.activeColor : THEME_CONSTANTS.navigation.linkColor,
                fontWeight: pathname === '/' ? 'bold' : 'normal',
                '&:hover': {
                  color: THEME_CONSTANTS.navigation.hoverColor,
                  backgroundColor: 'canvas.default',
                  borderRadius: 2,
                },
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <Box>
              <Text
                sx={{
                  fontSize: 2,
                  fontWeight: 'bold',
                  color: 'fg.muted',
                  marginBottom: 2,
                  paddingLeft: 2,
                }}
              >
                Documentation
              </Text>
              
              <Link
                href="/docs"
                sx={{
                  ...COMMON_STYLES.navLink,
                  padding: 2,
                  display: 'block',
                  color: pathname === '/docs' ? THEME_CONSTANTS.navigation.activeColor : THEME_CONSTANTS.navigation.linkColor,
                  fontWeight: pathname === '/docs' ? 'bold' : 'normal',
                  '&:hover': {
                    color: THEME_CONSTANTS.navigation.hoverColor,
                    backgroundColor: 'canvas.default',
                    borderRadius: 2,
                  },
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Overview
              </Link>
              
              {docsList.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  sx={{
                    ...COMMON_STYLES.navLink,
                    padding: 2,
                    display: 'block',
                    paddingLeft: 4,
                    color: currentDocSlug === doc.slug ? THEME_CONSTANTS.navigation.activeColor : THEME_CONSTANTS.navigation.linkColor,
                    fontWeight: currentDocSlug === doc.slug ? 'bold' : 'normal',
                    '&:hover': {
                      color: THEME_CONSTANTS.navigation.hoverColor,
                      backgroundColor: 'canvas.default',
                      borderRadius: 2,
                    },
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {doc.title}
                </Link>
              ))}
            </Box>
            
            <Link
              href="https://github.com/snh3003/ayska-field-app"
              sx={{
                ...COMMON_STYLES.navLink,
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  color: THEME_CONSTANTS.navigation.hoverColor,
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
    </Box>
  )
}
