'use client'

import { useEffect, useState } from 'react'
import { ActionList, Box, Text } from '@primer/react'
import { extractTOC, TOCItem } from '@/lib/toc'

interface AyskaTOCProps {
  content?: string
}

export function AyskaTOC({ content = '' }: AyskaTOCProps) {
  const [toc, setToc] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  
  useEffect(() => {
    if (content) {
      const extractedToc = extractTOC(content)
      setToc(extractedToc)
    }
  }, [content])
  
  useEffect(() => {
    if (toc.length === 0) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0,
      }
    )
    
    // Observe all headings
    toc.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
      
      // Observe child headings
      if (item.children) {
        item.children.forEach((child) => {
          const childElement = document.getElementById(child.id)
          if (childElement) {
            observer.observe(childElement)
          }
        })
      }
    })
    
    return () => {
      observer.disconnect()
    }
  }, [toc])
  
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  
  const renderTOCItems = (items: TOCItem[], level = 0) => {
    return items.map((item) => (
      <ActionList.Item
        key={item.id}
        onClick={() => scrollToHeading(item.id)}
        sx={{
          paddingLeft: level > 0 ? 4 : 2,
          fontSize: level > 0 ? 1 : 2,
          color: activeId === item.id ? 'accent.fg' : 'fg.default',
          fontWeight: activeId === item.id ? 'bold' : 'normal',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'canvas.subtle',
          },
        }}
      >
        {item.text}
      </ActionList.Item>
    ))
  }
  
  if (toc.length === 0) {
    return null
  }
  
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '280px',
        padding: 3,
        backgroundColor: 'canvas.subtle',
        borderLeft: '1px solid',
        borderLeftColor: 'border.default',
        minHeight: '100vh',
        position: 'sticky',
        top: 0,
        display: ['none', 'none', 'block'], // Hide on mobile and tablet, show on desktop
      }}
    >
      <Text
        sx={{
          fontSize: 2,
          fontWeight: 'bold',
          marginBottom: 3,
          color: 'fg.default',
        }}
      >
        On this page
      </Text>
      
      <ActionList
        sx={{
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        {toc.map((item) => (
          <Box key={item.id}>
            <ActionList.Item
              onClick={() => scrollToHeading(item.id)}
              sx={{
                paddingLeft: 2,
                fontSize: 2,
                color: activeId === item.id ? 'accent.fg' : 'fg.default',
                fontWeight: activeId === item.id ? 'bold' : 'normal',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'canvas.default',
                },
              }}
            >
              {item.text}
            </ActionList.Item>
            
            {item.children && (
              <Box sx={{ paddingLeft: 2 }}>
                {item.children.map((child) => (
                  <ActionList.Item
                    key={child.id}
                    onClick={() => scrollToHeading(child.id)}
                    sx={{
                      paddingLeft: 2,
                      fontSize: 1,
                      color: activeId === child.id ? 'accent.fg' : 'fg.muted',
                      fontWeight: activeId === child.id ? 'bold' : 'normal',
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'canvas.default',
                      },
                    }}
                  >
                    {child.text}
                  </ActionList.Item>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </ActionList>
    </Box>
  )
}
