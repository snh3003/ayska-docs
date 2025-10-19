'use client'

import { SideNav, Box, Text } from '@primer/react'
import { usePathname } from 'next/navigation'
import { THEME_CONSTANTS, COMMON_STYLES } from '@/lib/theme'

const docStructure = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Project Setup Guide', slug: 'project-setup-guide' }
    ]
  },
  {
    title: 'Development',
    items: [
      { title: 'Dev Guide', slug: 'dev-guide' },
      { title: 'Data Flow Guide', slug: 'data-flow-guide' },
      { title: 'Design Patterns Guide', slug: 'design-patterns-guide' },
    ]
  },
  {
    title: 'API Reference',
    items: [
      { title: 'API Specification', slug: 'api-specification' }
    ]
  },
  {
    title: 'UI Guidelines',
    items: [
      { title: 'UI Best Practices', slug: 'ui-best-practices' }
    ]
  },
]

export function AyskaSidebar() {
  const pathname = usePathname()
  
  return (
    <SideNav
      sx={{
        width: '100%',
        maxWidth: THEME_CONSTANTS.sidebar.width,
        padding: THEME_CONSTANTS.sidebar.padding,
        backgroundColor: THEME_CONSTANTS.sidebar.backgroundColor,
        borderRight: '1px solid',
        borderRightColor: THEME_CONSTANTS.sidebar.borderColor,
        minHeight: '100vh',
      }}
    >
      <SideNav.Link
        href="/docs"
        sx={{
          fontWeight: 'bold',
          fontSize: THEME_CONSTANTS.navigation.fontSize,
          marginBottom: 2,
          color: pathname === '/docs' ? THEME_CONSTANTS.navigation.activeColor : 'fg.default',
        }}
      >
        Documentation
      </SideNav.Link>
      
      {docStructure.map((section) => (
        <Box key={section.title} sx={{ marginBottom: 3 }}>
          <Text
            sx={{
              fontSize: THEME_CONSTANTS.navigation.fontSize,
              fontWeight: 'bold',
              color: 'fg.muted',
              marginBottom: 2,
              paddingLeft: 2,
            }}
          >
            {section.title}
          </Text>
          {section.items.map((item) => (
            <SideNav.Link
              key={item.slug}
              href={`/docs/${item.slug}`}
              sx={{
                color: pathname === `/docs/${item.slug}` ? THEME_CONSTANTS.navigation.activeColor : 'fg.default',
                fontWeight: pathname === `/docs/${item.slug}` ? 'bold' : 'normal',
                '&:hover': {
                  color: THEME_CONSTANTS.navigation.hoverColor,
                  backgroundColor: 'canvas.default',
                },
              }}
            >
              {item.title}
            </SideNav.Link>
          ))}
        </Box>
      ))}
    </SideNav>
  )
}
