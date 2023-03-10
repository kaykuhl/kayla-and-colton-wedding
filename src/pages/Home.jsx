import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import { Row, Col, Container, Card } from "react-bootstrap";

function Home() {
  return (
    <Container
      className="align-items-center justify-content-center text-center mt-5"
      style={{ margin: "auto", width: "1000px" }}
    >
      <h1 className="kayla-and-colton-header">Kayla & Colton</h1>
      <h1 className="date-header">July 29th, 2023</h1>

      <Row>
        <Col>
          <img
            className="engagement-photo"
            src="https://live.staticflickr.com/65535/52541248764_cc4010e10f_k.jpg"
            alt="Snow"
          />
        </Col>
        <Col class="column">
          <img
            className="engagement-photo"
            src="https://live.staticflickr.com/65535/52540951036_b171bdafc0_k.jpg"
            alt="Forest"
          />
        </Col>
        <Col class="column">
          <img
            className="engagement-photo"
            src="https://live.staticflickr.com/65535/52541500898_de7feeef9e_k.jpg"
            alt="Mountains"
          />
        </Col>
      </Row>

      <a
        href="https://forms.gle/qW8K83c9hS82iNSo8"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="dark" size="lg" className="mt-4">
          RSVP
        </Button>
      </a>

      <h2 className="mt-5 ceremony-details">Ceremony @ 4pm</h2>
      <h2 className="ceremony-details">The Loft at Studio J</h2>
      <h2 className="ceremony-details">214 Main St S, Stillwater, MN 55082</h2>
      <h2 className="mb-5 ceremony-details">
        Cocktail Hour, Dinner & Dancing to Follow
      </h2>

      <Card className="mt-5">
        <Card.Title className="my-1" id="details" style={{ fontSize: 25 }}>
          Details
        </Card.Title>
        <Card.Body className="mb-1">
          <div className="mb-2">
            <span style={{ fontWeight: 500 }}>Dress: </span>
            Dressy Casual
          </div>
          <div className="mb-2">
            <span style={{ fontWeight: 500 }}>Parking: </span>
            Parking in Stillwater can be challenging, so we suggest leaving a
            little extra time for parking. You are likely able to find a parking
            spot in Stillwater’s Public four-level parking ramp. Located just a
            block off Main Street adjacent to the historic Lowell Inn. More Info
            on Downtown Stillwater Parking Ramp and free lots{" "}
            <a href="https://www.discoverstillwater.com/parking-ramp-free-lots/">
              here
            </a>
            .
          </div>
          <div className="mb-2">
            <span style={{ fontWeight: 500 }}>Hotels: </span>
            There are many options downtown Stillwater and a short drive away
            based on what accommodations and budget you are looking for:
          </div>
          <div className="mb-3">
            <span style={{ fontWeight: 500 }}>Budget Option</span>
            <br />
            Comfort Inn & Suites
            <br />
            2000 Washington Ave, Stillwater, MN 55082
            <br />
            <a href="https://www.choicehotels.com/minnesota/stillwater/comfort-inn-hotels/">
              www.choicehotels.com/minnesota/stillwater/comfort-inn-hotels
            </a>
            <br />
            (651) 390-6179
            <br />6 minute drive to venue
          </div>
          <div className="mb-3">
            <span style={{ fontWeight: 500 }}>Downtown Historic Hotel</span>
            <br />
            Lowell Inn - Hotel & Restaurant
            <br />
            102 2nd St N, Stillwater, MN 55082
            <br />
            <a href="https://lowellinn.com/">www.lowellinn.com</a>
            <br />
            (651) 439-1100
            <br />
            4 minute walk to venue
            <br />
          </div>
          <div className="mb-3">
            <span style={{ fontWeight: 500 }}>Waterfront Historic Hotel</span>
            <br />
            Water Street Inn 101 Water St S<br />
            Stillwater, MN 55082
            <br />
            <a href="https://waterstreetinn.us/">www.waterstreetinn.us</a>
            <br />
            (651) 439-6000
            <br />
            3 minute walk to venue
            <br />
          </div>
          <div className="mb-3">
            Here is a list of other hotels in the area.
          </div>
          <div className="mb-1">
            Staying for the weekend? Check out things to do in Stillwater:
            <br />
            <a href="https://www.discoverstillwater.com/">
              www.discoverstillwater.com
            </a>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 rounded">
        <Card.Title className="my-1" id="registry" style={{ fontSize: 25 }}>
          Registry
        </Card.Title>
        <Card.Body className="mb-1">
          {" "}
          <div>
            We are registered at{" "}
            <a href="https://www.zola.com/registry/kuhlmanotternesswedding">
              Zola
            </a>{" "}
            &{" "}
            <a href="https://www.amazon.com/wedding/kayla-kuhlman-colton-otterness--july-2023/registry/12I7ZDUFEL7SD">
              Amazon
            </a>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5">
        <Card.Title className="my-1" id="our-story" style={{ fontSize: 25 }}>
          Our Story
        </Card.Title>
        <Card.Body className="mb-1">
          <div>Okayyyyy Cupid.</div>
          <div>
            Kayla and Colton met in 2013 while attending their last years of
            college.
          </div>
          <div>
            Kayla knew Colton was the one when he sent her a pizza when she had
            a big Chemistry exam to study for.
          </div>
          <div>
            Kayla and Colton have traveled together and with family. To Denver,
            Arizona, Florida, Rome, Italy, Las Vegas, and the Carribean (we
            won’t talk about the time Colton sprained his ankle after the booze
            cruise....)
          </div>
          <div>
            They just purchased a house in Richfield, MN in december 2021 and
            are excited to continue making it their home.
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5">
        <Card.Title
          className="my-1"
          id="wedding-party"
          style={{ fontSize: 25 }}
        >
          Wedding Party
        </Card.Title>
        <Card.Body className="mb-1">
          <div>
            Ashley Kuhlman - Maid of Honor (Sister of the Bride)
            <br />
            Hannah Kuhlman - Bridesmaid (Sister of the Bride)
            <br />
            Alex Larrabee - Bridesmaid (Friend)
            <br />
            Serena Buermann - Bridesmaid(Friend)
            <br />
            Taylor Baker - Bridesmaid (Cousin of the Bride)
            <br />
            <br />
            Erik Walker - Best Man (Friend)
            <br />
            Cheston Otterness - Groomsman (Brother of the groom)
            <br />
            Chris Halsted -Groomsman (Friend)
            <br />
            Lee Beurmann - Groomsman (Friend)
            <br />
            Will Larson - Groomsman (Cousin of the Bride)
            <br />
            <br />
            Jolyne Peterson - Flower Grandma (Grandmother)
            <br />
            Nancy Peterson - Personal Attendent (Aunt of the Bride)
            <br />
            Debbie Peterson - Ceremony Reader (Aunt of the Bride)
            <br />
            Brooke Littleton - Usher (Cousin of the Bride)
            <br />
            Dane Littleton - Usher (Cousin of the Bride)
            <br />
            Dylan Peterson - Usher (Cousin of the Bride)
            <br />
            Ty Peterson - Usher (Cousin of the Bride)
            <br />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
