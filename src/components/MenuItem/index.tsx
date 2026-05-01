import styled from 'styled-components'
import type { MenuItem as MenuItemType } from '../../types'
import { useState, useEffect } from 'react'

const Card = styled.div`
  background: #E66767;
  width: 320px;
  height: 338px;
  overflow: hidden;
  position: relative;
`

const Image = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  display: block;
  margin: 8px auto 0;
`

const Body = styled.div`
  padding: 0 8px 8px;
`

const Title = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: #FFEBD9;
  margin-top: 8px;
  margin-bottom: 8px;
`

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFEBD9;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 8px;
`

const Button = styled.button`
  display: block;
  width: 304px;
  height: 24px;
  background: #FFEBD9;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #E66767;
  cursor: pointer;
  position: absolute;
  bottom: 8px;
  left: 8px;
`

/* ===== MODAL ===== */

const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 16px;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transition: opacity 0.3s ease;
`

const ModalBox = styled.div<{ $visible: boolean }>`
  background-color: #E66767;
  color: #FFEBD9;
  max-width: 1024px;
  width: 100%;
  display: flex;
  position: relative;
  transform: ${(p) => (p.$visible ? 'scale(1)' : 'scale(0.92)')};
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transition: transform 0.3s ease, opacity 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 90vh;
    overflow-y: auto;
  }
`

const ModalImage = styled.img`
  width: 280px;
  min-height: 280px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
  }
`

const ModalContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 8px;
`

const ModalTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #FFEBD9;
`

const ModalDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFEBD9;
  flex: 1;
`

const ModalInfo = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #FFEBD9;
  margin-top: 12px;

  span {
    font-weight: 300;
  }
`

const ModalButton = styled.button`
  background: #FFEBD9;
  color: #E66767;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 4px 8px;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 16px;

  &:active {
    transform: scale(0.97);
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: #FFEBD9;
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

type MenuItemProps = {
  item: MenuItemType
}

const formatPrice = (preco: number) =>
  `R$ ${preco.toFixed(2).replace('.', ',')}`

const MenuItemCard = ({ item }: MenuItemProps) => {
  const [showModal, setShowModal] = useState(false)
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => setAnimateIn(true))
    } else {
      document.body.style.overflow = ''
      setAnimateIn(false)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showModal])

  const handleClose = () => {
    setAnimateIn(false)
    setTimeout(() => setShowModal(false), 300)
  }

  return (
    <>
      <Card>
        <Image src={item.foto} alt={item.nome} />
        <Body>
          <Title>{item.nome}</Title>
          <Description>{item.descricao}</Description>
        </Body>
        <Button onClick={() => setShowModal(true)}>Mais detalhes</Button>
      </Card>

      {showModal && (
        <Overlay $visible={animateIn} onClick={handleClose}>
          <ModalBox $visible={animateIn} onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleClose}>✕</CloseButton>
            <ModalImage src={item.foto} alt={item.nome} />
            <ModalContent>
              <ModalTitle>{item.nome}</ModalTitle>
              <ModalDescription>{item.descricao}</ModalDescription>
              <ModalInfo>
                Serve: <span>{item.porcao}</span>
              </ModalInfo>
              <ModalButton>
                Adicionar ao carrinho - {formatPrice(item.preco)}
              </ModalButton>
            </ModalContent>
          </ModalBox>
        </Overlay>
      )}
    </>
  )
}

export default MenuItemCard