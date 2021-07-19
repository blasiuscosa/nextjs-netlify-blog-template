import Link from "next/link";
import Burger from "./Burger";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Container, Hamburger, Logo, NavBox, Toggle } from "./meta/NavLinkStyle";
import styled from 'styled-components'

const Linka = styled.a``

export default function Navigation() {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
      <Container>
        <Logo>
          <Linka href="/">
            <img src="/images/logo.svg" width="100px" alt="logo"/>
          </Linka>
        </Logo>
        <Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
            <NavBox>
              <NavLinks/>
            </NavBox>
        ) : (
            <NavBox open>
              <NavLinks/>
            </NavBox>
        )}
      </Container>
  )
}
