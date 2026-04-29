import styled from 'styled-components'
import bgHeader from '../../assets/header-bg.png'
import logoImg from '../../assets/logo.png'

const HeaderBar = styled.header`
  background-color: #FFF8F2;
  background-image: url(${bgHeader});
  background-repeat: repeat;
  background-size: auto;
  padding: 64px 0 48px;
  text-align: center;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`

const LogoImg = styled.img`
  width: 125px;
  height: auto;
`

const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #E66767;
`

const Header = () => (
  <HeaderBar>
    <Logo>
      <LogoImg src={logoImg} alt="efood" />
    </Logo>
    <Subtitle>
      Viva experiências gastronômicas<br />no conforto da sua casa
    </Subtitle>
  </HeaderBar>
)

export default Header