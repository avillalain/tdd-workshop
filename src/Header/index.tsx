import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import React from 'react';
import {useStyle} from '../styles';

export const Header = () => {

  const classes = useStyle();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography sx={{flexGrow: 1}}>
          TDD React by Example
        </Typography>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
} ;
