import { notFound } from 'next/navigation'
import { getAllDocs, getDocBySlug, getDocSlugs } from '@/lib/docs'
import { AyskaDocContent } from '@/components/docs/AyskaDocContentComponent'
import { AyskaTOC } from '@/components/layout/AyskaTOCComponent'

interface DocPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getDocSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default function DocPage({ params }: DocPageProps) {
  const doc = getDocBySlug(params.slug)
  
  if (!doc) {
    notFound()
  }
  
  return (
    <>
      <AyskaDocContent content={doc.content} />
      <AyskaTOC content={doc.content} />
    </>
  )
}
