import styled from 'styled-components'

export const Container = styled.div`
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    opacity: 1;
    position: fixed;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
  }
`
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
`
export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0;
  
  @media (max-width: 915px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Hamburger = styled.div`
  background-color: #000;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};
  
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #000;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  
  ::before {
    transform: ${(props) => (props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)")};
    top: -10px;
  }
  
  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg)" : "rotate(0deg)")};
    top: 10px;
  }
`
export const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: between;
  grid-gap: 0px;
  height: 100%;
  @media (max-width: 915px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 0fr;
    grid-gap: 0;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    width: 100%;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`
