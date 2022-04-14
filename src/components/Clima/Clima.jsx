import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import { IconContext } from "react-icons";
import IconosEstados, { estadosValidos } from "../IconosEstados";

const Clima = ({ temperatura, estado }) => {
  return (
    <Grid container item 
      direction="row" justify="center" alignItems="center" spacing={1}
    >
      <IconContext.Provider value={{ size: "6em" }}>
        <IconosEstados estado={estado} />
      </IconContext.Provider>
      <Typography display="inline" variant="h2">
        {temperatura}º
      </Typography>
    </Grid>
  );
};

Clima.propTypes = {
  temperatura: PropTypes.number.isRequired,
  estado: PropTypes.oneOf(estadosValidos).isRequired,
};

export default Clima;
