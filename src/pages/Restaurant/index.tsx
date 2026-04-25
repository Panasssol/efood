import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import MenuItemCard from '../../components/MenuItem'
import restaurants from '../../data/restaurants'

const MenuSection = styled.section`
  padding: 56px 0 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const NotFound = styled.div`
  text-align: center;
  padding: 120px 16px;
  color: #E66767;
  font-size: 24px;
  font-weight: 700;
`

const Restaurant = () => {
  const { id } = useParams()
  const restaurant = restaurants.find((r) => r.id === Number(id))

  if (!restaurant) {
    return <NotFound>Restaurante não encontrado</NotFound>
  }

  return (
    <>
      <Hero
        titulo={restaurant.titulo}
        tipo={restaurant.tipo}
        capa={restaurant.capa}
      />
      <MenuSection>
        <div className="container">
          <Grid>
            {restaurant.cardapio.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </Grid>
        </div>
      </MenuSection>
      <Footer />
    </>
  )
}

export default Restaurant
