import { Link } from "react-router-dom"
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import films from '../helpers/films.json';
import styled from 'styled-components';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="grid-body">
      <h1>This is homepage</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={1000}>
        {films.map((film, index) =>
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={film.Images[0]}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{film.Title}</h3>
              <p>{film.Plot}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}

      </Carousel>
    </div>
  )
}

export default Home