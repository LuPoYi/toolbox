import { useState } from "react";

import BN from "bignumber.js";
import { Box, Stack } from "@mui/material";
import { TextField } from "./components/TextField";

const scale: Record<string, number> = {
  wei: 0,
  gwei: 9,
  ether: 18,
};
const _scale = Object.entries(scale).map(([, decimal]) => decimal);

function UnitConvter() {
  const [unit, setUnit] = useState(Object.keys(scale).map(() => "0"));

  const handleOnChange = (index: number, value: string) => {
    let _unit = [...unit];
    try {
      _unit = Object.entries(scale).map(([, decimal], i) => {
        const n = new BN(value).times(new BN(10).pow(_scale[index] - decimal));
        if (n.isNaN()) return "";
        return index === i ? value : n.toFixed();
      });
      setUnit(_unit);
    } catch (error) {}
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ marginBottom: 10, marginTop: 3 }}
      >
        Unit Converter
      </Box>
      <Stack>
        {Object.entries(scale).map(([key], i) => (
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 15 }}
            key={key}
          >
            <TextField
              style={{ marginRight: 20, width: "50%" }}
              onChange={(e) => handleOnChange(i, e.target.value)}
              value={unit[i]}
              placeholder="0"
            />
            {key}
          </div>
        ))}
      </Stack>
    </Box>
  );
}

export default UnitConvter;
