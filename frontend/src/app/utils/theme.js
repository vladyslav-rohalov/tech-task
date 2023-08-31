"use client";
import { createTheme } from "@mui/material";

export const myTheme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#324376",
      light: "#586ba4",
      info: "#f5dd90",
      accent: "#f68e5f",
      hot: "#f76c5e",
      dim: "#f5f6fa",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
          "&.MuiOutlinedInput": {
            zIndex: 2,
          },
        }),
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover .MuiOutlinedInput-notchedOutline ": {
            borderColor: theme.palette.primary.light,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
        }),
        icon: ({ theme }) => ({
          fill: theme.palette.primary.light,
        }),
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover": {
            backgroundColor: theme.palette.primary.dim,
          },
          "&:active": {
            backgroundColor: theme.palette.primary.light,
          },
          "&.MuiMenuItem-root.Mui-selected": {
            backgroundColor: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.light,
          "&.Mui-checked": {
            "& svg": {
              color: theme.palette.primary.light,
            },
          },
        }),
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          ul: {
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: theme.palette.primary.light,
              color: "#fff",
            },
            "& svg": {
              color: theme.palette.primary.light,
            },
          },
        }),
      },
    },

    MuiSpeedDial: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiFab-primary": {
            width: 46,
            height: 46,
            backgroundColor: theme.palette.primary.light,
          },
        }),
      },
    },
  },
});
