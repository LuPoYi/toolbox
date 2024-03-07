import { useEffect, useState } from 'react';

import { Grid, Typography } from '@mui/material';
import InputDataDecoder from 'ethereum-input-data-decoder';
import { TextField } from './components/TextField';

function AbiDecoder() {
  const [abi, setAbi] = useState("")
  const [txData, setTxData] = useState("")
  const [decodedData, setDecodedData] = useState("")

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const decoder = new InputDataDecoder(abi)
        const r = decoder.decodeData(txData)
        setDecodedData(JSON.stringify(r, null, 2))
      } catch (error) {
        console.log("error :>> ", error)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [abi, txData])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h5">Abi Decoder</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="ABI"
          multiline
          fullWidth
          rows={16}
          sx={{ "& .MuiOutlinedInput-root": { alignItems: "baseline" } }}
          onChange={(e) => setAbi(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Tx Data"
          multiline
          fullWidth
          rows={16}
          sx={{ "& .MuiOutlinedInput-root": { alignItems: "baseline" } }}
          onChange={(e) => setTxData(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="data"
          multiline
          fullWidth
          rows={16}
          disabled
          value={decodedData}
          sx={{
            "& .MuiInputBase-root": {
              color: "white",
              backgroundColor: "#31343A",
              "&.Mui-disabled fieldset": {
                borderColor: "white",
              },
              ".Mui-disabled": {
                WebkitTextFillColor: "white",
              },
            },
          }}
        />
      </Grid>
    </Grid>
  )
}

export default AbiDecoder
