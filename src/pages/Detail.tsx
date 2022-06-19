import { Badge, Card, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import films from '../helpers/films.json'

function find(id: number) {
  return films.find(film => film.Id === id);
}

const CardWrapper = styled.div`
  margin:48px;
  width: 100%;
  @media (max-width: 768px) {
    margin:48px 0;
  }
  .sub-info{
    font-size:12px;
  }
  .card-title{
    position: relative;
    margin-top:5px;
    .badge{
      position:absolute;
      right: 0;
    }
  }
  .card-text{
    margin-top:12px;
  }
  img{
    max-height: 550px;
    object-fit: cover;
  }
`;

function Detail() {
  var id: string = useParams().id!;
  let film = find(parseInt(id));

  return (
    <div className="grid-body">
      <CardWrapper>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Carousel interval={null} indicators={false}>
              {film?.Images.map(image =>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              )}
            </Carousel>
            <Card.Title>{film?.Title}
              <Badge bg="warning" text="dark">
                IMDB {film?.imdbRating}
              </Badge></Card.Title>
            <div className="sub-info">
              <div>{film?.Year} {film?.Runtime} </div>
              <div>{film?.Genre}</div>
              <div><b>Actors:</b> {film?.Actors}</div>

            </div>
            <Card.Text>
              {film?.Plot}
            </Card.Text>

          </Card.Body>
        </Card>
      </CardWrapper>
    </div>
  )
}

export default Detail