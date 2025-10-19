export interface TOCItem {
  level: number
  text: string
  id: string
  children?: TOCItem[]
}

export function extractTOC(markdown: string): TOCItem[] {
  const headingRegex = /^#{2,3}\s+(.+)$/gm
  const headings: TOCItem[] = []
  
  let match
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[0].split('#').length - 1
    const text = match[1]
    const id = generateHeadingId(text)
    
    headings.push({ level, text, id })
  }
  
  return buildHierarchy(headings)
}

function buildHierarchy(headings: TOCItem[]): TOCItem[] {
  const result: TOCItem[] = []
  const stack: TOCItem[] = []
  
  for (const heading of headings) {
    // Pop stack until we find a parent or empty stack
    while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
      stack.pop()
    }
    
    if (stack.length === 0) {
      // Top-level heading
      result.push(heading)
    } else {
      // Child heading
      const parent = stack[stack.length - 1]
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(heading)
    }
    
    stack.push(heading)
  }
  
  return result
}

export function generateHeadingId(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
}

/**
 * URL Hash Management Functions
 */
export function updateHash(id: string): void {
  if (typeof window !== 'undefined') {
    const newUrl = `${window.location.pathname}${window.location.search}#${id}`
    window.history.replaceState(null, '', newUrl)
  }
}

export function getHashFromUrl(): string {
  if (typeof window !== 'undefined') {
    return window.location.hash.slice(1)
  }
  return ''
}

export function scrollToHeading(id: string): void {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}
