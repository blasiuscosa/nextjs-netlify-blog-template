import React from "react";
import Link from 'next/link'
import styled from 'styled-components'

const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  position: relative;
  padding: 0;
  
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    margin-bottom: 20px;
  }
`
const Linka = styled.a`
  font-size: 0.8rem;
  font-weight: 600;
  color: darkgrey;
  border: 1px solid transparent;
  border-radius: 6px;
  margin-left: 30px;

  @media (max-width: 915px) {
    margin-top: 20px;
  }
  :nth-child(8) {
    @media (max-width: 915px) {
      margin-right: 0px;
    }
    margin-right: 30px;
  }
  
  :hover {
    border: 1px solid white;
    border:radius: 20px;
    cursor: pointer;
    color: dimgrey;
  }
  
  button {
    padding: 5px 20px;
    background: dimgrey;
    border: none;
    color: white;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }
`
const Linkb = styled.a`
  display: block;
  margin-left: 5px;
  cursor: pointer;

  @media (max-width: 915px) {
    display: none;
  }
`
export default function NavLinks() {
  return (
      <>
        <NavItem href="#home">
          <Linka>About Us</Linka>
        </NavItem>
        <NavItem href="#services">
          <Linka>Services</Linka>
        </NavItem>
        <NavItem href="/">
          <Linka>Integrations & System</Linka>
        </NavItem>
        <NavItem href="/">
          <Linka>Career</Linka>
        </NavItem>
        <NavItem href="#blog">
          <Linka>Blog</Linka>
        </NavItem>
        <NavItem href="#contact">
          <Linka>Contact</Linka>
        </NavItem>
        <Linka href="/">
          <button>CTA</button>
        </Linka>
        <NavItem href="/">
          <Linka>Login</Linka>
        </NavItem>
        <NavItem href="/">
          <Linkb>
            <img src="/images/linkedin.svg" width="24px" alt="logo"/>
          </Linkb>
        </NavItem>
        <NavItem href="/">
          <Linkb>
            <img src="/images/facebook.svg" width="24px" alt="logo"/>
          </Linkb>
        </NavItem>
        <NavItem href="/">
          <Linkb>
            <img src="/images/youtube.svg" width="24px" alt="logo"/>
          </Linkb>
        </NavItem>
      </>
  )
}
