import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bgHeader from '../../assets/header-bg.png'
import logoImg from '../../assets/logo.png'

const HeroNav = styled.div`
  background-image: url(${bgHeader});
  background-repeat: repeat;
  background-size: auto;
  background-color: #FFF8F2;
`

const HeroNavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`

const NavLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #E66767;
  text-decoration: none;
`

const CartText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: right;
  color: #E66767;
`

const LogoImg = styled.img`
  width: 125px;
  height: auto;
`

const HeroImage = styled.div<{ $bg: string }>`
  position: relative;
  height: 280px;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`

const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding-bottom: 32px;
`

const RestaurantType = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
  color: #FFFFFF;
  display: block;
  margin-bottom: 16px;
`

const RestaurantTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  color: #FFFFFF;
`

type HeroProps = {
  titulo: string
  tipo: string
  capa: string
}

const Hero = ({ titulo, tipo, capa }: HeroProps) => (
  <>
    <HeroNav>
      <div className="container">
        <HeroNavInner>
          <NavLink to="/">Restaurantes</NavLink>
          <LogoImg src={logoImg} alt="efood" />
          <CartText>0 produto(s) no carrinho</CartText>
        </HeroNavInner>
      </div>
    </HeroNav>
    <HeroImage $bg={capa}>
      <HeroContent>
        <div className="container">
          <RestaurantType>{tipo}</RestaurantType>
          <RestaurantTitle>{titulo}</RestaurantTitle>
        </div>
      </HeroContent>
    </HeroImage>
  </>
)

export default Hero