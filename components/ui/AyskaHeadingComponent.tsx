import { Box, BoxProps } from '@primer/react'

export function AyskaHeading({ as = 'h1', children, ...props }: BoxProps & { as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }) {
  return (
    <Box as={as} sx={{ fontWeight: 'bold', ...props.sx }} {...props}>
      {children}
    </Box>
  )
}
