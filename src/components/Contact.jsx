import React from "react";
import {
  Form,
  InputGroup,
  FormControl,
  Container,
  Button,
  Row,
  Col,
} from "react-bootstrap";

function Contact() {
  return (
    <Form
      className="form-contact"
      method="post"
      action="mailto:Cmunsondrums@gmail.com"
      enctype="text/plain"
      Id="contactme"
    >
      <Container className="">
        <Form.Group className="mb-3">
          <Form.Label className="">Contact Me</Form.Label>
          <Form.Control
            className="form-area"
            type="email"
            name="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Control
              className="form-area"
              name="firstName"
              placeholder="First name"
            />
          </Col>
          <Col>
            <Form.Control
              className="form-area"
              name="lastName"
              placeholder="Last name"
            />
          </Col>
        </Row>
        <Form.Group
          className="mb-3 pt-5"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            className="form-area"
            as="textarea"
            rows={3}
            placeholder="Write your message here."
          />
        </Form.Group>
        <Button size="lg" variant="dark" type="submit" className="w-50 mt-5">
          Submit
        </Button>
      </Container>
    </Form>
  );
}

export default Contact;
