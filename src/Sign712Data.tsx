import { useState } from 'react';

import { Button, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import { jsonParser } from './utils';
import { useRootStore } from './store/root';

function Sign712Data() {
  const { signer } = useRootStore();
  const [types, setTypes] = useState('');
  const [domain, setDomain] = useState('');
  const [value, setValue] = useState('');
  const [isValidTypes, setIsValidTypes] = useState(true);
  const [isValidDomain, setIsValidDomain] = useState(true);
  const [isValidValue, setIsValidValue] = useState(true);

  const handleClick = () => {
    (async () => {
      if (!signer) return;
      try {
        const sig = await signer.signTypedData(jsonParser(domain), jsonParser(types), jsonParser(value));
        console.log('sig :>> ', sig);
      } catch (err) {
        console.error(err);
      }
    })();
  };
  return (
    <Card>
      <CardHeader title="Sign 712 Data" />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="types"
              multiline
              fullWidth
              rows={16}
              value={types}
              onChange={(event) => {
                setTypes(event.target.value);
                try {
                  setIsValidTypes(true);
                  !!event.target.value.length && jsonParser(event.target.value);
                } catch (error) {
                  setIsValidTypes(false);
                  console.log('invalid json string');
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="domain"
              multiline
              fullWidth
              rows={16}
              value={domain}
              onChange={(event) => {
                setDomain(event.target.value);
                try {
                  setIsValidDomain(true);
                  !!event.target.value.length && jsonParser(event.target.value);
                } catch (error) {
                  setIsValidDomain(false);
                  console.log('invalid json string');
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="value"
              multiline
              fullWidth
              rows={16}
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                try {
                  setIsValidValue(true);
                  !!event.target.value.length && jsonParser(event.target.value);
                } catch (error) {
                  setIsValidValue(false);
                  console.log('invalid json string');
                }
              }}
            />
          </Grid>

          <Grid item xs={4} style={{ margin: 'auto' }}>
            <Button fullWidth onClick={handleClick} variant="contained" size="large">
              sign
            </Button>
          </Grid>
        </Grid>{' '}
      </CardContent>
    </Card>
  );
}

export default Sign712Data;
