import { Box, BoxProps } from '@primer/react'

export function AyskaText({ as = 'p', children, ...props }: BoxProps & { as?: 'p' | 'span' | 'div' | 'label' }) {
  return (
    <Box as={as} {...props}>
      {children}
    </Box>
  )
}
