import {Grid} from '@mui/material';
import React from 'react';
import {InputField} from '../../../Fields/InputField';

export const Model = {
  firstName: {
    name: 'firstname',
    label: 'First Name',
    requiredErrorMsg: 'First name is required'
  },
  lastName: {
    name: 'lastname',
    label: 'Last Name',
    requiredErrorMsg: 'Last name is required'
  },
  email: {
    name: 'email',
    label: 'Email',
    requiredErrorMsg: 'Email is required'
  }
}

export const Personal = () => {
  const {
    firstName,
    lastName,
    email,
  } = Model;

  return (
    <Grid container direction="column" justifyItems="center" alignItems="center">
      <Grid item xs={12}>
        <Grid container spacing={6} justifyItems="center" alignItems="center">
          <Grid item xs={12}>
            <InputField {...firstName}/>
          </Grid>
          <Grid item xs={12}>
            <InputField {...lastName}/>
          </Grid>
          <Grid item xs={12}>
            <InputField {...email}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};