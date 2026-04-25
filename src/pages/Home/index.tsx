import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantCard from '../../components/RestaurantCard'
import Loader from '../../components/Loader'
import { useRestaurants } from '../../api'

const RestaurantList = styled.section`
  padding: 80px 0 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ErrorMsg = styled.p`
  text-align: center;
  color: #E66767;
  font-size: 18px;
  padding: 80px 0;
`

const Home = () => {
  const { restaurants, loading, error } = useRestaurants()

  return (
    <>
      <Header />
      <RestaurantList>
        <div className="container">
          {loading && <Loader />}
          {error && <ErrorMsg>{error}</ErrorMsg>}
          {!loading && !error && (
            <Grid>
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </Grid>
          )}
        </div>
      </RestaurantList>
      <Footer />
    </>
  )
}

export default Home
