'use client'

import { useEffect, useState } from 'react'
import { ActionList, Box, Text, IconButton } from '@primer/react'
import { ThreeBarsIcon, XIcon } from '@primer/octicons-react'
import { TOCItem, updateHash, getHashFromUrl, scrollToHeading } from '@/lib/toc'
import { THEME_CONSTANTS, COMMON_STYLES, RESPONSIVE_UTILS } from '@/lib/theme'

interface TableOfContentsProps {
  headings: TOCItem[]
}

export function AyskaTableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false)
  
  useEffect(() => {
    if (headings.length === 0) return
    
    // Set initial active ID from URL hash
    const hashFromUrl = getHashFromUrl()
    if (hashFromUrl) {
      setActiveId(hashFromUrl)
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            setActiveId(id)
            updateHash(id)
          }
        })
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0,
      }
    )
    
    // Observe all headings
    const observeHeadings = (items: TOCItem[]) => {
      items.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          observer.observe(element)
        }
        
        if (item.children) {
          observeHeadings(item.children)
        }
      })
    }
    
    observeHeadings(headings)
    
    return () => {
      observer.disconnect()
    }
  }, [headings])
  
  const handleHeadingClick = (id: string) => {
    scrollToHeading(id)
    setIsMobileTocOpen(false) // Close mobile ToC after click
  }
  
  const toggleMobileToc = () => {
    setIsMobileTocOpen(!isMobileTocOpen)
  }
  
  if (headings.length === 0) {
    return null
  }
  
  const renderTOCItems = (items: TOCItem[], level = 0) => {
    return items.map((item) => (
      <Box key={item.id}>
        <ActionList.Item
          onClick={() => handleHeadingClick(item.id)}
          sx={{
            paddingLeft: level > 0 ? 4 : 2,
            fontSize: level > 0 ? 1 : 2,
            color: activeId === item.id ? THEME_CONSTANTS.navigation.activeColor : 'fg.default',
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
            {renderTOCItems(item.children, level + 1)}
          </Box>
        )}
      </Box>
    ))
  }
  
  return (
    <>
      {/* Desktop ToC - Always visible */}
      <Box
        sx={{
          ...RESPONSIVE_UTILS.hideOnTablet,
          width: THEME_CONSTANTS.toc.width,
          padding: THEME_CONSTANTS.toc.padding,
          backgroundColor: THEME_CONSTANTS.toc.backgroundColor,
          borderLeft: '1px solid',
          borderLeftColor: THEME_CONSTANTS.toc.borderColor,
          minHeight: '100vh',
          position: 'sticky',
          top: 0,
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
          {renderTOCItems(headings)}
        </ActionList>
      </Box>
      
      {/* Mobile ToC Button */}
      <IconButton
        icon={isMobileTocOpen ? XIcon : ThreeBarsIcon}
        aria-label={isMobileTocOpen ? 'Close table of contents' : 'Open table of contents'}
        onClick={toggleMobileToc}
        sx={{
          ...RESPONSIVE_UTILS.showOnMobile,
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: THEME_CONSTANTS.zIndex.dropdown,
          backgroundColor: 'accent.emphasis',
          color: 'accent.fg',
          minWidth: '56px',
          minHeight: '56px',
          borderRadius: '50%',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            backgroundColor: 'accent.fg',
            color: 'accent.subtle',
          },
        }}
      />
      
      {/* Mobile ToC Overlay */}
      {isMobileTocOpen && (
        <Box
          sx={{
            ...RESPONSIVE_UTILS.showOnMobile,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: THEME_CONSTANTS.zIndex.modal,
            display: 'flex',
            alignItems: 'flex-end',
          }}
          onClick={toggleMobileToc}
        >
          <Box
            sx={{
              backgroundColor: 'canvas.default',
              width: '100%',
              maxHeight: '70vh',
              borderTopLeftRadius: 3,
              borderTopRightRadius: 3,
              padding: 3,
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 3,
              }}
            >
              <Text
                sx={{
                  fontSize: 3,
                  fontWeight: 'bold',
                  color: 'fg.default',
                }}
              >
                On this page
              </Text>
              <IconButton
                icon={XIcon}
                aria-label="Close"
                onClick={toggleMobileToc}
                sx={{
                  minWidth: '44px',
                  minHeight: '44px',
                }}
              />
            </Box>
            
            <ActionList
              sx={{
                backgroundColor: 'transparent',
                border: 'none',
              }}
            >
              {renderTOCItems(headings)}
            </ActionList>
          </Box>
        </Box>
      )}
    </>
  )
}
