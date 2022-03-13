import React from "react"
import { navigate } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useLocation } from '@reach/router';


const Navbar = () => {
  let path = useLocation().pathname;
  let onClick;
  let onKeyDown;

  if (path == "/"){
    onClick = () => scrollTo("#home");
    onKeyDown = () => scrollTo("#home");
  } else {
    onClick = () => navigate('/');
    onKeyDown = () => navigate('/');
  }

  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={onClick}
            onKeyDown={onKeyDown}
            className="name"
            tabIndex={0}
          >
            Zeynel Koca.
          </div>
          { path == "/" && 
            <div className="links-wrapper">
              <button onClick={() => scrollTo("#about")}>About</button>
              <button onClick={() => scrollTo("#projects")}>Projects</button>
              <button onClick={() => scrollTo("#contact")}>Contact</button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar