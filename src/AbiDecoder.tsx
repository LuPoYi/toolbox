import { useEffect, useState } from 'react';

import { Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import InputDataDecoder from 'ethereum-input-data-decoder';

function AbiDecoder() {
  const [abi, setAbi] = useState('');
  const [txData, setTxData] = useState('');
  const [decodedData, setDecodedData] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const decoder = new InputDataDecoder(abi);
        const r = decoder.decodeData(txData);
        setDecodedData(JSON.stringify(r, null, 2));
      } catch (error) {
        console.log('error :>> ', error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [abi, txData]);

  return (
    <Card>
      <CardHeader title="Abi Decoder" />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="ABI" multiline fullWidth rows={16} onChange={(e) => setAbi(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Tx Data" multiline fullWidth rows={16} onChange={(e) => setTxData(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="data" multiline fullWidth rows={16} disabled value={decodedData} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AbiDecoder;
