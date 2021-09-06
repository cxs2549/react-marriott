import styled from 'styled-components'
import List from './List/List'
import Slideshow from './Slideshow/Slideshow'
import Vacations from './Vacations/Vacations'
const StyledStays = styled.div`
    background-color: #F1F1F1;
`
const Stays = () => {
	return (
		<StyledStays className="">
			<div id="wrapper" className="max-w-6xl mx-auto px-2 py-5 xl:px-0 flex flex-col gap-3">
				<h1 className="text-2xl xl:text-3xl font-medium">Stays for Every Kind of Getaway</h1>
				<List />
				<p className="text-sm max-w-lg">
					By experiencing other cultures, we broaden our perspectives and deepen our empathy
					for others. Explore culturally enriching experiences at these hotel brands.{' '}
				</p>
				<Slideshow />
							<Vacations />
			</div>
		</StyledStays>
	)
}
export default Stays
