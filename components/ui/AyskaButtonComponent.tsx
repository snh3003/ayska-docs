import { Button, ButtonProps, Link } from '@primer/react'

export function AyskaButton({ children, href, ...props }: ButtonProps & { href?: string }) {
  if (href) {
    return (
      <Link href={href} sx={{ textDecoration: 'none' }}>
        <Button {...props}>
          {children}
        </Button>
      </Link>
    )
  }
  
  return (
    <Button {...props}>
      {children}
    </Button>
  )
}
