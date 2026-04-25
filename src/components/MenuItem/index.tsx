import styled from 'styled-components'
import type { MenuItem as MenuItemType } from '../../data/restaurants'
import { useState } from 'react'

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

/* Modal overlay */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

const ModalBox = styled.div`
  background-color: #E66767;
  color: #FFF8F2;
  border-radius: 8px;
  max-width: 640px;
  width: 90%;
  display: flex;
  gap: 24px;
  padding: 32px;
  position: relative;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 640px) {
    width: 100%;
    height: 200px;
  }
`

const ModalContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

const ModalDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 300;
  flex: 1;
`

const ModalInfo = styled.p`
  font-size: 14px;
  margin: 16px 0;
`

const ModalButton = styled.button`
  background-color: #FFF8F2;
  color: #E66767;
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0e6dc;
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

  &:hover {
    opacity: 0.7;
  }
`

type MenuItemProps = {
  item: MenuItemType
}

const MenuItemCard = ({ item }: MenuItemProps) => {
  const [showModal, setShowModal] = useState(false)

  const formatPrice = (preco: number) =>
    `R$ ${preco.toFixed(2).replace('.', ',')}`

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
        <Overlay onClick={() => setShowModal(false)}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowModal(false)}>✕</CloseButton>
            <ModalImage src={item.foto} alt={item.nome} />
            <ModalContent>
              <ModalTitle>{item.nome}</ModalTitle>
              <ModalDescription>{item.descricao}</ModalDescription>
              <ModalInfo>Serve: {item.porcao}</ModalInfo>
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
