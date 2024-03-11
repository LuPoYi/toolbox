import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CustomThemeProvider } from './contexts/ThemeContext';
import Layout from './Layout';
import { Web3OnboardProvider, init } from '@web3-onboard/react';
import { chains } from './configs';
import injectedModule from '@web3-onboard/injected-wallets';
import { routes } from './routes';

const injected = injectedModule();

const web3Onboard = init({
  wallets: [injected],
  chains,
});

function App() {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <CustomThemeProvider>
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
      </CustomThemeProvider>
    </Web3OnboardProvider>
  );
}

export default App;
