import { Box } from '@primer/react'
import { AyskaUnifiedHeader } from '@/components/layout/AyskaUnifiedHeaderComponent'
import { AyskaSidebar } from '@/components/layout/AyskaSidebarComponent'
import { THEME_CONSTANTS, RESPONSIVE_UTILS } from '@/lib/theme'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AyskaUnifiedHeader />
      
      <Box
        sx={{
          display: 'flex',
          minHeight: 'calc(100vh - 64px)', // Subtract header height
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            ...RESPONSIVE_UTILS.hideOnTablet,
            width: THEME_CONSTANTS.sidebar.width,
            backgroundColor: THEME_CONSTANTS.sidebar.backgroundColor,
            borderRight: '1px solid',
            borderRightColor: THEME_CONSTANTS.sidebar.borderColor,
            minHeight: '100vh',
            position: 'sticky',
            top: 0,
          }}
        >
          <AyskaSidebar />
        </Box>
        
        {/* Main Content Area */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'canvas.default',
            minHeight: '100vh',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  )
}
