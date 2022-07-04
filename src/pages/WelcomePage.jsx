import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import { IconContext } from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';
import { Link as RouterLink } from 'react-router-dom';
import PantallaBienvenida from '../components/PantallaBienvenida';

const WelcomePage = () => {
  return (
    <PantallaBienvenida>
      <Grid
        container
        direction="column"
        justifyContent="center"
        className="full"
      >
        <div className="highlight">
          <Grid
            item
            container
            xs={12}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <IconContext.Provider value={{ size: '6em' }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h4" color="inherit">
                Weather App
              </Typography>
              <Link
                color="inherit"
                aria-label="menu"
                component={RouterLink}
                to="/main"
              >
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </PantallaBienvenida>
  );
};

export default WelcomePage;
