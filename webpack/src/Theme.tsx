import { createTheme } from '@mui/material'
declare module '@mui/material/styles' {
  interface TypographyVariants {
    caption1: React.CSSProperties
    caption2: React.CSSProperties
    heading: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    caption1: React.CSSProperties
    caption2: React.CSSProperties
  }

  interface Palette {
    greyShades: Palette['primary']
    semantic: Palette['primary']
  }

  interface PaletteOptions {
    greyShades?: PaletteOptions['primary']
    semantic?: PaletteOptions['primary']
  }
  interface PaletteColor {
    600?: string
    500?: string
    300?: string
    200?: string
    100?: string
    700?: string
    900?: string
  }

  interface SimplePaletteColorOptions {
    600?: string
    500?: string
    300?: string
    200?: string
    100?: string
    700?: string
    900?: string
  }
}

const theme = createTheme({
  spacing: 4,
  typography: {
    h4: {
      fontSize: '40px',
      fontWeight: 500,
      lineHeight: '54px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },
    h6: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '34px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },

    subtitle1: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '28px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },

    subtitle2: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '28px',
      fontFamily: 'Graphik',
    },

    body1: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '22px',
      fontFamily: 'Graphik',
    },

    body2: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '22px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },
    button: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '42px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },
    caption1: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '16px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },

    caption2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },
    overline: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '14px',
      textTransform: 'none',
      fontFamily: 'Graphik',
    },
  },

  palette: {
    primary: {
      main: 'white',
      100: '#FAFCFF',
      300: '#CCE3FF',
      500: '#0052FF',
      700: '#002EB7',
      900: '#00177A',
    },
    text: {
      primary: '#B2B2B9',
      secondary: '#7D7D89',
      disabled: '#343446',
    },
    semantic: {
      main: 'white',
      100: '#E9F7EC',
      700: '#20B03F',
      200: '#FFF6ED',
      300: '#FFA74F',
      600: '#F3E6EB',
      500: '#871A33',
    },

    greyShades: {
      main: 'white',
      50: '#F2F2F7',
      100: '#ECECF7',
      300: '#B4B4CF',
      500: '#4B4B60',
      700: '#252545',
      900: '#0E0E2E',
    },
  },
})

export default theme
