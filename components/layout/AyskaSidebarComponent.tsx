'use client'

import { SideNav, Box, Text } from '@primer/react'
import { usePathname } from 'next/navigation'

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
        maxWidth: '280px',
        padding: 3,
        backgroundColor: 'canvas.subtle',
        borderRight: '1px solid',
        borderRightColor: 'border.default',
        minHeight: '100vh',
      }}
    >
      <SideNav.Link
        href="/docs"
        sx={{
          fontWeight: 'bold',
          fontSize: 2,
          marginBottom: 2,
          color: pathname === '/docs' ? 'accent.fg' : 'fg.default',
        }}
      >
        Documentation
      </SideNav.Link>
      
      {docStructure.map((section) => (
        <Box key={section.title} sx={{ marginBottom: 3 }}>
          <Text
            sx={{
              fontSize: 2,
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
                color: pathname === `/docs/${item.slug}` ? 'accent.fg' : 'fg.default',
                fontWeight: pathname === `/docs/${item.slug}` ? 'bold' : 'normal',
                '&:hover': {
                  color: 'accent.fg',
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
