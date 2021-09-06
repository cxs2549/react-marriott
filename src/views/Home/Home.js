import styled from 'styled-components'
import Hero from './Hero/Hero'
import Stays from './Stays/Stays'
const StyledHome = styled.div`
	background-color: #fff;
`
const Home = () => {
	return (
		<StyledHome>
			<Hero />
			<Stays />
		</StyledHome>
	)
}
export default Home
