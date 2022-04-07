import {Box, Grid, Paper, TextField, Typography} from '@mui/material';
import React from 'react';
import {useStyle} from '../styles';

export const SignUp = () => {
  const classes = useStyle();

  return (
    <>
      <Grid item xs={4}>
        <Paper className={classes.paper} sx={{height: '50vh'}}>
          <Box sx={{height: '90%'}}>
            <Typography color="textSecondary" align="center">
              Create an Account
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper} sx={{height: '50vh'}}>
          <Grid container direction="column" justifyItems="center" alignItems="center">
            <Grid item xs={12}>
              <Grid container spacing={6} justifyItems="center" alignItems="center">
                <Grid item xs={12}>
                  <TextField label="First name" name="firstname" fullWidth/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};