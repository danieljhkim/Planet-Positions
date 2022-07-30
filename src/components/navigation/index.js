import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css';

function Navigation() {
  return (
    <>
      <Navbar className="nav-bar">
        <Container>
          <Navbar.Brand className="logo-cont" href="/">
            <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            PlanetPositions
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;