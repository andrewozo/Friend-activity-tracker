import { Routes, Route } from "react-router-dom";
import Activities from "./components/Activites/Activities";
import SingleActivity from "./components/Activites/SingleActivity";
import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  createTheme,
  ThemeProvider,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";

function Main() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#066839",
        darker: "#066839",
      },
      secondary: {
        main: "#fefae0",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                color="secondary"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <Link to="/" >Meadows Moves</Link>
              </Typography>

              <Button color="secondary">Add New</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
      <Routes>
        <Route path="/" element={<Activities />} />
        <Route path="/:id" element={<SingleActivity />} />
      </Routes>
    </div>
  );
}

export default Main;
