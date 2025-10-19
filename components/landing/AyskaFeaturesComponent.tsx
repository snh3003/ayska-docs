import { Box, Text } from '@primer/react'
import { CodeIcon, CheckCircleIcon, PaintbrushIcon, BeakerIcon } from '@primer/octicons-react'
import { THEME_CONSTANTS, COMMON_STYLES, THEME_COLORS } from '@/lib/theme'

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
            backgroundColor: 'canvas.inset', // Proper theme token
          }}
        >
      <Box sx={COMMON_STYLES.container}>
        <Box
          as="h2"
          sx={{
            ...THEME_CONSTANTS.typography.heading.h2,
            textAlign: 'center',
            marginBottom: 6,
            color: 'fg.default',
          }}
        >
          Why Choose Ayska?
        </Box>
        
        <Box sx={COMMON_STYLES.responsiveGrid}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Box
                key={index}
                sx={{
                  ...COMMON_STYLES.card,
                  textAlign: 'center',
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
                    ...THEME_CONSTANTS.typography.heading.h3,
                    color: 'fg.default',
                  }}
                >
                  {feature.title}
                </Box>
                
                <Text
                  sx={{
                    ...THEME_CONSTANTS.typography.text.muted,
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
