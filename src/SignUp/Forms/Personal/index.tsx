import {Grid, TextField} from '@mui/material';
import React from 'react';

export const Personal = () => {

  return (
    <Grid container direction="column" justifyItems="center" alignItems="center">
      <Grid item xs={12}>
        <Grid container spacing={6} justifyItems="center" alignItems="center">
          <Grid item xs={12}>
            <TextField label="First name" name="firstname" fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Last name" name="lastname" fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" name="email" fullWidth/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};