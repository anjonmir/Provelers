import { Container, Row, Col } from "react-bootstrap";

const places = [
  {
    image: "/images/place-1.jpg",
    title: "Lalbagh Fort",
    location: "Dhaka",
  },
  {
    image: "/images/place-2.jpg",
    title: "Ahsan Manzil",
    location: "Old Dhaka",
  },
  {
    image: "/images/food.jpg",
    title: "Street Food",
    location: "Chittagong",
  },
];

function PopularDestinations() {
  return (
    <section className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">
            Popular Destinations
          </h2>
        </div>

        <Row className="g-4">
          {places.map((place, index) => (
            <Col lg={4} key={index}>
              <div className="destination-card">
                <img
                  src={place.image}
                  alt={place.title}
                />

                <div className="destination-content">
                  <h4>{place.title}</h4>

                  <p>{place.location}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default PopularDestinations;