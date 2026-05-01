import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Tag from '../Tag'
import type { Restaurant } from '../../types'

const Card = styled.div`
  background-color: #FFFFFF;
  overflow: hidden;
`

const CardImage = styled.div<{ $bg: string }>`
  height: 217px;
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
  gap: 8px;
`

const CardBody = styled.div`
  padding: 8px;
  background: #FFFFFF;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #E66767;
`

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #E66767;
`

const Rating = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #E66767;
  display: flex;
  align-items: center;
  gap: 4px;
`

const Star = styled.span`
  width: 21px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFB930;
  font-size: 20px;
`

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #E66767;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ButtonLink = styled(Link)`
  display: inline-block;
  width: 82px;
  height: 24px;
  background: #E66767;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #FFEBD9;
  text-decoration: none;
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
          {restaurant.avaliacao}
          <Star>★</Star>
        </Rating>
      </TitleRow>
      <Description>{restaurant.descricao}</Description>
      <ButtonLink to={`/restaurante/${restaurant.id}`}>Saiba mais</ButtonLink>
    </CardBody>
  </Card>
)

export default RestaurantCard