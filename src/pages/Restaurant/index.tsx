import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import MenuItemCard from '../../components/MenuItem'
import Loader from '../../components/Loader'
import { useRestaurant } from '../../api'

const MenuSection = styled.section`
  padding: 56px 0;
  background: #FFF8F2;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 32px;
  justify-content: center;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 320px);
  }

  @media (max-width: 700px) {
    grid-template-columns: 320px;
  }
`

const ErrorMsg = styled.p`
  text-align: center;
  color: #E66767;
  font-size: 18px;
  padding: 80px 0;
`

const Restaurant = () => {
  const { id } = useParams()
  const { restaurant, loading, error } = useRestaurant(id)

  if (loading) {
    return <Loader />
  }

  if (error || !restaurant) {
    return <ErrorMsg>{error || 'Restaurante não encontrado'}</ErrorMsg>
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