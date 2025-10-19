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
    const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    
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
