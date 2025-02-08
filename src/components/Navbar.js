import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 24px 32px;
  background: white;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.06);
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  letter-spacing: -0.5px;
`;

function Navbar() {
  return (
    <Nav>
      <Logo>COM-Gradient</Logo>
    </Nav>
  );
}

export default Navbar;