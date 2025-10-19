import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { Heading, Text, Link, Flash, Box } from '@primer/react'
import { AyskaCodeBlock } from './AyskaCodeBlockComponent'

interface AyskaDocContentProps {
  content: string
}

const components = {
  h1: ({ children, ...props }: any) => (
    <Heading as="h1" sx={{ fontSize: 5, marginBottom: 3, marginTop: 4 }} {...props}>
      {children}
    </Heading>
  ),
  h2: ({ children, ...props }: any) => (
    <Heading as="h2" sx={{ fontSize: 4, marginBottom: 2, marginTop: 4 }} {...props}>
      {children}
    </Heading>
  ),
  h3: ({ children, ...props }: any) => (
    <Heading as="h3" sx={{ fontSize: 3, marginBottom: 2, marginTop: 3 }} {...props}>
      {children}
    </Heading>
  ),
  h4: ({ children, ...props }: any) => (
    <Heading as="h4" sx={{ fontSize: 2, marginBottom: 2, marginTop: 3 }} {...props}>
      {children}
    </Heading>
  ),
  h5: ({ children, ...props }: any) => (
    <Heading as="h5" sx={{ fontSize: 1, marginBottom: 2, marginTop: 2 }} {...props}>
      {children}
    </Heading>
  ),
  h6: ({ children, ...props }: any) => (
    <Heading as="h6" sx={{ fontSize: 1, marginBottom: 2, marginTop: 2 }} {...props}>
      {children}
    </Heading>
  ),
  p: ({ children, ...props }: any) => {
    // Check if any child is a block-level element (like AyskaCodeBlock)
    const hasBlockChild = React.Children.toArray(children).some(child =>
      React.isValidElement(child) && (child.type === AyskaCodeBlock || child.type === 'div' || child.type === 'pre')
    );

    if (hasBlockChild) {
      return <Box sx={{ marginBottom: 3, lineHeight: 1.6 }} {...props}>{children}</Box>;
    }
    return (
      <Text as="p" sx={{ marginBottom: 3, lineHeight: 1.6, color: 'fg.default' }} {...props}>
        {children}
      </Text>
    );
  },
  pre: ({ children, ...props }: any) => {
    // Handle fenced code blocks
    const codeElement = children[0];
    if (codeElement && typeof codeElement === 'object' && 'props' in codeElement) {
      const { className, children: codeChildren } = codeElement.props;
      const match = /language-(\w+)/.exec(className || '');
      const language = match?.[1] || 'text';
      return (
        <AyskaCodeBlock language={language} {...props}>
          {String(codeChildren).replace(/\n$/, '')}
        </AyskaCodeBlock>
      );
    }
    return <Box as="pre" sx={{ marginBottom: 3 }} {...props}>{children}</Box>;
  },
  a: ({ href, children, ...props }: any) => (
    <Link href={href} sx={{ color: 'accent.fg' }} {...props}>
      {children}
    </Link>
  ),
  code: ({ inline, children, className, ...props }: any) => {
    if (inline) {
      return (
        <Text
          as="code"
          sx={{
            backgroundColor: 'neutral.subtle',
            padding: '2px 6px',
            borderRadius: 1,
            fontSize: '0.9em',
            fontFamily: 'mono',
            color: 'fg.default',
          }}
          {...props}
        >
          {children}
        </Text>
      )
    }
    // This case should ideally not be reached for block code if 'pre' is defined.
    // As a fallback, render it as a simple code block.
    return (
      <AyskaCodeBlock language="text" {...props}>
        {String(children).replace(/\n$/, '')}
      </AyskaCodeBlock>
    )
  },
  blockquote: ({ children, ...props }: any) => (
    <Flash variant="default" sx={{ marginBottom: 3 }} {...props}>
      {children}
    </Flash>
  ),
  ul: ({ children, ...props }: any) => (
    <Box as="ul" sx={{ marginBottom: 3, paddingLeft: 3 }} {...props}>
      {children}
    </Box>
  ),
  ol: ({ children, ...props }: any) => (
    <Box as="ol" sx={{ marginBottom: 3, paddingLeft: 3 }} {...props}>
      {children}
    </Box>
  ),
  li: ({ children, ...props }: any) => (
    <Text as="li" sx={{ marginBottom: 1, lineHeight: 1.6, color: 'fg.default' }} {...props}>
      {children}
    </Text>
  ),
  table: ({ children, ...props }: any) => (
    <Box
      as="table"
      sx={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: 3,
        border: '1px solid',
        borderColor: 'border.default',
        borderRadius: 2,
        overflow: 'hidden',
      }}
      {...props}
    >
      {children}
    </Box>
  ),
  thead: ({ children, ...props }: any) => (
    <Box as="thead" sx={{ backgroundColor: 'canvas.subtle' }} {...props}>
      {children}
    </Box>
  ),
  tbody: ({ children, ...props }: any) => (
    <Box as="tbody" {...props}>
      {children}
    </Box>
  ),
  tr: ({ children, ...props }: any) => (
    <Box as="tr" sx={{ borderBottom: '1px solid', borderBottomColor: 'border.default' }} {...props}>
      {children}
    </Box>
  ),
  th: ({ children, ...props }: any) => (
    <Text
      as="th"
      sx={{
        padding: 3,
        textAlign: 'left',
        fontWeight: 'bold',
        borderRight: '1px solid',
        borderRightColor: 'border.default',
        color: 'fg.default',
      }}
      {...props}
    >
      {children}
    </Text>
  ),
  td: ({ children, ...props }: any) => (
    <Text
      as="td"
      sx={{
        padding: 3,
        borderRight: '1px solid',
        borderRightColor: 'border.default',
        color: 'fg.default',
      }}
      {...props}
    >
      {children}
    </Text>
  ),
}

export function AyskaDocContent({ content }: AyskaDocContentProps) {
  return (
    <Box
      sx={{
        maxWidth: '768px',
        margin: '0 auto',
        padding: [3, 4],
        '& > *:first-child': {
          marginTop: 0,
        },
        '& > *:last-child': {
          marginBottom: 0,
        },
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['anchor'],
              },
            },
          ],
        ]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </Box>
  )
}
