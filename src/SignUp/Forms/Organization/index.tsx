import {Grid} from '@mui/material';
import React from 'react';
import {InputField} from '../../../Fields/InputField';

export const Model = {
  organization: {
    name: 'organization',
    label: 'Organization',
    requiredErrorMsg: 'Organization is required'
  },
  position: {
    name: 'position',
    label: 'Position'
  }
};

export const Organization = () => {
  const {
    organization,
    position
  } = Model;

  return (
    <Grid container direction="column" justifyItems="center" alignItems="center">
      <Grid item xs={12}>
        <Grid container spacing={6} justifyItems="center" alignItems="center">
          <Grid item xs={12}>
            <InputField {...organization}/>
          </Grid>
          <Grid item xs={12}>
            <InputField {...position}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};