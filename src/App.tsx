import React from 'react';
import { theme, useStyle } from './styles';
import {
  AppBar,
  Button,
  CssBaseline,
  Grid, Paper,
  ThemeProvider,
  Toolbar,
  Typography
} from '@mui/material';

const App = () => {
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography sx={{flexGrow: 1}}>
            TDD React by Example
          </Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing="0.5" className={classes.grid}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography color="textSecondary" align="center">
              Status
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography color="textSecondary" align="center">
              Form
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.footer}>
        {'Copyright © '} | {new Date().getFullYear()}
      </div>
    </ThemeProvider>
  );
}

export default App;
