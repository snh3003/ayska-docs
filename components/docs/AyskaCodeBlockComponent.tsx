'use client'

import { useState, useEffect } from 'react'
import { Box, IconButton, Label, useTheme } from '@primer/react'
import { CopyIcon, CheckIcon } from '@primer/octicons-react'
import dynamic from 'next/dynamic'

// Lazy load the heavy syntax highlighter
const SyntaxHighlighter = dynamic(
  () => import('react-syntax-highlighter').then(mod => mod.Prism),
  { 
    loading: () => <Box sx={{ padding: 3, backgroundColor: 'canvas.subtle' }}>Loading...</Box>,
    ssr: false // Disable SSR for this component
  }
)

interface AyskaCodeBlockProps {
  children: string
  language?: string
  className?: string
}

// Lazy load themes
const useHighlighterTheme = () => {
  const { resolvedColorMode } = useTheme()
  const [theme, setTheme] = useState<any>(null)
  
  useEffect(() => {
    if (resolvedColorMode === 'day') {
      import('react-syntax-highlighter/dist/esm/styles/prism').then(mod => setTheme(mod.oneLight))
    } else {
      import('react-syntax-highlighter/dist/esm/styles/prism').then(mod => setTheme(mod.oneDark))
    }
  }, [resolvedColorMode])
  
  return theme
}

export function AyskaCodeBlock({ children, language, className }: AyskaCodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const theme = useHighlighterTheme()
  
  const match = /language-(\w+)/.exec(className || '')
  const lang = language || match?.[1] || 'text'
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }
  
  return (
    <Box
      sx={{
        position: 'relative',
        margin: '16px 0',
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'border.default',
      }}
    >
      {/* Header with language and copy button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 2,
          backgroundColor: 'canvas.subtle',
          borderBottom: '1px solid',
          borderBottomColor: 'border.default',
        }}
      >
        <Label variant="secondary" size="small">
          {lang}
        </Label>
        
        <IconButton
          icon={copied ? CheckIcon : CopyIcon}
          aria-label={copied ? 'Copied!' : 'Copy code'}
          onClick={copyToClipboard}
          size="small"
          sx={{
            minWidth: '32px',
            minHeight: '32px',
          }}
        />
      </Box>
      
      {/* Code content */}
      <SyntaxHighlighter
        language={lang}
        style={theme}
        customStyle={{
          margin: 0,
          padding: '16px',
          fontSize: '14px',
          lineHeight: '1.5',
        }}
        showLineNumbers={false}
        wrapLines={true}
        wrapLongLines={true}
      >
        {children}
      </SyntaxHighlighter>
    </Box>
  )
}
