import {Box, Grid, Paper, TextField, Typography} from '@mui/material';
import React from 'react';
import {useStyle} from '../styles';
import {Personal} from './Forms/Personal';

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
          <Personal/>
        </Paper>
      </Grid>
    </>
  );
};