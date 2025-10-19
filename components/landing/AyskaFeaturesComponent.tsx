import { Box, Text } from '@primer/react'
import { CodeIcon, CheckCircleIcon, PaintbrushIcon, BeakerIcon } from '@primer/octicons-react'

const features = [
  {
    icon: CodeIcon,
    title: 'SOLID Architecture',
    description: 'Built following SOLID principles with clean architecture patterns for maintainable and scalable code.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Type-Safe Development',
    description: 'Full TypeScript implementation ensuring type safety and better developer experience.',
  },
  {
    icon: PaintbrushIcon,
    title: 'Modern UI Library',
    description: 'Beautiful, accessible UI components built with React Native and modern design principles.',
  },
  {
    icon: BeakerIcon,
    title: 'Comprehensive Testing',
    description: 'Thoroughly tested with Jest and React Native Testing Library for reliability.',
  },
]

export function AyskaFeatures() {
  return (
    <Box
      sx={{
        padding: [4, 6, 8],
        backgroundColor: 'canvas.default',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        <Box
          as="h2"
          sx={{
            fontSize: [4, 5],
            textAlign: 'center',
            marginBottom: 6,
            color: 'fg.default',
            fontWeight: 'bold',
          }}
        >
          Why Choose Ayska?
        </Box>
        
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)'],
            gap: [4, 5],
          }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Box
                key={index}
                sx={{
                  padding: 4,
                  border: '1px solid',
                  borderColor: 'border.default',
                  borderRadius: 3,
                  backgroundColor: 'canvas.subtle',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: 'accent.emphasis',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: 3,
                  }}
                >
                  <IconComponent
                    size={48}
                  />
                </Box>
                
                <Box
                  as="h3"
                  sx={{
                    fontSize: 3,
                    marginBottom: 2,
                    color: 'fg.default',
                    fontWeight: 'bold',
                  }}
                >
                  {feature.title}
                </Box>
                
                <Text
                  sx={{
                    fontSize: 2,
                    color: 'fg.muted',
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Text>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
