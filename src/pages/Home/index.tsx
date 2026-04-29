import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantCard from '../../components/RestaurantCard'
import restaurants from '../../data/restaurants'

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

const Home = () => (
  <>
    <Header />
    <RestaurantList>
      <div className="container">
        <Grid>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </Grid>
      </div>
    </RestaurantList>
    <Footer />
  </>
)

export default Home