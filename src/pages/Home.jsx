import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import { Row, Col, Container, Card } from "react-bootstrap";

function Home() {
  return (
    <Container
      className="align-items-center justify-content-center text-center mt-5"
      style={{ margin: "auto"}}
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
            There are many options downtown Stillwater and a short drive away based on what accommodations and budget you are looking for. Here are some hotels walking distance from the venue:
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
            Water Street Inn<br/>
            101 Water St S<br />
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
            <span style={{ fontWeight: 500 }}>Chain Hotel a Short Drive Away</span>
            <br />
            Country Inn & Suites by Raddison, Stillwater<br></br>
            2000 Washington Avenue<br />
            Stillwater, MN 55082
            <br />
            <a href="https://www.radissonhotelsamericas.com/en-us/booking/room-display?hotelCode=USASTMN&facilitatorId=GOOGLEHPAAMERICAS&checkInDate=2023-07-29&checkOutDate=2023-07-30&adults%5B%5D=2&children%5B%5D=0&searchType=lowest&currencyCode=USD&testClick=false&cid=a:mt+b:gha+c:amer+d:US+e:rad+g:ho+h:USASTMN+i:ghameta+r:desktop+&content=gha_CARLSON-USASTMN_US_desktop_1_2023_07_29_selected_12889097248__standard&hmGUID=a05fd75a-3229-47f1-b927-ac6a585d07f5">radissonhotelsamericas.com</a>
            <br />
            (651) 390-6719
            <br />
            5 minute drive to venue
            <br />
          </div>
          <div className="mb-3">
            <span style={{ fontWeight: 500 }}>Affordable Hotel in Hudson</span>
            <br />
            Hudson Inn & Suites/ Hudson WI<br/>
            811 Dominion Dr<br />
            Hudson, WI 54016
            <br />
            (715) 386-6355
            <br />
            16 minute drive to venue
            <br />
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
          We are so extremely excited that you will be joining us this fall for our wedding day. 
          As you may know, we have already established a lovely home for ourselves and have many of the essentials already. 
          Your attendance to our wedding is the greatest gift we could ever want, 
          but for those that have shown interest in a gift offering to celebrate the occasion a registry has been set up. 
          Also consider donating to the honey moon fund! <br></br>
            We are registered at{" "}
            <a href="https://www.zola.com/registry/kuhlmanotternesswedding">
              Zola
            </a>
            {" "},{" "}
            <a href="https://www.amazon.com/wedding/kayla-kuhlman-colton-otterness--july-2023/registry/12I7ZDUFEL7SD">
              Amazon
            </a>
            {" "}&{" "}
            <a href="https://www.target.com/gift-registry/gift-giver?registryId=cc72b770-b65c-11ed-81fd-310f81826ad7&type=WEDDING">
              Target
            </a>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5">
        <Card.Title
          className="my-1"
          id="faqs"
          style={{ fontSize: 25 }}
        >
          FAQ's
        </Card.Title>
        <Card.Body className="mb-1">
          <div className="mb-2">
          <span style={{ fontWeight: 500 }}>Can I bring my child?</span><br/>
          To give all our guests the opportunity to celebrate without having to worry about little eyes and ears, we politely request no children outside of the wedding party.
          </div>

          <div className="mb-2">
          <span style={{ fontWeight: 500 }}>Can I bring a plus one?</span><br/>
          Celebrate 'love' with us!  We invite our single guests to bring a special someone if they are in a serious relationship. 
          We kindly ask that you refrain from bringing casual acquaintances or dates who you are not currently in a committed relationship with.  
          Please indicate this on your RSVP.
          </div>

          <div className="mb-2">
          <span style={{ fontWeight: 500 }}>Will the ceremony, cocktail hour, and reception take place indoors or outdoors?</span><br/>
          The festivities of the day will all take place indoors.
          </div>

          <div className="mb-2">
          <span style={{ fontWeight: 500 }}>How do I get to the wedding venue? Will transportation be provided?</span><br/>
          Studio J Loft is located in downtown Stillwater on main street (214 Main St S, Stillwater, MN 55082). Transportation will not be provided by the couple, but they encourage you to use 
          the many free parking options in Stillwater as well as rideshare apps such as Uber or Lyft, or calling a Taxi service such as Blue and White Taxi (612-333-3333) for a ride.
          </div>

          <div className="mb-2">
          <span style={{ fontWeight: 500 }}>Is somebody changing their name?</span><br/>
          While Kayla often fights tradition with her views on gender equality, she has made the personal decision to take Colton's last name, Otterness, as a symbol of unity and building life together as a team. 
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
            Chris Halsted - Groomsman (Friend)
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
