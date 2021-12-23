import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      'transparent': '#999999',
      '700': '#47585B',
      '300': '#999999',
    },
    yellow: {
      'transparent': 'rgba(255, 186, 8, .5)',
      '500': '#FFBA08',
    },
    blue: {
      '50': '#F5F8FA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        color: 'gray.50',
      },
    },
  },
});
