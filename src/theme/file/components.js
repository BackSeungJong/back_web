import { alpha } from '@mui/material/styles';
import { tableRowClasses, tableCellClasses, inputBaseClasses, outlinedInputClasses, buttonClasses } from '@mui/material';
import { gridClasses } from '@mui/x-data-grid';

import palette from './palette';
import typography from './typography';

const components = {
  MuiCssBaseline: {
    styleOverrides: `
      html {
        -webkit-font-smoothing: auto;
      }
      html,
      body, 
      div#root {
        height: 100%;
      }
      @font-face {
        font-family: 'TextBold';
        font-style: normal;
        font-weight: normal;
      }
      @font-face {
        font-family: 'TextMedium';
        font-style: normal;
        font-weight: normal;
      }      
      @font-face {
        font-family: 'TextRegular';
        font-style: normal;
        font-weight: normal;
      }    
    `,
  },
  MuiAppBar: {
    styleOverrides: {
      colorDefault: {
        backgroundColor: palette.common.white,
        color: 'inherit',
        borderBottom: `1px solid ${palette.border.header}`,
      },
    },
    defaultProps: {
      elevation: 0,
      color: 'default',
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 24,
        '@media (min-width: 1200px)': {
          minHeight: 64,
        },
      },
    },
    defaultProps: {
      disableGutters: true,
    },
  },
  MuiContainer: {
    defaultProps: {
      disableGutters: true,
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
      square: true,
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        backgroundColor: palette.background.paper,
        border: '1px solid',
        borderColor: palette.primary.dark,
      },
      // paperWidthFalse
      paperWidth400: {
        maxWidth: 400,
      },
      paperWidth800: {
        maxWidth: 800,
      },
      paperWidth820: {
        maxWidth: 820,
      },
      paperWidth838: {
        maxWidth: 838,
      },
      paperWidthXs: {
        maxWidth: 380,
      },
      paperWidthSm: {
        maxWidth: 500,
      },
      paperWidthMd: {
        maxWidth: 776,
      },
      paperWidthLg: {
        maxWidth: 1000,
      },
      paperWidthXl: {
        maxWidth: 1300,
      },
      // paperFullWidth
    },
    defaultProps: {
      PaperProps: {
        elevation: 2,
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiList: {
    defaultProps: {
      disablePadding: true,
    },
  },
  MuiListItem: {
    defaultProps: {
      disablePadding: true,
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        padding: 0,
        '&.Mui-focusVisible, &:hover': {
          // color: palette.common.white,
          backgroundColor: palette.background.cell,
        },
        // '&.Mui-selected': {
        //   color: palette.common.black,
        // },
      },
    },
    defaultProps: {
      disableGutters: true,
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        margin: '0 4px',
      },
    },
  },
  MuiMenu: {
    defaultProps: {
      elevation: 0,
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        minHeight: 38,
        padding: '6px 12px',
        '&:hover, &.Mui-focusVisible': {
          color: palette.common.black,
          backgroundColor: palette.background.cell,
        },
        '&.Mui-selected:not(.Mui-disabled), &.Mui-selected:hover, &.Mui-selected.Mui-focusVisible': {
          fontFamily: 'TextMedium',
          color: palette.common.black,
          backgroundColor: palette.background.cell,
        },
      },
    },
  },
  MuiAccordion: {
    defaultProps: {
      disableGutters: true,
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      disableTouchRipple: true,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: 14,
        textTransform: 'none',
        padding: '0 15px',
        WebkitTransition: 'all 0.15s ease-out',
        transitionDelay: 'all 0.15s ease-out',
      },
      contained: ({ ownerState, theme }) => ({
        '&:hover, &.Mui-focused': {
          opacity: 0.9,
          backgroundColor: theme.palette[ownerState.color].main,
        },
      }),
      text: {
        '&:hover, &.Mui-focused': {
          backgroundColor: 'inherit',
        },
      },
      outlined: ({ ownerState }) => ({
        '&:hover, &.Mui-focused': {
          borderColor: '#888888',
          backgroundColor: palette.common.white,
        },
      }),
      // containedPrimary: {}, c1
      // containedSecondary: {}, c4
      // containedGray: {}, c2
      containedEtc: {
        // s2
        backgroundColor: palette.secondary.main,
        color: palette.common.white,
      },
      outlinedPrimary: {
        // c3
        borderColor: '#d2d2d2',
        color: palette.common.black,
        backgroundColor: palette.common.white,
        '&:hover, &.Mui-focused': {
          borderColor: '#aaaaaa',
        },
      },
      outlinedSecondary: {
        // c5
        '&:hover, &.Mui-focused': {
          borderColor: '#0087b5',
        },
      },
      outlinedGray: {
        // s1
        borderColor: '#c3c3c3',
        color: '#555555',
        backgroundColor: palette.common.white,
      },
      sizeSmall: {
        fontSize: 13,
        height: 32,
        lineHeight: '32px',
        [`&:not(.${buttonClasses.fullWidth})`]: {
          width: 'auto',
          minWidth: 50,
        },
      },
      sizeMedium: {
        height: 38,
        lineHeight: '38px',
        [`&.${buttonClasses.contained}:not(.${buttonClasses.fullWidth}), &.${buttonClasses.outlined}:not(.${buttonClasses.fullWidth})`]: {
          width: 'auto',
          minWidth: 96,
        },
      },
      sizeLarge: {
        height: 40,
        lineHeight: '34px',
        [`&:not(.${buttonClasses.fullWidth})`]: {
          width: 'auto',
          minWidth: 100,
        },
      },
      sizeXl: {
        height: 40,
        lineHeight: '34px',
        [`&:not(.${buttonClasses.fullWidth})`]: {
          width: 'auto',
          minWidth: 120,
        },
      },
      endIcon: {
        marginLeft: '4px',
      },
    },
    defaultProps: {
      variant: 'contained',
      disableElevation: true,
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        padding: 0,
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '&.Mui-disabled': {
          opacity: 0.2,
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
      // fullWidth: true,
    },
    variants: [
      {
        props: { size: 'small' },
        style: {
          [`& .${inputBaseClasses.root}.${outlinedInputClasses.root}:not(.${inputBaseClasses.multiline})`]: {
            minHeight: 32,
          },
        },
      },
      {
        props: { size: 'medium' },
        style: ({ ownerState }) => {
          return {
            [`& .${inputBaseClasses.root}.${outlinedInputClasses.root}:not(.${inputBaseClasses.multiline})`]: {
              minHeight: ownerState.InputProps?.sx?.height || 38,
            },
          };
        },
      },
      {
        props: { size: 'large' },
        style: {
          [`& .${inputBaseClasses.root}.${outlinedInputClasses.root}:not(.${inputBaseClasses.multiline})`]: {
            minHeight: 40,
          },
        },
      },
      {
        props: { width: 'w1' },
        style: {
          width: 200,
        },
      },
      {
        props: { width: 'w2' },
        style: {
          width: 300,
        },
      },
      {
        props: { width: 'w3' },
        style: {
          width: 400,
        },
      },
    ],
  },
  MuiFormControl: {
    styleOverrides: {
      fullWidth: {
        flex: 1,
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: ({ ownerState }) => {
        if (!ownerState.label) {
          return { margin: 0 };
        }
      },
      labelPlacementStart: {
        '& > .MuiCheckbox-root': {
          padding: '0 0 0 6px',
        },
      },
      labelPlacementEnd: {
        '& > .MuiCheckbox-root': {
          padding: '0 6px 0 0',
        },
      },
    },
  },
  MuiInputLabel: {},
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: 11,
        margin: '3px 8px 0',
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        [`&:not(.${inputBaseClasses.multiline})`]: {
          fontSize: 14,
          lineHeight: 1.5,
          height: '100%',
          padding: '0 12px',
        },
        // [`&.${inputBaseClasses.adornedEnd}`]: {
        //   paddingRight: 0,
        // },
      },
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
        },
      },
    },
  },
  // MuiInput: {},
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const readOnly = ownerState?.inputProps?.readOnly;
        return {
          border: `1px solid ${palette.border.input}`,
          backgroundColor: palette.common.white,
          '&:not(.Mui-disabled):not(.Mui-error):hover, &:not(.Mui-disabled):not(.Mui-error).Mui-focused': {
            // boxShadow: `0 0 3px 0 ${palette.shdow.hover}`,
            borderColor: !readOnly ? palette.action.focus : palette.border.input,
          },
          '&.Mui-error': {
            borderColor: palette.error.main,
          },
          '&.Mui-disabled': {
            backgroundColor: '#f4f4f4',
          },
          [`& .${outlinedInputClasses.notchedOutline}, &.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            // the result will contain the prefix.
            border: 'none',
          },
        };
      },
      input: {
        padding: 0,
      },
      multiline: {
        padding: 0,
        '& textarea': {
          padding: '9px 12px',
        },
      },
    },
    defaultProps: {
      notched: true,
    },
  },
  MuiSelect: {
    styleOverrides: {
      icon: {
        color: palette.common.black,
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        padding: '0 10px',
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '&.Mui-disabled': {
          opacity: 0.3,
        },
      },
    },
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        marginTop: '30px',
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: {
        borderTop: `2px solid ${palette.primary.main}`,
        tableLayout: 'fixed',
      },
    },
    defaultProps: {},
  },
  MuiTableHead: {
    styleOverrides: {
      root: {},
    },
    defaultProps: {},
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        [`&.${tableRowClasses.hover}:hover`]: {
          cursor: 'pointer',
          backgroundColor: palette.background.cell,
        },
        '&.shading': {
          backgroundColor: alpha(palette.action.active, 0.5),
        },
        '&.emphasis': {
          backgroundColor: '#ffefe4',
        },
        '&.selected': {
          backgroundColor: '#fcf8e3',
        },
        '&.total, &.total:hover': {
          backgroundColor: `${palette.background.cell} !important`,
        },
      },
    },
    defaultProps: {},
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: '5px 8px',
        borderBottom: 'none',
        [`&.${tableCellClasses.head}`]: {
          height: 51,
          backgroundColor: palette.background.cell,
          borderBottom: `1px solid ${palette.border.main}`,
          color: palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
          ...typography.body1,
          height: 51,
          borderBottom: `1px solid ${palette.border.main}`,
          wordBreak: 'break-all',
          color: palette.common.black,
        },
      },
    },
    defaultProps: {},
  },
  MuiDataGrid: {
    styleOverrides: {
      root: {
        border: 'none',
        fontSize: 14,
        [`&.${gridClasses.autoHeight} .${gridClasses['row--lastVisible']} .${gridClasses.cell}`]: {
          borderBottomColor: palette.border.main,
        },
      },
      main: {
        borderTop: `2px solid ${palette.primary.main}`,
        // borderBottom: `1px solid ${palette.border.main}`,
        '& .active, & .action:hover': {
          backgroundColor: palette.action.active,
        },
        '& .shading': {
          backgroundColor: alpha(palette.action.active, 0.5),
        },
        '& .emphasis': {
          backgroundColor: '#ffefe4',
        },
        '& .selected': {
          backgroundColor: '#fcf8e3',
        },
        '& .total, & .total:hover': {
          backgroundColor: `${palette.background.cell} !important`,
        },
      },
      columnHeaders: {
        height: 52.5,
        background: palette.background.cell,
        borderBottom: `1px solid ${palette.border.main}`,
        color: palette.common.black,
        fontWeight: 'normal',
      },
      columnHeader: {
        textAlign: 'center',
        padding: '5px 8px',
        '&:focus, &:focus-within': {
          outline: 'none',
        },
        [`& .${gridClasses.columnHeaderTitleContainerContent}`]: {
          lineHeight: 1.5,
        },
      },
      columnHeaderTitle: {
        lineHeight: 1.5,
      },
      cell: {
        borderBottom: `1px solid ${palette.border.main}`,
        wordBreak: 'break-all',
        color: palette.common.black,
        '&:focus, &:focus-within': {
          outline: 'none',
        },
      },
      row: {
        '&:hover': {
          backgroundColor: palette.background.cell,
        },
        '&.Mui-selected': {
          backgroundColor: alpha(palette.background.cell, 0.6),
          '&:hover': {
            backgroundColor: alpha(palette.background.cell, 0.8),
          },
        },
        '&.cursor-pointer': {
          cursor: 'pointer',
        },
        '&.no-hover:hover': {
          backgroundColor: 'transparent',
        },
      },
      virtualScrollerContent: {
        height: 80,
        borderBottom: `1px solid ${palette.border.main}`,
      },
      columnSeparator: {
        display: 'none',
      },
      toolbarContainer: {
        display: 'block',
      },
      overlay: {
        fontSize: 20,
        fontWeight: 700,
        color: palette.text.light,
        backgroundColor: palette.background.paper,
      },
      footer: {
        paddingTop: '30px',
      },
    },
    defaultProps: {
      autoHeight: true,
      headerHeight: 52.5,
      rowHeight: 52.5,
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        height: 'auto',
      },
      colorSecondary: {
        backgroundColor: '#ef1818',
      },
      label: {
        fontFamily: 'TextRegular',
        fontSize: 12,
        padding: '6px 10px',
      },
    },
    defaultProps: {
      color: 'secondary',
    },
    variants: [
      {
        props: { type: 'rect' },
        style: {
          borderRadius: 0,
        },
      },
    ],
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        display: 'none',
      },
      flexContainer: {
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderBottom: `1px solid ${palette.primary.dark}`,
        },
      },
    },
  },
  // Tab
  MuiTab: {
    styleOverrides: {
      root: {
        border: `1px solid ${palette.divider}`,
        borderBottom: `1px solid ${palette.primary.dark}`,
        backgroundColor: palette.background.search,
        fontSize: 15,
        '&.Mui-selected': {
          border: `1px solid ${palette.primary.dark}`,
          borderBottom: `1px solid ${palette.common.white}`,
          backgroundColor: palette.background.paper,
          color: palette.primary.dark,
        },
        '&.Mui-disabled': {
          color: palette.text.disabled,
        },
      },
      textColorPrimary: {
        color: palette.text.secondary,
      },
    },
  },
};

export default components;
