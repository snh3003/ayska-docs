import { Box, BoxProps } from '@primer/react'

export function AyskaBox({ children, ...props }: BoxProps) {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
}
