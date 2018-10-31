import styled, { keyframes } from "styled-components"

const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`

export const App = styled.div`
  text-align: center;
`

export const Logo = styled.img`
  animation: ${rotateAnimation} infinte 20s linear;
  height: 80px;
`

export const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: grey;
`

export const Intro = styled.div`
  color: white;
  background-color: green;
`

export const Title = styled.h1`
  font-size: 1.5em;
`
