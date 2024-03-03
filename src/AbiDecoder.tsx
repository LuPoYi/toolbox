import { useEffect, useState } from "react";

import { Box, Stack } from "@mui/material";
import InputDataDecoder from "ethereum-input-data-decoder";
import { TextField } from "./components/TextField";

function AbiDecoder() {
  const [abi, setAbi] = useState("");
  const [txData, setTxData] = useState("");
  const [decodedData, setDecodedData] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const decoder = new InputDataDecoder(abi);
        const r = decoder.decodeData(txData);
        setDecodedData(JSON.stringify(r, null, 2));
      } catch (error) {
        console.log("error :>> ", error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [abi, txData]);

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ marginBottom: 10, marginTop: 3 }}
      >
        Abi Decoder
      </Box>
      <Stack
        spacing={{ xs: 1, md: 5 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        display="flex"
        justifyContent="center"
      >
        <TextField
          label="ABI"
          multiline
          rows={16}
          onChange={(e) => setAbi(e.target.value)}
        />
        <TextField
          label="Tx Data"
          multiline
          rows={16}
          onChange={(e) => setTxData(e.target.value)}
        />
        <TextField
          label="data"
          multiline
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
      </Stack>
    </div>
  );
}

export default AbiDecoder;
