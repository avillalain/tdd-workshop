import React from 'react';
import { theme, useStyle } from './styles';
import {
  AppBar, Box,
  Button,
  CssBaseline,
  Grid, Paper, TextField,
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
      <Grid container spacing="6" className={classes.grid}>
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
      </Grid>
      <div className={classes.footer}>
        {'Copyright © '} | {new Date().getFullYear()}
      </div>
    </ThemeProvider>
  );
}

export default App;
