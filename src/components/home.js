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
import video from "../assets/video.mp4";

// icons
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Home = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  console.log(colorMode);
  return (
    //main container
    <Grid
      sx={{
        height: "100%",
        padding: "30px",
      }}
    >
      <video
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          minWidth: "100%",
          minHeight: "100%",
          zIndex:-100
        }}
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* inside frame */}
      <Grid
        sx={{
          border: "1px solid white",
          height: "100%",
          padding: "30px",
          display: "flex",
          backgroundColor:"rgba(100,100,100,0.3)",
          justifyContent: "space-between",
        }}
      >
        {/* inside content */}
        {/* top left content */}
        <Grid>
          {/* {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit"> */}
          {/* {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} */}
          {/* </IconButton> */}
          <Typography color="White.main" variant="h1">
            Alireza Bagherpour Shirazi
          </Typography>
          <Typography
            color="White.main"
            variant="h4"
            sx={{ marginTop: "10px" }}
          >
            Full Stack Developer
          </Typography>
          {/* links */}
          <Grid
            sx={{
              height: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: "50px",
            }}
          >
            <Typography color="White.main">projects</Typography>
            <Typography color="White.main">Info</Typography>
            <Typography color="White.main">Contact</Typography>
          </Grid>
        </Grid>
        {/* bottom right content */}
        <Grid
          sx={{ display: "flex", alignSelf: "end", flexDirection: "column" }}
        >
          <Typography color="White.main">Born in 1998</Typography>
          <Typography color="White.main">in Shiraz, Iran</Typography>
          <Typography color="White.main">as Bill Gates said,</Typography>
          <Typography color="White.main">"The computer was born</Typography>
          <Typography color="White.main">to solve problems</Typography>
          <Typography color="White.main">
            that did not exist before."
          </Typography>
          <Typography color="White.main">And I believe,</Typography>
          <Typography color="White.main">I'm here to code</Typography>
          <Typography color="White.main">
            everything you can imagine.
          </Typography>
          <Typography color="White.main">:)</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
