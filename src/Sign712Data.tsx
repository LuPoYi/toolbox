import { useState } from "react";

import { Box, Button, Stack } from "@mui/material";
import { TextField } from "./components/TextField";
import { jsonParser } from "./utils";
import { useRootStore } from "./store/root";

function Sign712Data() {
  const { signer } = useRootStore();
  const [types, setTypes] = useState("");
  const [domain, setDomain] = useState("");
  const [value, setValue] = useState("");
  const [isValidTypes, setIsValidTypes] = useState(true);
  const [isValidDomain, setIsValidDomain] = useState(true);
  const [isValidValue, setIsValidValue] = useState(true);

  const handleClick = () => {
    (async () => {
      if (!signer) return;
      try {
        const sig = await signer.signTypedData(
          jsonParser(domain),
          jsonParser(types),
          jsonParser(value)
        );
        console.log("sig :>> ", sig);
      } catch (err) {
        console.error(err);
      }
    })();
  };
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ marginBottom: 10, marginTop: 3 }}
      >
        Sign 712 Data
      </Box>
      <Stack
        spacing={{ xs: 1, sm: 5 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        display="flex"
        justifyContent="center"
      >
        <Box>
          <TextField
            id="outlined-multiline-static"
            label="types"
            multiline
            rows={16}
            value={types}
            sx={{
              "& .MuiInputBase-root": {
                color: isValidTypes ? "white" : "red",
                backgroundColor: "#31343A",
              },
            }}
            onChange={(event) => {
              setTypes(event.target.value);
              try {
                setIsValidTypes(true);
                !!event.target.value.length && jsonParser(event.target.value);
              } catch (error) {
                setIsValidTypes(false);
                console.log("invalid json string");
              }
            }}
          />
        </Box>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="domain"
            multiline
            rows={16}
            value={domain}
            sx={{
              "& .MuiInputBase-root": {
                color: isValidDomain ? "white" : "red",
                backgroundColor: "#31343A",
              },
            }}
            onChange={(event) => {
              setDomain(event.target.value);
              try {
                setIsValidDomain(true);
                !!event.target.value.length && jsonParser(event.target.value);
              } catch (error) {
                setIsValidDomain(false);
                console.log("invalid json string");
              }
            }}
          />
        </Box>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="value"
            multiline
            rows={16}
            value={value}
            sx={{
              "& .MuiInputBase-root": {
                color: isValidValue ? "white" : "red",
                backgroundColor: "#31343A",
              },
            }}
            onChange={(event) => {
              setValue(event.target.value);
              try {
                setIsValidValue(true);
                !!event.target.value.length && jsonParser(event.target.value);
              } catch (error) {
                setIsValidValue(false);
                console.log("invalid json string");
              }
            }}
          />
        </Box>
      </Stack>
      <Box display="flex" justifyContent="center" sx={{ marginTop: 5 }}>
        <Button
          onClick={handleClick}
          variant="contained"
          style={{ background: "#4E535D" }}
        >
          sign
        </Button>
      </Box>
    </Box>
  );
}

export default Sign712Data;
