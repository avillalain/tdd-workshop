import {Grid, TextField} from '@mui/material';
import React from 'react';

export const Organization = () => {

  return (
    <Grid container direction="column" justifyItems="center" alignItems="center">
      <Grid item xs={12}>
        <Grid container spacing={6} justifyItems="center" alignItems="center">
          <Grid item xs={12}>
            <TextField label="Organization" name="organization" fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Position" name="position" fullWidth/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};