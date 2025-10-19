import { notFound } from 'next/navigation'
import { getAllDocs, getDocBySlug, getDocSlugs } from '@/lib/docs'
import { AyskaDocContent } from '@/components/docs/AyskaDocContentComponent'
import { AyskaTableOfContents } from '@/components/docs/AyskaTableOfContentsComponent'
import { extractTOC } from '@/lib/toc'
import { Box } from '@primer/react'
import { THEME_CONSTANTS } from '@/lib/theme'

interface DocPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getDocSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params
  const doc = getDocBySlug(slug)
  
  if (!doc) {
    notFound()
  }
  
  const headings = extractTOC(doc.content)
  
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
      }}
    >
      {/* Content */}
      <Box
        sx={{
          flex: 1,
          maxWidth: THEME_CONSTANTS.content.maxWidth,
          margin: '0 auto',
          padding: THEME_CONSTANTS.content.padding,
        }}
      >
        <AyskaDocContent content={doc.content} />
      </Box>
      
      {/* Table of Contents */}
      <AyskaTableOfContents headings={headings} />
    </Box>
  )
}
