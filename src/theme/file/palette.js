import { alpha } from '@mui/material/styles';

const palette = {
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  primary: {
    main: '#002c5f',
    dark: '#002c5f',
    // light: '#aacbe6',
    contrastText: '#fff',
  },
  secondary: {
    main: '#4491b3',
    dark: '#377ea4',
    contrastText: '#fff',
  },
  error: {
    main: '#e35555',
  },
  warning: {
    main: '#ff9800',
  },
  info: {
    main: '#00acc1',
  },
  success: {
    main: '#4caf50',
  },
  gray: {
    main: '#626262',
    light: '#c3c3c3',
    dark: '#555555',
    contrastText: '#fff',
  },
  search: {
    main: '#626262',
    contrastText: '#fff',
  },
  asterisk: {
    main: '#0e72af',
  },
  text: {
    primary: '#626262',
    secondary: '#626262',
    disabled: '#999999',
    title: '#222222',
    link: '#337ab7',
    light: '#bebebe',
    dark: '#444444',
  },
  divider: '#e5e5e5',
  background: {
    paper: '#ffffff',
    default: '#f6f3f2',
    search: '#f5f5f5',
    cell: '#f6f6f6',
    backdrop: alpha('#dcebff', 0.5),
    progress: '#f3f3f3',
    gray: '#626262',
    button: '#efefef',
  },
  action: {
    active: '#f8f8f8',
    hover: '#0e72af', // #0087b5
    // hoverOpacity: 0.92,
    selected: '#0e72af', // #00aad2
    // selectedOpacity: 0.08,
    // selectedOpacity: 1,
    disabled: '#cccccc',
    disabledBackground: alpha('#cccccc', 0.2),
    disabledOpacity: 0.2,
    focus: '#0087b5',
    // focusOpacity: 0.12,
    // focusOpacity: 1,
    // activatedOpacity: 0.12,
    // activatedOpacity: 1,
  },
  border: {
    main: '#e4dcd3',
    input: '#dadada',
    header: '#e4e4e4',
    button: '#d2d2d2',
    tooltip: '#dfdfdf',
    focus: '#aaaaaa',
    hover: '#888888',
  },
};

export default palette;
