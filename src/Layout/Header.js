import React, { useContext, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md" className="p-3">
        <NavbarBrand>
          <Link to="signin" className=" text-white removelink">
            LCO Git Firebase App
          </Link>
        </NavbarBrand>

        <NavbarText className="text-white">
          {context.user?.email ? context.user.email : ""}
        </NavbarText>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar" navbar>
            {context.user ? (
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/signin"
                  className="text-white"
                  onClick={() => {
                    context.setUser(null);
                  }}
                >
                  Logout
                </NavLink>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/signin" className="text-white">
                    SignIn
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} to="/signup" className="text-white">
                    SignUp
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
