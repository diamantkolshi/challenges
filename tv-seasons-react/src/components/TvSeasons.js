import React from 'react';
import { Card } from 'react-bootstrap';
import data from '../data.json';

const TvSeasons = () => {
  return (
    data.tv_seasons.map((season) => {
      const { name, description, nrEpisodes, prices } = season
      return (
        <Card style={{ marginTop: 10 }} key={name}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Number of episodes: {nrEpisodes}</Card.Text>
            <Card.Text>Price (Buy): {prices.buy}</Card.Text>
            <Card.Text>Price (Rent): {prices.rent}</Card.Text>
          </Card.Body>
        </Card>
      )
    })
  );
};

export default TvSeasons;