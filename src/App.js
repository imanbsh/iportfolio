import React, { useState, useEffect } from "react";
import {
  Tooltip,
  Menu,
  Grid,
  MenuList,
  MenuItem,
  Divider,
  Paper,
  Typography,
  ListItemText,
  Button,
  Box,
  Chip,
  Dialog,
  TextField,
  IconButton,
  CircularProgress,
  InputLabel,
  FormControl,
  Select,
  Switch,
  Pagination,
  Alert,
  Hidden,
  InputBase,
  Snackbar,
  FormControlLabel,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardMedia,
  Autocomplete,
  Checkbox,
  MuiAlert,
  Slide,
  ButtonGroup,
  Fade,
} from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import Home from "./components/home";

// const theme = createTheme({
//   palette: {
//     mode: "light",
//     P: {
//       main: "#CB929B",
//     },
//     Black: {
//       main: "#000000",
//     },
//     White: {
//       main: "#ffffff",
//     },
//   },

//   typography: {
//     fontFamily: "monospace",
//     fontStyle: "normal",
//     h1: {
//       fontWeight: "700",
//       fontSize: "30px",
//     },
//     h4: {
//       fontWeight: "400",
//       fontSize: "20px",
//     },
//   },
// });
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode
    }),
    [mode]
  );
console.log(mode)
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          P: {
            main: "#CB929B",
          },
          Black: {
            main: "#000000",
          },
          White: {
            main: "#ffffff",
          },
        },

        typography: {
          fontFamily: "monospace",
          fontStyle: "normal",
          h1: {
            fontWeight: "700",
            fontSize: "30px",
          },
          h4: {
            fontWeight: "400",
            fontSize: "20px",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Grid sx={{ width: "100vw", height: "100vh" }}>
          <Home />
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
