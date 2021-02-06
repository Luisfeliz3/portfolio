import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <div className=" bg-dark rounded-lg">
      <Nav activeKey="1">
        <Nav.Item>
          <Nav.Link className="navLink" eventKey="1" href="/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="navLink"
            href="/aboutme"
            eventKey="/aboutme"
            title="Item"
          >
            About
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            className="navLink"
            href="/resume"
            eventKey="/resume"
            title="Item"
          >
            Resume
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="navLink"
            eventKey="3"
            href="https://github.com/luisfeliz3"
            target="_blank"
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <NavDropdown className="navLink" title="Projects" id="nav-dropdown">
          <NavDropdown.Item
            eventKey="4.1"
            href="https://prepair-final.herokuapp.com/"
            target="_blank"
          >
            PrePair
          </NavDropdown.Item>
          <NavDropdown.Item
            eventKey="4.2"
            href="https://app-project2.herokuapp.com/posts"
            target="_blank"
          >
            How to ?
          </NavDropdown.Item>
          <NavDropdown.Item
            eventKey="4.3"
            href="https://luisfeliz3.github.io/weather_dashboard/"
            target="_blank"
          >
            Weather DashBoard
          </NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          {/* <NavDropdown.Item eventKey="4.4">PrePair</NavDropdown.Item> */}
        </NavDropdown>
      </Nav>
    </div>
  );
}

export default Navbar;
