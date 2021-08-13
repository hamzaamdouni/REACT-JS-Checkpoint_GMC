import './App.css';
import { Navbar, Container, Nav, NavDropdown, Card, CardGroup, Carousel } from 'react-bootstrap';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Fréres-Sultan</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#About Us">About Us</Nav.Link>
      <Nav.Link href="#Gallery">Gallery</Nav.Link>
      <NavDropdown title="Menu" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#Burgers">Burgers</NavDropdown.Item>
        <NavDropdown.Item href="#Hotdogs">Hotdogs</NavDropdown.Item>
        <NavDropdown.Item href="#Pizza">Pizza</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#Drinks">Drinks</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#Contacts">Contacts</Nav.Link>
      <Nav.Link eventKey={2} href="#Blog">
        Blog
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
 <div>
 <Carousel fade>
  <Carousel.Item class="carousel-item">
    <img
      className="d-block w-100"
      src={img1}
      alt="Burgers"
    />
    <Carousel.Caption>
      <h3>Burgers</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Hotdogs"
    />

    <Carousel.Caption>
      <h3>Hotgogs</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Pizza"
    />

    <Carousel.Caption>
      <h3>Pizza</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 </div>
 <div class="m-5">     
<CardGroup>
  <Card>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
      <Card.Title>Burgers</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={img2} />
    <Card.Body>
      <Card.Title>Hotdogs</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={img3} />
    <Card.Body>
      <Card.Title>Pizza</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
</div>

<footer class="p-3 text-light">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <p class="mx-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sapiente distinctio, ipsa temporibus non fuga minus magni harum architecto cumque exercitationem nesciunt explicabo odit saepe eligendi?
          </p>
          <p>hamza.amdounitsmm@gmail.com © 2021</p>
        </footer>
    </div>
  );
}

export default App;
