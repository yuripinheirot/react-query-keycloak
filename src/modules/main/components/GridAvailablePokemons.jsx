import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

// eslint-disable-next-line no-unused-vars
import { Button, CardContent, Typography, Grid } from "@mui/material";

const GridAvailablePokemons = ({ data }) => {

	const renderCards = data.map((item, index) => {
		return <Grid item sm={3} key={index}>
			<Card key={index} name={item.name} />
		</Grid>;
	});

	return <Grid container spacing={2} justifyContent='center'>
		{renderCards}
	</Grid>;
};

GridAvailablePokemons.propTypes = {
	data: PropTypes.array,
};

export default GridAvailablePokemons;