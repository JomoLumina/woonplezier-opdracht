import _ from 'lodash';
import {
  colors,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core';
import type { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme';
import type { Shadows as MuiShadows } from '@material-ui/core/styles/shadows';
import type {
  Palette as MuiPalette,
  PaletteColor,
  TypeBackground as MuiTypeBackground,
  TypeText as MuiTypeText
} from '@material-ui/core/styles/createPalette';
import { THEMES } from 'src/constants';
import { softShadows } from './shadows';
import typography from './typography';
import { BreakpointsOptions } from '@material-ui/core/styles/createBreakpoints';

interface TypeBackground extends MuiTypeBackground {
  dark: string;
  nieubouw: string;
  contact: string;
}

interface TypeText extends MuiTypeText {
  dark: string
}

interface Palette extends MuiPalette {
  background: TypeBackground;
  text: TypeText;
  menu: PaletteColor
}

export interface Theme extends MuiTheme {
  name: string;
  palette: Palette;
}

type Direction = 'ltr' | 'rtl';

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  theme?: string;
}

interface ThemeOptions { 
  name?: string;
  direction?: Direction;
  typography?: Record<string, any>;
  breakpoints?: BreakpointsOptions;
  overrides?: Record<string, any>;
  palette?: Record<string, any>;
  shadows?: MuiShadows;
}

const baseOptions: ThemeOptions = {
  direction: 'ltr',
  typography,
  breakpoints:{
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1200,
      xl: 1440,
    },
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)'
      }
    }
  }
};

const themesOptions: ThemeOptions[] = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600]
          }
        }
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 1024,
        lg: 1200,
        xl: 1440,
      },
    },
    typography: {
      fontFamily: `"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600]
      },
      background: {
        default: colors.common.white,
        dark: '#333333',
        paper: '#eeeeee',
        nieubouw: '#eef6fe',
        contact: '#054175'
      },
      primary: {
        main: colors.indigo[600]
      },
      secondary: {
        main: '#0c87f4'
      },
      menu: {
        main: '#444444'
      },
      text: {
        primary: colors.common.white,
        secondary: colors.grey['A200'],
        dark: '#333333'
      }
    },
    shadows: softShadows
  },
];

export const createTheme = (config: ThemeConfig = {}): Theme => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    _.merge(
      {},
      baseOptions,
      themeOptions,
      { direction: config.direction }
    )
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme as Theme;
}
