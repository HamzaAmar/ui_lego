import '../src/scss/main.scss';
import { initializeRTL } from 'storybook-addon-rtl';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

initializeRTL();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  themes: {
    default: 'dark',
    list: [
      { name: 'dark', class: 'dark', color: 'hsl(0deg 0% 5%)' },
      { name: 'light', class: 'light', color: 'hsl(0deg 0% 95%)' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
