import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'content/docs')

export interface DocMetadata {
  title: string
  description: string
  order: number
}

export interface Doc extends DocMetadata {
  slug: string
}

export interface DocWithContent extends Doc {
  content: string
}

export function getAllDocs(): Doc[] {
  const fileNames = fs.readdirSync(docsDirectory)
  return fileNames
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(docsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        slug,
        ...data,
      } as Doc
    })
    .sort((a, b) => a.order - b.order)
}

export function getDocBySlug(slug: string): DocWithContent {
  const fullPath = path.join(docsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    content,
    ...data,
  } as DocWithContent
}

export function getDocSlugs(): string[] {
  const fileNames = fs.readdirSync(docsDirectory)
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''))
}
