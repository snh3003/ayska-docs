import { Link, LinkProps } from '@primer/react'

export function AyskaLink({ children, ...props }: LinkProps) {
  return (
    <Link {...props}>
      {children}
    </Link>
  )
}
