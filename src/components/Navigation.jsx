import '../styles/Navigation.css'

const Navigation = () => {

  return (
    <>
      <div id="container-header">
        <div className="brand-logo">
          <img src="images/Weblogo_MyApp_Travel.png" alt="MyAppTravel-logoHead" usemap="#logo-map"/>
          <map name="logo-map">
            <area shape="rect" coords="0,0,157,60" href="/" alt="MyAppTravel-logoHead"/>
          </map>
        </div>
          <ul>
            <li>
              <a href="#about">ABOUT</a>
              <a href="#gallery">GALLERY</a>
              <a href="#community">COMMUNITY</a>
              <a href="#contact">CONTACT US</a>
            </li>
          </ul>
          <div className="bttn-signin">
            <a href="#">Join Us</a>
          </div>
          <div className="menu-toggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
    </>
  )
}

export default Navigation
