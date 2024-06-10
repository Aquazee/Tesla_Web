/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

function Footer() {
  return (
    <footer className="footer row">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.proflyl.com">Proflyl</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.proflyl.com">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.proflyl.com">Blog</NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with <i className="tim-icons icon-heart-2" /> by{' '}
          <a href="https://www.proflyl.com" target="_blank">
            Proflyl
          </a>{' '}
          for a better web.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
