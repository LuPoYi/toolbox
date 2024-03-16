import AbiDecoder from './AbiDecoder';
import AbiEncoder from './AbiEncoder';
import BuildIcon from '@mui/icons-material/Build';
import DrawIcon from '@mui/icons-material/Draw';
import Sign712Data from './Sign712Data';
import UnitConvter from './UnitConverter';

type Route = {
  displayName: string;
  path: string;
  icon: React.ReactNode;
  component: React.ReactNode;
};

export const routes: Route[] = [
  {
    displayName: 'Unit Converter',
    path: '/uc',
    icon: <BuildIcon />,
    component: <UnitConvter />,
  },
  {
    displayName: 'ABI Decoder',
    path: '/abi-decoder',
    icon: <BuildIcon />,
    component: <AbiDecoder />,
  },
  {
    displayName: 'Sign 712 Data',
    path: '/sign-712-data',
    icon: <DrawIcon />,
    component: <Sign712Data />,
  },
  {
    displayName: 'ABI Encoder',
    path: '/abi-encoder',
    icon: <BuildIcon />,
    component: <AbiEncoder />,
  },
];
