import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { toggleCart } from '../../store/cartSlice'

const HeaderBar = styled.header`
  background-color: #E66767;
  padding: 40px 0;
  position: relative;
`

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px;
  }
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

const Center = styled.p`
  color: #FFF8F2;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.5px;
  text-align: center;
  flex: 1;
`

const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #FFF8F2;
  color: #E66767;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`

const Badge = styled.span`
  background: #E66767;
  color: #FFF8F2;
  font-size: 12px;
  font-weight: 700;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

const Header = () => {
  const dispatch = useDispatch()
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, i) => sum + i.quantidade, 0)
  )

  return (
    <HeaderBar>
      <Container>
        <Logo>
          <Link to="/">efood</Link>
        </Logo>
        <Center>Viva experiências gastronômicas no conforto da sua casa</Center>
        <CartButton onClick={() => dispatch(toggleCart())}>
          <CartIcon />
          {totalItems} produto(s)
          {totalItems > 0 && <Badge>{totalItems}</Badge>}
        </CartButton>
      </Container>
    </HeaderBar>
  )
}

export default Header
