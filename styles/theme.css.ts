import { DEFAULT_THEME, Theme, vars } from '@seed-ui/styles';
import { createTheme } from '@vanilla-extract/css';
import merge from 'lodash/fp/merge';

export const tokens: Theme = merge(DEFAULT_THEME, {
  fontFamily: {
    primary: 'var(--primary-font)',
    secondary: 'var(--secondary-font)',
  },
});

export const theme = createTheme(vars, tokens);
