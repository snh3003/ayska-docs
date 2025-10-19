import { Text, Link } from '@primer/react'
import { getAllDocs } from '@/lib/docs'
import { THEME_CONSTANTS, COMMON_STYLES } from '@/lib/theme'

export default function DocsPage() {
  const docs = getAllDocs()
  
  const docSections = [
    {
      title: 'Getting Started',
      docs: docs.filter(doc => doc.slug === 'project-setup-guide')
    },
    {
      title: 'Development',
      docs: docs.filter(doc => ['dev-guide', 'data-flow-guide', 'design-patterns-guide'].includes(doc.slug))
    },
    {
      title: 'API Reference',
      docs: docs.filter(doc => doc.slug === 'api-specification')
    },
    {
      title: 'UI Guidelines',
      docs: docs.filter(doc => doc.slug === 'ui-best-practices')
    }
  ]

  return (
    <div
      style={{
        maxWidth: THEME_CONSTANTS.content.maxWidth,
        margin: '0 auto',
        padding: '16px',
        backgroundColor: 'var(--color-canvas-default)',
        minHeight: '100vh',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '12px', color: 'var(--color-fg-default)' }}>
          Documentation
        </h1>
        <Text sx={{ ...THEME_CONSTANTS.typography.text.muted, fontSize: [2, 3] }}>
          Complete documentation for the Ayska Field App. Learn how to set up, develop, and deploy your field activity tracking application.
        </Text>
      </div>

      {docSections.map((section) => (
        <div key={section.title} style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'var(--color-fg-default)' }}>
            {section.title}
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {section.docs.map((doc) => (
              <div
                key={doc.slug}
                style={{
                  padding: '16px',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-canvas-default)',
                  transition: 'all 0.2s ease',
                }}
              >
                <Link
                  href={`/docs/${doc.slug}`}
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': {
                      textDecoration: 'none',
                    },
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--color-fg-default)' }}>
                    {doc.title}
                  </h3>
                  <Text sx={{ ...THEME_CONSTANTS.typography.text.muted }}>
                    {doc.description}
                  </Text>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
