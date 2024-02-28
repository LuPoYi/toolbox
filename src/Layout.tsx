import { useState } from "react";

import AppBar from "./components/AppBar";
import Box from "@mui/material/Box";
import { Button, useMediaQuery } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import DrawerHeader from "./components/DrawerHeader";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Main from "./components/Main";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Outlet } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { routes } from "./routes";
import { useConnectWallet } from "@web3-onboard/react";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240;

export default function Layout() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const theme = useTheme();

  // contral drawer
  const [isDrawerOpen, setIsDrawOpen] = useState(
    useMediaQuery(theme.breakpoints.up("sm"))
  );

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        open={isDrawerOpen}
        drawer_width={drawerWidth}
        style={{ backgroundColor: "#202020" }}
        enableColorOnDark
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setIsDrawOpen(true)}
            edge="start"
            sx={{ mr: 2, ...(isDrawerOpen && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tool box
          </Typography>
          <Button
            color="inherit"
            disabled={connecting}
            onClick={() => (wallet ? disconnect(wallet) : connect())}
          >
            {connecting ? "connecting" : wallet ? "disconnect" : "connect"}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#202020",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
      >
        <DrawerHeader>
          <IconButton onClick={() => setIsDrawOpen(false)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "white" }} />
            ) : (
              <ChevronRightIcon style={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routes.map(({ displayName, path }) => (
            <NavLink
              to={path}
              key={displayName}
              style={{ textDecoration: "none" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={displayName} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
      <Main open={isDrawerOpen} drawer_width={drawerWidth}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
