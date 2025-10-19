/**
 * Shared theme constants and style objects for Ayska Documentation
 * Uses Primer design system tokens for consistency across all components
 */

export const THEME_CONSTANTS = {
  // Header styling
  header: {
    height: '64px',
    backgroundColor: 'canvas.default',
    borderColor: 'border.default',
    zIndex: 100,
  },

  // Navigation styling
  navigation: {
    hoverColor: 'accent.fg',
    activeColor: 'accent.fg',
    linkColor: 'fg.default',
    fontSize: 2,
  },

  // Layout spacing
  layout: {
    maxWidth: '1200px',
    padding: [2, 3, 4],
    gap: [3, 4, 5],
  },

  // Content styling
  content: {
    maxWidth: '768px',
    padding: [3, 4],
    lineHeight: 1.6,
  },

  // Sidebar styling
  sidebar: {
    width: '280px',
    backgroundColor: 'canvas.subtle',
    borderColor: 'border.default',
    padding: 3,
  },

  // Table of Contents styling
  toc: {
    width: '280px',
    backgroundColor: 'canvas.subtle',
    borderColor: 'border.default',
    padding: 3,
    sticky: true,
  },

  // Typography
  typography: {
    heading: {
      h1: { fontSize: [4, 5, 6], fontWeight: 'bold', marginBottom: 3 },
      h2: { fontSize: [3, 4, 5], fontWeight: 'bold', marginBottom: 3 },
      h3: { fontSize: [2, 3, 4], fontWeight: 'bold', marginBottom: 2 },
      h4: { fontSize: [1, 2, 3], fontWeight: 'bold', marginBottom: 2 },
    },
    text: {
      body: { fontSize: [1, 2], lineHeight: 1.6, marginBottom: 3 },
      small: { fontSize: [0, 1], lineHeight: 1.5, marginBottom: 2 },
      muted: { fontSize: [1, 2], color: 'fg.muted', lineHeight: 1.6 },
    },
  },

  // Interactive elements
  interactive: {
    button: {
      minHeight: '44px',
      minWidth: ['200px', '180px'],
      padding: '12px 24px',
      borderRadius: 2,
      fontWeight: 'bold',
    },
    link: {
      hoverColor: 'accent.fg',
      activeColor: 'accent.fg',
      transition: 'color 0.2s ease',
    },
  },

  // Cards and containers
  card: {
    padding: 4,
    border: '1px solid',
    borderColor: 'border.default',
    borderRadius: 3,
    backgroundColor: 'canvas.default',
    transition: 'all 0.2s ease',
    hover: {
      borderColor: 'accent.emphasis',
      transform: 'translateY(-2px)',
      boxShadow: 'shadow.medium',
      backgroundColor: 'canvas.subtle',
    },
  },

  // Grid layouts
  grid: {
    gap: [3, 4, 5],
    columns: {
      mobile: '1fr',
      tablet: 'repeat(2, 1fr)',
      desktop: 'repeat(2, 1fr)',
    },
  },

  // Responsive breakpoints
  breakpoints: {
    mobile: '0px',
    tablet: '768px',
    desktop: '1024px',
  },

  // Z-index layers
  zIndex: {
    header: 100,
    dropdown: 200,
    modal: 300,
    tooltip: 400,
  },
}

/**
 * Common style objects for reuse across components
 */
export const COMMON_STYLES = {
  // Container styles
  container: {
    maxWidth: THEME_CONSTANTS.layout.maxWidth,
    margin: '0 auto',
    padding: THEME_CONSTANTS.layout.padding,
  },

  // Flex layouts
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: THEME_CONSTANTS.layout.gap,
  },

  // Responsive display
  responsiveDisplay: {
    display: ['flex', 'flex', 'flex'],
    flexDirection: ['column', 'row', 'row'],
  },

  // Sticky positioning
  stickyHeader: {
    position: 'sticky' as const,
    top: 0,
    zIndex: THEME_CONSTANTS.zIndex.header,
    backgroundColor: THEME_CONSTANTS.header.backgroundColor,
    borderBottom: '1px solid',
    borderBottomColor: THEME_CONSTANTS.header.borderColor,
  },

  // Link styles
  navLink: {
    textDecoration: 'none',
    color: THEME_CONSTANTS.navigation.linkColor,
    fontSize: THEME_CONSTANTS.navigation.fontSize,
    transition: THEME_CONSTANTS.interactive.link.transition,
    '&:hover': {
      color: THEME_CONSTANTS.navigation.hoverColor,
    },
  },

  // Button styles
  primaryButton: {
    ...THEME_CONSTANTS.interactive.button,
    backgroundColor: 'accent.emphasis',
    color: 'fg.onEmphasis', // White text on blue background
    textDecoration: 'none',
    textAlign: 'center' as const,
    '&:hover': {
      backgroundColor: 'accent.fg',
      color: 'fg.onEmphasis',
    },
  },

  secondaryButton: {
    ...THEME_CONSTANTS.interactive.button,
    backgroundColor: 'transparent',
    color: 'accent.fg', // Use accent color for better visibility
    textDecoration: 'none',
    textAlign: 'center' as const,
    border: '1px solid',
    borderColor: 'accent.emphasis',
    '&:hover': {
      backgroundColor: 'accent.subtle',
      borderColor: 'accent.fg',
    },
  },

  // Card styles
  card: {
    ...THEME_CONSTANTS.card,
    '&:hover': THEME_CONSTANTS.card.hover,
  },

  // Grid styles
  responsiveGrid: {
    display: 'grid',
    gridTemplateColumns: [
      THEME_CONSTANTS.grid.columns.mobile,
      THEME_CONSTANTS.grid.columns.tablet,
      THEME_CONSTANTS.grid.columns.desktop,
    ],
    gap: THEME_CONSTANTS.grid.gap,
  },
}

/**
 * Theme-aware color mappings
 */
export const THEME_COLORS = {
  // Background colors
  background: {
    primary: 'canvas.default',
    secondary: 'canvas.subtle',
    tertiary: 'canvas.inset',
  },

  // Text colors
  text: {
    primary: 'fg.default',
    secondary: 'fg.muted',
    accent: 'accent.fg',
  },

  // Border colors
  border: {
    default: 'border.default',
    muted: 'border.muted',
    accent: 'accent.emphasis',
  },

  // Interactive colors
  interactive: {
    hover: 'accent.fg',
    active: 'accent.fg',
    focus: 'accent.emphasis',
  },
}

/**
 * Responsive utility functions
 */
export const RESPONSIVE_UTILS = {
  // Hide on mobile
  hideOnMobile: {
    display: ['none', 'block', 'block'],
  },

  // Hide on tablet and mobile (show only on desktop 1024px+)
  hideOnTablet: {
    display: ['none', 'none', 'block'],
  },

  // Show on desktop only (1024px+)
  showOnDesktop: {
    display: ['none', 'none', 'block'],
  },

  // Show only on mobile
  showOnMobile: {
    display: ['block', 'none', 'none'],
  },

  // Show only on tablet and up
  showOnTablet: {
    display: ['none', 'block', 'block'],
  },
}
