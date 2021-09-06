import styled from 'styled-components'
import Slideshow from '../Slideshow/Slideshow'
import { HiChevronRight } from 'react-icons/hi'
const StyledVacations = styled.div`
    svg {
        font-size: 1.25rem;
    }
`
const Vacations = () => {
	return (
		<StyledVacations>
			<div className="flex items-center justify-between">
				<h1 className="text-2xl xl:text-3xl font-medium mb-1">Vacation Rentals</h1>
				<button className="flex items-center text-sm font-medium">
					<span>Explore Homes</span>
					<HiChevronRight />
				</button>
			</div>
			<Slideshow />
		</StyledVacations>
	)
}
export default Vacations
