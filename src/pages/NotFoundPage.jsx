import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import { IconContext } from 'react-icons';
import { WiDayRain } from 'react-icons/wi';
import { Link as RouterLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Grid container direction="column" justifyContent="center" className="full">
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
              <WiDayRain />
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
              404 | La página no existe
            </Typography>
            <Link
              color="inherit"
              aria-label="menu"
              component={RouterLink}
              to="/main"
            >
              Volver al inicio
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default NotFoundPage;
