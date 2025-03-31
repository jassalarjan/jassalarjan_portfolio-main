import { pxToRem } from '~/utils/style';

// Full list of tokens
const baseTokens = {
  black: 'oklch(0% 0 0)',
  white: 'oklch(100% 0 0)',
  // Element-specific colors that remain consistent
  // Heading colors
  h1Color: 'var(--h1Color)', // Use theme variable
  h2Color: 'var(--h2Color)', // Use theme variable
  h3Color: 'var(--h3Color)', // Use theme variable
  h4Color: 'var(--h4Color)', // Use theme variable
  h5Color: 'var(--h5Color)', // Use theme variable
  
  // Text colors
  paragraphColor: 'var(--paragraphColor)', // Use theme variable
  linkColor: 'var(--linkColor)', // Use theme variable
  linkHoverColor: 'var(--linkHoverColor)', // Use theme variable
  accentColor: 'var(--accent)', // Use theme variable
  secondaryTextColor: 'var(--secondaryTextColor)', // Use theme variable
  
  // Special elements
  navTextColor: 'var(--navTextColor)', // Use theme variable
  buttonTextColor: 'var(--buttonTextColor)', // Use theme variable
  buttonBgColor: 'var(--buttonBgColor)', // Use theme variable
  buttonHoverBgColor: 'var(--buttonHoverBgColor)', // Use theme variable
  navButtonBgColor: 'var(--navButtonBgColor)', // New variable for nav button background
  
  // Form elements
  inputTextColor: 'var(--inputTextColor)', // Use theme variable
  inputBorderColor: 'var(--inputBorderColor)', // Use theme variable
  inputFocusBorderColor: 'var(--inputFocusBorderColor)', // Use theme variable
  
  bezierFastoutSlowin: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  durationXS: '200ms',
  durationS: '300ms',
  durationM: '400ms',
  durationL: '600ms',
  durationXL: '800ms',
  systemFontStack:
    'system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif',
  fontStack: `Gotham, var(--systemFontStack)`,
  monoFontStack:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  japaneseFontStack:
    'IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif',
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: '1.1',
  lineHeightBody: '1.6',
  maxWidthS: '540px',
  maxWidthM: '720px',
  maxWidthL: '1096px',
  maxWidthXL: '1680px',
  spaceOuter: '64px',
  spaceXS: '4px',
  spaceS: '8px',
  spaceM: '16px',
  spaceL: '24px',
  spaceXL: '32px',
  space2XL: '48px',
  space3XL: '64px',
  space4XL: '96px',
  space5XL: '128px',
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64,
};

// Tokens that change based on viewport size
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80),
};

const tokensLaptop = {
  maxWidthS: '480px',
  maxWidthM: '640px',
  maxWidthL: '1000px',
  maxWidthXL: '1100px',
  spaceOuter: '48px',
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22),
};

const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20),
};

const tokensMobile = {
  spaceOuter: '24px',
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14),
};

const tokensMobileSmall = {
  spaceOuter: '16px',
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20),
};

// Tokens that change based on theme
const dark = {
  background: '#1A1A1A', // Deep dark background
  backgroundLight: '#2D2D2D', // Slightly lighter dark for cards
  backgroundDark: '#121212', // Even darker background
  backgroundA: 'rgba(26, 26, 26, 0.8)', // Semi-transparent background
  backgroundA50: 'rgba(26, 26, 26, 0.5)', // 50% transparent background
  primary: '#FFE983', // Warm yellow for primary accent
  accent: '#FFE983', // Using same color for accent to ensure consistency
  error: '#FF6A00', // Fiery Orange for error states
  text: '#FFFFFF', // Pure white for text
  
  // Text colors
  colorTextTitle: '#FFFFFF', // White for titles
  colorTextBody: '#FFFFFF', // White for body text
  colorTextLight: '#FFFFFF', // White for light text
  
  // Border colors
  borderLight: 'rgba(255, 255, 255, 0.1)', // Light border
  borderDark: 'rgba(255, 255, 255, 0.2)', // Dark border
  
  // Heading colors - Gradient from warm yellow to white
  h1Color: '#FFE983', // Warm yellow for H1
  h2Color: '#FFE983', // Warm yellow for H2
  h3Color: 'white', // Warm yellow for H3
  h4Color: '#FFE983', // Warm yellow for H4
  h5Color: '#FFE983', // Warm yellow for H5
  
  // Text colors
  paragraphColor: '#FFFFFF', // White for paragraphs (was black)
  linkColor: '#FFE983', // Warm yellow for links
  linkHoverColor: '#FFD700', // Slightly darker yellow for hover
  secondaryTextColor: '#CCCCCC', // Light gray for secondary text
  
  // Special elements
  navTextColor: '#FFFFFF', // White for navigation (was black)
  buttonTextColor: '#FFFFFF', // White for button text
  buttonBgColor: '#FFE983', // Warm yellow for button background
  buttonHoverBgColor: '#FFD700', // Slightly darker yellow for hover
  navButtonBgColor: 'transparent', // Transparent for nav buttons
  
  // Form elements
  inputTextColor: '#FFFFFF', // White for input text (was black)
  inputBorderColor: '#404040', // Dark gray for input borders
  inputFocusBorderColor: '#FFE983', // Warm yellow for input focus
};

const light = {
  background: '#FFFFFF',
  backgroundLight: '#F8F9FA',
  backgroundDark: '#E2E8F0',
  backgroundA: 'rgba(255, 255, 255, 0.8)',
  backgroundA50: 'rgba(255, 255, 255, 0.5)',
  primary: 'maroon', // Maroon for primary
  accent: 'maroon', // Using same color for accent to ensure consistency
  error: '#FF6A00',
  text: '#000000', // Pure black for text
  
  // Text colors
  colorTextTitle: '#000000', // Black for titles
  colorTextBody: '#000000', // Black for body text
  colorTextLight: '#4A5568', // Dark gray for light text
  
  // Border colors
  borderLight: 'rgba(0, 0, 0, 0.1)', // Light border
  borderDark: 'rgba(0, 0, 0, 0.2)', // Dark border
  
  // Heading colors - Maroon gradient
  h1Color: 'maroon', // Maroon for H1
  h2Color: 'maroon', // Maroon for H2
  h3Color: '#303F9F', // Medium indigo for H3
  h4Color: '#3949AB', // Lighter indigo for H4
  h5Color: '#3F51B5', // Lightest indigo for H5
  
  // Text colors
  paragraphColor: '#000000', // Pure black for paragraphs
  linkColor: 'maroon', // Maroon for links
  linkHoverColor: '#800000', // Darker maroon for hover
  secondaryTextColor: '#8892B0', // Muted blue-gray for secondary text
  
  // Special elements
  navTextColor: '#000000', // Pure black for navigation
  buttonTextColor: '#FFFFFF', // White for button text
  buttonBgColor: 'maroon', // Maroon for button background
  buttonHoverBgColor: '#800000', // Darker maroon for hover
  navButtonBgColor: 'transparent', // Transparent for nav buttons
  
  // Form elements
  inputTextColor: '#000000', // Pure black for input text
  inputBorderColor: '#E2E8F0', // Light gray for input borders
  inputFocusBorderColor: 'maroon', // Maroon for input focus
};

export const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall,
};

export const themes = { dark, light };
