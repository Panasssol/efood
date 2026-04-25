import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderBar = styled.header`
  background-color: #E66767;
  padding: 40px 0;
  text-align: center;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="%23FFF8F2" fill-opacity="0.05" d="M0,0L48,5.3C96,11,192,21,288,42.7C384,64,480,96,576,96C672,96,768,64,864,48C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/></svg>');
  background-size: cover;
  position: relative;
`

const Logo = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 900;
  color: #E66767;
  background-color: #FFF8F2;
  display: inline-block;
  padding: 8px 24px;
  border-radius: 8px;
  letter-spacing: 2px;

  a {
    color: #E66767;
    text-decoration: none;
  }
`

const Subtitle = styled.p`
  color: #FFF8F2;
  font-size: 18px;
  margin-top: 16px;
  font-weight: 300;
  letter-spacing: 0.5px;
`

const Header = () => (
  <HeaderBar>
    <Logo>
      <Link to="/">efood</Link>
    </Logo>
    <Subtitle>Viva experiências gastronômicas no conforto da sua casa</Subtitle>
  </HeaderBar>
)

export default Header
