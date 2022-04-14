import PropTypes from "prop-types";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart, ResponsiveContainer, Tooltip,
  XAxis,
  YAxis
} from "recharts";

const PronosticoGrafico = ({ data }) => {
  return (
    <ResponsiveContainer height={250} width={"95%"}>
      <LineChart margin={{ top: 20, bttom: 20, left: 5, right: 5 }} data={data}>
        <XAxis dataKey="diaHora" />
        <YAxis />
        <CartesianGrid />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="min" stroke="#0000FF" />
        <Line type="monotone" dataKey="max" stroke="#FF0000" />
      </LineChart>
    </ResponsiveContainer>
  );
};

PronosticoGrafico.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      diaHora: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PronosticoGrafico;
