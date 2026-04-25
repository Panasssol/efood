import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeroWrapper = styled.div<{ $bg: string }>`
  position: relative;
  height: 280px;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%);
  }
`

const HeroNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  position: relative;
  z-index: 1;
`

const NavLink = styled(Link)`
  color: #E66767;
  font-weight: 700;
  font-size: 18px;
  background-color: #FFF8F2;
  padding: 6px 16px;
  border-radius: 6px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`

const HeroContent = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
  z-index: 1;
`

const Tag = styled.span`
  color: #FFF8F2;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.5px;
`

const Title = styled.h2`
  color: #FFF8F2;
  font-size: 32px;
  font-weight: 900;
  margin-top: 16px;
`

type HeroProps = {
  titulo: string
  tipo: string
  capa: string
}

const Hero = ({ titulo, tipo, capa }: HeroProps) => (
  <HeroWrapper $bg={capa}>
    <div className="container">
      <HeroNav>
        <NavLink to="/">Restaurantes</NavLink>
        <NavLink to="/">efood</NavLink>
      </HeroNav>
    </div>
    <HeroContent>
      <div className="container">
        <Tag>{tipo}</Tag>
        <Title>{titulo}</Title>
      </div>
    </HeroContent>
  </HeroWrapper>
)

export default Hero
