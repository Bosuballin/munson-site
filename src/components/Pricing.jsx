import react from "react";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";

function Pricing() {
  return (
    <>
      <Container id="pricing" className="m-auto pricing-container p-5">
        <h2 class="pricing-heading p-3"> Private Lessons for All Ages</h2>
        <p class="pricing-text p-3">
          Personalized lessons and feedback from the comfort of your home.
        </p>
        <br />
        <Form method="get" action="#contactme">
          <Row className="p-2">
            <Col className="pricing-column col-lg-4 col-md-6 p-3">
              <Card border="dark p-3 m-auto" style={{ width: "18rem" }}>
                <Card.Header>Short Lessons</Card.Header>
                <Card.Body>
                  <Card.Title>$30</Card.Title>
                  <Card.Text className="pt-2">30 Minute Lesson</Card.Text>
                  <Card.Text>Personalized Curriculum</Card.Text>
                  <Button variant="outline-dark btn-lg btn-block">Book</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="pricing-column col-lg-4 col-md-6 p-3">
              <Card border="dark  p-3 m-auto" style={{ width: "18rem" }}>
                <Card.Header>Full Lessons</Card.Header>
                <Card.Body>
                  <Card.Title>$60</Card.Title>
                  <Card.Text className="pt-2">1 Hour Lesson</Card.Text>
                  <Card.Text>Personalized Curriculum</Card.Text>
                  <Button variant="dark btn-lg btn-block">Book</Button>{" "}
                </Card.Body>
              </Card>
            </Col>

            <Col className="pricing-column col-lg-4 p-3">
              <Card border="dark p-3 m-auto" style={{ width: "18rem" }}>
                <Card.Header>Extended Lessons</Card.Header>
                <Card.Body>
                  <Card.Title>$60/hr</Card.Title>
                  <Card.Text className="pt-2">
                    Customized Lesson Length
                  </Card.Text>
                  <Card.Text>Personalized Curriculum</Card.Text>
                  <Button variant="dark btn-lg btn-block">Book</Button>{" "}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default Pricing;
