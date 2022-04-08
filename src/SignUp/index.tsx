import {Box, Button, Grid, Paper, Stack, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {useStyle} from '../styles';
import {Personal} from './Forms/Personal';

interface StepComponents {
  children: JSX.Element[];
  currentStep: number;
}

const Steps = (props: StepComponents) => {
  return (
    <>
      {props.children[props.currentStep]}
    </>
  )
}

export const SignUp = () => {
  const classes = useStyle();
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <Grid item xs={4}>
        <Paper className={classes.paper} sx={{height: '50vh'}}>
          <Box sx={{height: '90%'}}>
            <Typography color="textSecondary" align="center">
              Create an Account
            </Typography>
          </Box>
          <Box sx={{justifyContent: "flex-end"}} >
            <Stack sx={{float: 'right'}} direction="row" spacing={2}>
              <Button sx={{float: 'right'}} variant={"contained"} onClick={() => setCurrentStep(currentStep+1)}>Next</Button>
            </Stack>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper} sx={{height: '50vh'}}>
          <Steps currentStep={currentStep}>
            <Personal/>
            <Grid container direction="column" justifyItems="center" alignItems="center">
              <Grid item xs={12}>
                <Grid container spacing={6} justifyItems="center" alignItems="center">
                  <Grid item xs={12}>
                    <TextField label="Organization" name="organization" fullWidth/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Steps>
        </Paper>
      </Grid>
    </>
  );
};