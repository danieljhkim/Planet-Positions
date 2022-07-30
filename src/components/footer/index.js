import './styles.css';

function Footer() {
  return (
    <>
      <div className="footer-outer-cont">
        <div className="logo-cont">
          <img
              alt=""
              src={require('../../assets/planetsgif.gif')}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            <div>PlanetPositions.org</div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
}

export default Footer;