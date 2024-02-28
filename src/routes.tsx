import AbiDecoder from "./AbiDecoder";
import Sign712Data from "./Sign712Data";
import UnitConvter from "./UnitConverter";

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
    displayName: "Abi Decoder",
    path: "/abi-decoder",
    component: <AbiDecoder />,
  },
  {
    displayName: "Sign 712 Data",
    path: "/sign-712-data",
    component: <Sign712Data />,
  },
];
