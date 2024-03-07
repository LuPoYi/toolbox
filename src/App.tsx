import React from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { ThemeProvider } from '@emotion/react';
import { Web3OnboardProvider, init } from '@web3-onboard/react';
import { chains } from './configs';
import { createTheme } from '@mui/material';
import injectedModule from '@web3-onboard/injected-wallets';
import palette from './theme/palette';
import { routes } from './routes';

const injected = injectedModule()

const web3Onboard = init({
  wallets: [injected],
  chains,
})

const theme = createTheme({
  // palette: {
  //   background: { default: "#272727" },
  // },
  palette: palette('dark', 'primary'),
  typography: {
    allVariants: {
      color: "white",
    },
  },
})

function App() {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {routes.map(({ path, component }) => (
                <Route key={path} path={path} element={component} />
              ))}
              <Route path="/*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Web3OnboardProvider>
  )
}

export default App
