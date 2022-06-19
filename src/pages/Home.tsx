import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import films from '../helpers/films.json';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import categories from '../helpers/categories.json';
import DummyCategoryImg from '../assets/images/dummy-categories-img.png';
import { Link } from "react-router-dom";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const CategoriesWrapper = styled.div`
    display: flex;
    overflow: hidden;  
    overflow-x: scroll;
    flex-wrap: inherit;
    padding-left: 24px;
    margin: 52px 0;
  `;

  const Category = styled.div`
    grid-area: none;
    flex: 0 0 auto;
    max-height: 284px;
    border-radius: 8px;
    margin: 0px 5px;
    width:40%;
    @media (max-width: 768px) {
      width:60%;
    }
    .card-title{
      text-align:center;
      font-size:32px;
      letter-spacing: 12px;
    }
  `;

  const CarouselLink = styled.a`
  img{
    height: 40vh;
    object-fit: contain;
  }
`;
  const GridBody = styled.div`
  .carousel-caption{
    background: #a0a0a04a;
    padding:0;
  }
`;

  return (
    <GridBody className="grid-body">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={4000}>
        {films.map((film) =>
          <Carousel.Item key={film.Id}>
            <CarouselLink >
              <Link to={`detail/${film.Id}`}>
                <img
                  className="d-block w-100"
                  src={film.Poster}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{film.Title}</h3>
                  <p>{film.Plot}</p>
                </Carousel.Caption>
              </Link>
            </CarouselLink>
          </Carousel.Item>
        )}
      </Carousel>

      <h6>Categories</h6>
      <CategoriesWrapper>
        {categories.map((category, index) =>
          <Category key={index}>
            <a href='#'>
              <Card className="bg-dark text-white categories">
                <Card.Img src={DummyCategoryImg} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>{category.name}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </a>
          </Category>
        )}
      </CategoriesWrapper>
    </GridBody>
  )
}

export default Home;