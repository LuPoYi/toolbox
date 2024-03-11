import { useState } from 'react';

import BN from 'bignumber.js';
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';

const scale: Record<string, number> = {
  wei: 0,
  gwei: 9,
  ether: 18,
};
const _scale = Object.entries(scale).map(([, decimal]) => decimal);

function UnitConvter() {
  const [unit, setUnit] = useState(Object.keys(scale).map(() => '0'));

  const handleOnChange = (index: number, value: string) => {
    let _unit = [...unit];
    try {
      _unit = Object.entries(scale).map(([, decimal], i) => {
        const n = new BN(value).times(new BN(10).pow(_scale[index] - decimal));
        if (n.isNaN()) return '';
        return index === i ? value : n.toFixed();
      });
      setUnit(_unit);
    } catch (error) {}
  };

  return (
    <Grid container spacing={6}>
      <Grid item sm={12} md={6}>
        <Card>
          <CardHeader title="Unit Converter" />
          <CardContent>
            {Object.entries(scale).map(([key], i) => (
              <FormControl key={key} fullWidth sx={{ marginTop: 3 }}>
                <InputLabel htmlFor={key}>{key}</InputLabel>
                <OutlinedInput
                  key={key}
                  label={key}
                  value={unit[i]}
                  onChange={(e) => handleOnChange(i, e.target.value)}
                  endAdornment={<InputAdornment position="end">{key}</InputAdornment>}
                />
              </FormControl>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default UnitConvter;
