import React from "react";
import { Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
const HeaderController = () => {
  return (
    <>
      <Nav.Link>
  <Link to={`/login`} className="text-decoration-none text-white">
    <FaSignInAlt /> Login
  </Link>
</Nav.Link>

<Nav.Link>
  <Link to={`/register`} className="text-decoration-none text-white">
    <FaSignOutAlt /> Register
  </Link>
</Nav.Link>
    </>
  );
};

export default HeaderController;
