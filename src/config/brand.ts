export const brandAssets = {
  status: 'current-logo-png-vector-pending',
  logo: {
    src: '/brand/heavens-logo-current.png',
    width: 720,
    height: 720,
    replacementRule:
      'Current implementation uses an optimized transparent PNG derived from the supplied logo. Replace with approved transparent SVG assets when delivered.',
  },
  symbol: {
    src: '/brand/heavens-symbol-current.svg',
    width: 96,
    height: 96,
    replacementRule:
      'Temporary transparent symbol extracted as an implementation aid for responsive horizontal lockups. Replace with approved standalone SVG symbol when delivered.',
  },
  heroGraphic: {
    src: '/brand/heavens-hero-graphic-placeholder.svg',
    width: 720,
    height: 520,
    replacementRule:
      'Replace with approved brand graphic, photography, or art direction after the visual identity package is provided.',
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
