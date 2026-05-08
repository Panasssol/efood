import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { removeItem, clear, closeCart } from '../../store/cartSlice'

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 200;
  opacity: ${(p) => (p.$open ? 1 : 0)};
  visibility: ${(p) => (p.$open ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`

const Sidebar = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 360px;
  max-width: 100%;
  background: #E66767;
  color: #FFEBD9;
  z-index: 201;
  transform: translateX(${(p) => (p.$open ? '0' : '100%')});
  transition: transform 0.35s ease;
  display: flex;
  flex-direction: column;
`

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px 16px;
  border-bottom: 1px solid rgba(255, 235, 217, 0.2);
`

const SidebarTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 900;
`

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: #FFEBD9;
  font-size: 22px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ItemList = styled.ul`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const CartItemCard = styled.li`
  display: flex;
  gap: 8px;
  background: #FFEBD9;
  color: #E66767;
  padding: 8px;
  position: relative;
`

const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  flex-shrink: 0;
`

const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`

const ItemName = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ItemPrice = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
`

const RemoveBtn = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FooterArea = styled.div`
  padding: 16px;
  border-top: 1px solid rgba(255, 235, 217, 0.2);
`

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
`

const CheckoutBtn = styled.button`
  width: 100%;
  background: #FFEBD9;
  color: #E66767;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  cursor: pointer;
  margin-bottom: 8px;
`

const ClearBtn = styled.button`
  width: 100%;
  background: transparent;
  color: #FFEBD9;
  border: 1px solid #FFEBD9;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  cursor: pointer;
`

const EmptyMsg = styled.p`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  padding: 40px 0;
  opacity: 0.8;
`

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E66767" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
)

const formatPrice = (value: number) =>
  `R$ ${value.toFixed(2).replace('.', ',')}`

const Cart = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootState) => state.cart)

  const totalPrice = items.reduce((sum, i) => sum + i.preco * i.quantidade, 0)

  return (
    <>
      <Overlay $open={isOpen} onClick={() => dispatch(closeCart())} />
      <Sidebar $open={isOpen}>
        <SidebarHeader>
          <SidebarTitle>
            Carrinho ({items.reduce((s, i) => s + i.quantidade, 0)})
          </SidebarTitle>
          <CloseBtn onClick={() => dispatch(closeCart())}>✕</CloseBtn>
        </SidebarHeader>

        <ItemList>
          {items.length === 0 ? (
            <EmptyMsg>O carrinho está vazio.<br />Adicione itens do cardápio!</EmptyMsg>
          ) : (
            items.map((item) => (
              <CartItemCard key={item.id}>
                <ItemImg src={item.foto} alt={item.nome} />
                <ItemInfo>
                  <ItemName>{item.nome}</ItemName>
                  <ItemPrice>
                    {item.quantidade > 1 && `${item.quantidade}x `}
                    {formatPrice(item.preco * item.quantidade)}
                  </ItemPrice>
                </ItemInfo>
                <RemoveBtn onClick={() => dispatch(removeItem(item.id))}>
                  <TrashIcon />
                </RemoveBtn>
              </CartItemCard>
            ))
          )}
        </ItemList>

        {items.length > 0 && (
          <FooterArea>
            <TotalRow>
              <span>Valor total</span>
              <span>{formatPrice(totalPrice)}</span>
            </TotalRow>
            <CheckoutBtn onClick={() => alert('Funcionalidade de checkout em breve!')}>
              Continuar com a entrega
            </CheckoutBtn>
            <ClearBtn onClick={() => dispatch(clear())}>
              Limpar carrinho
            </ClearBtn>
          </FooterArea>
        )}
      </Sidebar>
    </>
  )
}

export default Cart