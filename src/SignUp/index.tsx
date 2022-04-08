import {Box, Button, Grid, Paper, Stack, Typography} from '@mui/material';
import React, {useState} from 'react';
import {useStyle} from '../styles';
import {Steps} from '../Steps';
import {forms, initialValues, schema} from './Forms';
import {Form, Formik} from 'formik';

export const SignUp = () => {
  const classes = useStyle();
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === forms.length - 2;

  const submit = async (values) => {
    fetch('/api/account', {
      method: 'POST',
      body: JSON.stringify(values)
    }).then((res)=> {
      setCurrentStep(currentStep + 1);
    });
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submit(values, actions);
    } else {
      setCurrentStep(currentStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues}
              validationSchema={schema[currentStep]}
              onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form id={'formId'}>
            <Grid item xs={4}>
              <Paper className={classes.paper} sx={{height: '50vh'}}>
                <Box sx={{height: '90%'}}>
                  <Typography color="textSecondary" align="center">
                    Create an Account
                  </Typography>
                </Box>
                {currentStep < forms.length - 1 && (
                  <Box sx={{justifyContent: "flex-end"}} >
                    <Stack sx={{float: 'right'}} direction="row" spacing={2}>
                      {currentStep !== 0 && (
                        <Button sx={{float: 'right'}} onClick={() => setCurrentStep(currentStep-1)}>Back</Button>
                      )}
                      <Button disabled={isSubmitting} type={'submit'} sx={{float: 'right'}} variant={"contained"}>Next</Button>
                    </Stack>
                  </Box>
                )}
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper} sx={{height: '50vh'}}>
                <Steps currentStep={currentStep}>
                  {forms}
                </Steps>
              </Paper>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};