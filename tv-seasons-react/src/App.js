import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Films from './components/Films';
import TvSeasons from './components/TvSeasons';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('films');

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <h1>Display films and seasons</h1>
      <Row className="my-4">
        <Col>
          <button
            type="button"
            className={`btn btn-${selectedCategory === 'films' ? 'primary' : 'secondary'} me-2`}
            onClick={() => handleButtonClick('films')}
            disabled={selectedCategory === 'films'}
          >
            Films
          </button>
          <button
            type="button"
            className={`btn btn-${selectedCategory === 'tv_seasons' ? 'primary' : 'secondary'}`}
            onClick={() => handleButtonClick('tv_seasons')}
            disabled={selectedCategory === 'tv_seasons'}
          >
            TV Seasons
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          {selectedCategory === 'films' ? (
            <Films />
          ) : (
            <TvSeasons />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
