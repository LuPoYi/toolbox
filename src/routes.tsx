import AbiDecoder from './AbiDecoder';
import AbiEncoder from './AbiEncoder';
import Sign712Data from './Sign712Data';
import UnitConvter from './UnitConverter';

type Route = {
  displayName: string;
  path: string;
  component: React.ReactNode;
};

export const routes: Route[] = [
  {
    displayName: "Unit Converter",
    path: "/uc",
    component: <UnitConvter />,
  },
  {
    displayName: "ABI Decoder",
    path: "/abi-decoder",
    component: <AbiDecoder />,
  },
  {
    displayName: "Sign 712 Data",
    path: "/sign-712-data",
    component: <Sign712Data />,
  },
  {
    displayName: "ABI Encoder",
    path: "/abi-encoder",
    component: <AbiEncoder />,
  },
];
