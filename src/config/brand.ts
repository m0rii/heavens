export const brandAssets = {
  status: 'supplied-logo-png-vector-pending',
  logo: {
    src: '/brand/logopng.png',
    width: 6000,
    height: 6000,
    replacementRule:
      'Current implementation uses the supplied transparent PNG from public/brand/logopng.png. Replace with approved transparent SVG assets when delivered.',
  },
  symbol: {
    src: '/brand/logopng.png',
    width: 6000,
    height: 6000,
    replacementRule:
      'Current implementation reuses the supplied transparent PNG until an approved standalone SVG symbol is delivered.',
  },
  heroGraphic: {
    src: '/brand/logopng.png',
    width: 6000,
    height: 6000,
    replacementRule:
      'Current implementation reuses the supplied transparent PNG as the homepage graphic until approved brand art direction is delivered.',
  },
  icons: {
    faviconIco: '/favicon.ico',
    faviconPng: '/favicon-32.png',
    appleTouchIcon: '/apple-touch-icon.png',
    manifest192: '/brand/icon-192.png',
    manifest512: '/brand/icon-512.png',
    replacementRule:
      'Browser and app icons are generated from public/brand/logopng.png. Regenerate them when the approved final logo changes.',
  },
  palette: {
    status: 'logo-derived-current',
    extractedLogoColors: {
      heavensOlive: '#698A3B',
      deepLogoGreen: '#3F6111',
      heavensAmber: '#F9A004',
    },
    colors: {
      heavensMidnight: '#0A0D09',
      heavensPine: '#11170D',
      heavensForestSurface: '#192112',
      heavensIvory: '#F5F0E6',
      heavensPorcelain: '#FBF8F2',
      heavensSoftIvory: '#F8F4EB',
      heavensInk: '#171A15',
      heavensStone: '#A8A49B',
      heavensMuted: '#676D61',
      heavensOlive: '#698A3B',
      heavensDeepOlive: '#3F6111',
      heavensSage: '#A7B68B',
      heavensAmber: '#F9A004',
      heavensBurnishedAmber: '#9E5800',
      heavensBorderDark: '#2B3523',
      heavensBorderLight: '#DED7CA',
      heavensSuccess: '#347044',
      heavensError: '#B84A42',
    },
    replacementRule:
      'Update the CSS theme tokens and this config together if the final brand document changes the approved palette.',
  },
} as const;
