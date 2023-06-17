import React from 'react';
import { Card } from 'react-bootstrap';
import data from '../data.json';

const Films = () => {
  const films = data.films.concat(
    data.tv_seasons.filter((season) => season.episodes.length === 1).map((season) => ({
      name: season.name,
      description: season.description,
      releaseYear: season.releaseYear,
      prices: season.prices,
      type: "TV Film"
    })),
  );

  const sortedFilms = films.sort((a, b) => a.releaseYear - b.releaseYear);

  return (
    sortedFilms.map((film) => {
      const { name, description, prices, type } = film
      return (
        <Card style={{ marginTop: 10 }} data-testid="film" key={name}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Price (Buy): {prices.buy}</Card.Text>
            <Card.Text>Price (Rent): {prices.buy}</Card.Text>
            { type && <Card.Text>Type: {type}</Card.Text> }
          </Card.Body>
        </Card>
      )
    })
  );
};

export default Films;