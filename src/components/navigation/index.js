import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles.css';

function Navigation() {
  return (
    <>
      <Navbar className="nav-bar">
        <Container>
          <Navbar.Brand className="logo-cont" href="/">
            <img
              alt=""
              src={require('../../assets/planetsgif.gif')}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <div>PlanetPositions</div>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="https://my-store-cf76fb.creator-spring.com">Store</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;