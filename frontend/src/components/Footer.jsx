import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{backgroundColor:'grey'}}>
      <Container>
        <Row>
            <Col className='text-center py-3'>
                <p>Shoppy &copy; {currentYear}</p>
            </Col>
        </Row>
      </Container>

    </footer>
  )
}

export default Footer;