import React from 'react';
import {useStyle} from './styles';
import {Grid} from '@mui/material';
import {SignUp} from './SignUp';

const App = () => {
  const classes = useStyle();

  return (
    <Grid container spacing="6" className={classes.grid}>
      <SignUp/>
    </Grid>
  );
}

export default App;
