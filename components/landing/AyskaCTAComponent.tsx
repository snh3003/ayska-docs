import { Box, Text, Button, Link } from '@primer/react'

export function AyskaCTA() {
  return (
    <Box
      sx={{
        padding: [4, 6, 8],
        backgroundColor: 'accent.subtle',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '600px',
          mx: 'auto',
        }}
      >
        <Box
          as="h2"
          sx={{
            fontSize: [4, 5],
            marginBottom: 3,
            color: 'fg.default',
            fontWeight: 'bold',
          }}
        >
          Ready to Explore?
        </Box>
        
        <Text
          sx={{
            fontSize: [2, 3],
            color: 'fg.muted',
            marginBottom: 5,
            lineHeight: 1.6,
          }}
        >
          Dive into our comprehensive documentation and start building with Ayska today.
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
            Get Started
          </Link>
          
          <Link
            href="https://github.com/snh3003/ayska-field-app"
            sx={{
              fontSize: 2,
              color: 'accent.fg',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            View Source Code →
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
