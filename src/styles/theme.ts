import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false, 
      },
    fonts: {
      body: "Lato, sans-serif",
      heading: "Poppins, serif",
    },
    colors: {
        transparent: 'transparent',
        black: {
            50: '#1C1C1C',
            100: '#111111',
            200: '#0B0B0B',
            300: '#080808',
            400: '#070707',
            500: '#050505',
            600: '#050505',
            700: '#050505',
            800: '#050505',
            900: '#000000',
        },
        orange: {
            50: '#FF752C',
            100: '#FF6E22',
            200: '#FF6717',
            300: '#FF600C',
            400: '#FF5800',
            500: '#F45400',
            600: '#E34F00',
            700: '#D34900',
            800: '#C04200',
            900: '#AF3C00',
        },
        white: {
            50: '#F1F1F1 ',
            100: '#F0F0F0',
            200: '#EEEEEE',
            300: '#ECECEC',
            400: '#EAEAEA',
            500: '#E8E8E8',
            600: '#E6E6E6',
            700: '#E4E4E4',
            800: '#E1E1E1',
            900: '#D7D7D7',
        },
      },
  });