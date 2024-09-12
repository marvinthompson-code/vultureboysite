import { NavLink } from "react-router-dom";
import "../../css/Components/Nav.css";

const Nav = () => {
  return (
    <>
      <NavLink href="/" className="NavLinkTab">
        HOME
      </NavLink>
      <NavLink href="/videos" className="NavLinkTab">
        VIDEOS
      </NavLink>
      <NavLink href="/photos" className="NavLinkTab">
        PHOTOS
      </NavLink>
      <NavLink href="/contact" className="NavLinkTab">
        CONTACT
      </NavLink>
    </>
  );
};

export default Nav;
