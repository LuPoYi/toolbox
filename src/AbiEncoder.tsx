import { useEffect, useState } from 'react';

import { Card, CardContent, CardHeader, Grid, Select, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { ethers } from 'ethers';
import { jsonParser } from './utils';

function AbiEncoder() {
  const [abi, setAbi] = useState('');
  const [funcSigs, setFuncSigs] = useState<string[][]>([]);
  const [selectedSig, setSelectedSig] = useState('-');
  const [funcParams, setFuncParams] = useState<string[]>([]);
  const [encodedData, setEncodedData] = useState('');
  const [paramsData, setParamsData] = useState<string[]>([]);

  useEffect(() => {
    try {
      setSelectedSig('-');
      const _abi = jsonParser(abi);
      const iface = new ethers.Interface(_abi);
      const _funcSigs: string[][] = [];
      iface.forEachFunction((funcFragment) => _funcSigs.push([funcFragment.format(), funcFragment.selector]));
      setFuncSigs(_funcSigs);
    } catch (error) {
      setFuncSigs([]);
    }
  }, [abi]);

  useEffect(() => {
    setFuncParams([]);
    setParamsData([]);
    if (selectedSig === '-') return;
    const _abi = jsonParser(abi);
    const iface = new ethers.Interface(_abi);
    const funcFragment = iface.getFunction(selectedSig)!;
    const _funcParams = funcFragment.inputs.map(({ name, type }) => `${name}(${type})`);
    console.log('_funcParams :>> ', _funcParams);
    setFuncParams(_funcParams);
  }, [selectedSig]);

  const handleOnChange = (i: number, data: string) => {
    const _paramsData = [...paramsData];
    _paramsData[i] = data;
    setParamsData(_paramsData);
  };

  useEffect(() => {
    try {
      const _abi = jsonParser(abi);
      const iface = new ethers.Interface(_abi);
      const txData = iface.encodeFunctionData(
        selectedSig,
        paramsData.map((value) =>
          (value.startsWith('[') && value.endsWith(']')) || (value.startsWith('{') && value.endsWith('}'))
            ? jsonParser(value)
            : value
        )
      );
      setEncodedData(txData);
    } catch (error) {
      setEncodedData('');
    }
  }, [paramsData, selectedSig]);

  return (
    <Card>
      <CardHeader title="Abi Encoder" />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="ABI" multiline fullWidth rows={16} onChange={(e) => setAbi(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Select
              fullWidth
              value={selectedSig}
              onChange={(e) => setSelectedSig(e.target.value)}
              style={{ maxWidth: 350 }}
            >
              {funcSigs.map(([funcName, sig]) => (
                <MenuItem value={sig}>
                  {sig}-{funcName}
                </MenuItem>
              ))}
            </Select>
            {funcParams.length > 0 &&
              funcParams.map((param, i) => (
                <div>
                  {param}
                  <TextField key={param} value={paramsData[i]} onChange={(e) => handleOnChange(i, e.target.value)} />
                </div>
              ))}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="TxData:" multiline fullWidth rows={16} disabled value={encodedData} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AbiEncoder;
