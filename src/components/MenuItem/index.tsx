import styled from 'styled-components'
import type { MenuItem as MenuItemType } from '../../types'
import { useState, useEffect } from 'react'

const Card = styled.div`
  background-color: #E66767;
  border-radius: 8px;
  overflow: hidden;
  color: #FFF8F2;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

const Image = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
  display: block;
`

const Body = styled.div`
  padding: 8px;
`

const Title = styled.h4`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 8px;
`

const Button = styled.button`
  background-color: #FFF8F2;
  color: #E66767;
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0e6dc;
  }
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
  color: #FFF8F2;
  border-radius: 8px;
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
  border-radius: 8px 0 0 8px;

  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
    border-radius: 8px 8px 0 0;
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
  font-size: 18px;
  font-weight: 900;
`

const ModalDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 300;
  flex: 1;
`

const ModalInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;

  span {
    font-weight: 300;
  }
`

const ModalButton = styled.button`
  background-color: #FFF8F2;
  color: #E66767;
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 16px;
  transition: background-color 0.2s, transform 0.15s;

  &:hover {
    background-color: #f0e6dc;
  }

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
  color: #FFF8F2;
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
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
          <Button onClick={() => setShowModal(true)}>
            Mais detalhes
          </Button>
        </Body>
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
