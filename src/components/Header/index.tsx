import styled from 'styled-components'
//import { useSelector, useDispatch } from 'react-redux'
//import type { RootState } from '../../store'
//import { toggleCart } from '../../store/cartSlice'
import bgHeader from '../../assets/header-bg.png'
import logoImg from '../../assets/logo.png'

const HeaderBar = styled.header`
  background-color: #FFF8F2;
  background-image: url(${bgHeader});
  background-repeat: repeat;
  background-size: auto;
  padding: 64px 0 48px;
  text-align: center;
  position: relative;
`

const HeaderInner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`

const LogoImg = styled.img`
  width: 125px;
  height: auto;
  margin-bottom: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
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

const Header = () => {
  /* const dispatch = useDispatch()
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, i) => sum + i.quantidade, 0)
  ) */

  return (
    <HeaderBar>
      <HeaderInner>
        <LogoImg src={logoImg} alt="efood" />
        <Subtitle>
          Viva experiências gastronômicas<br />no conforto da sua casa
        </Subtitle>
      </HeaderInner>
    </HeaderBar>
  )
}

export default Header