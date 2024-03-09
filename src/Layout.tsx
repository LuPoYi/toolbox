import { useEffect, useState } from 'react';

import AppBar from './components/AppBar';
import Box from '@mui/material/Box';
import { Button, useMediaQuery } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import DrawerHeader from './components/DrawerHeader';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Main from './components/Main';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Outlet } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import WeatherNight from 'mdi-material-ui/WeatherNight';
import WeatherSunny from 'mdi-material-ui/WeatherSunny';
import { routes } from './routes';
import { styled, useTheme } from '@mui/material/styles';
import { useConnectWallet } from '@web3-onboard/react';
import { useRootStore } from './store/root';
import { useThemeContext } from './contexts/ThemeContext';

const drawerWidth = 240;

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',

  '&.active div[role="button"], & div[role="button"]:hover': {
    boxShadow: theme.shadows[3],
    background: theme.palette.primary.main,
  },
}));

export default function Layout() {
  const theme = useTheme();
  const { themeMode, toggleTheme } = useThemeContext();
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const { setWallet } = useRootStore();

  useEffect(() => {
    setWallet(wallet);
  }, [wallet, setWallet]);

  // contral drawer
  const [isDrawerOpen, setIsDrawOpen] = useState(useMediaQuery(theme.breakpoints.up('sm')));

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={isDrawerOpen} drawer_width={drawerWidth} enableColorOnDark color="transparent">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setIsDrawOpen(true)}
            edge="start"
            sx={{ mr: 2, ...(isDrawerOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tool box
          </Typography>
          <IconButton color="inherit" aria-haspopup="true" onClick={() => toggleTheme()}>
            {themeMode === 'light' ? <WeatherSunny /> : <WeatherNight />}
          </IconButton>
          <Button variant="contained" disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())}>
            {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
      >
        <DrawerHeader>
          <IconButton onClick={() => setIsDrawOpen(false)}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon style={{ color: 'white' }} />
            ) : (
              <ChevronRightIcon style={{ color: 'white' }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List disablePadding>
          {routes.map(({ displayName, path }) => (
            <StyledNavLink to={path} key={displayName}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={displayName} />
                </ListItemButton>
              </ListItem>
            </StyledNavLink>
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
