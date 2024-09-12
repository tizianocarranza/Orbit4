import logo from "../../assets/logo.svg"
import "./navbar.css"

function Navbar() {
  return (

    <div className="navbar-container">
      
      <div className="navbar">
        <div className="navbar__logo-container">
            <img src={logo} alt="BellAir logo" />
        </div>
{/*         <div className="navbar__buttons-container fade-in-out">
          <li className="navbar__button">home</li>
          <li className="navbar__button">rockets</li>
          <li className="navbar__button">us</li>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar