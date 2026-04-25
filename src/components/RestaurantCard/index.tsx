import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Tag from '../Tag'
import type { Restaurant } from '../../types'

const Card = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #E66767;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(230, 103, 103, 0.15);
  }
`

const CardImage = styled.div<{ $bg: string }>`
  height: 220px;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  position: relative;
`

const TagsWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 4px;
`

const CardBody = styled.div`
  padding: 8px 8px 12px;
`

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #E66767;
`

const Rating = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #E66767;
  display: flex;
  align-items: center;
  gap: 6px;
`

const Star = styled.span`
  color: #FFB930;
  font-size: 20px;
`

const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #333;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ButtonLink = styled(Link)`
  display: inline-block;
  background-color: #E66767;
  color: #FFF8F2;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #cc5555;
  }
`

type RestaurantCardProps = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => (
  <Card>
    <CardImage $bg={restaurant.capa}>
      <TagsWrapper>
        {restaurant.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{restaurant.tipo}</Tag>
      </TagsWrapper>
    </CardImage>
    <CardBody>
      <TitleRow>
        <Title>{restaurant.titulo}</Title>
        <Rating>
          <Star>★</Star>
          {restaurant.avaliacao}
        </Rating>
      </TitleRow>
      <Description>{restaurant.descricao}</Description>
      <ButtonLink to={`/restaurante/${restaurant.id}`}>Saiba mais</ButtonLink>
    </CardBody>
  </Card>
)

export default RestaurantCard
