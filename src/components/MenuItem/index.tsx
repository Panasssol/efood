import styled from 'styled-components'
import type { MenuItem as MenuItemType } from '../../data/restaurants'
import { useState } from 'react'

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

  &:hover {
    opacity: 0.9;
  }
`

/* Modal */
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
  color: #FFEBD9;
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
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #FFEBD9;
  margin-bottom: 16px;
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
  margin: 16px 0;
`

const ModalButton = styled.button`
  background: #FFEBD9;
  color: #E66767;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    opacity: 0.9;
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
        </Body>
        <Button onClick={() => setShowModal(true)}>Mais detalhes</Button>
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