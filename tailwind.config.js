module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#00288E',
        'primary-container': '#1E40AF',
        surface: '#F7F9FB',
        'surface-low': '#F2F4F6',
        'surface-container': '#ECEEF0',
        'surface-high': '#E6E8EA',
        'surface-lowest': '#FFFFFF',
        'on-surface': '#191C1E',
        'on-surface-variant': '#444653',
        secondary: '#565E74',
        'secondary-container': '#DAE2FD',
        outline: '#757684',
        'outline-variant': '#C4C5D5',
        error: '#BA1A1A',
      },
      fontFamily: {
        jakarta: ['PlusJakartaSans_400Regular'],
        'jakarta-medium': ['PlusJakartaSans_500Medium'],
        'jakarta-semibold': ['PlusJakartaSans_600SemiBold'],
        'jakarta-bold': ['PlusJakartaSans_700Bold'],
      },
    },
  },
  plugins: [],
};
