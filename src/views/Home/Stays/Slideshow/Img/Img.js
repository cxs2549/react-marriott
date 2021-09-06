import styled from 'styled-components'
import luxury from '../../../../../assets/cards/luxury.jpg'
import { HiChevronRight } from 'react-icons/hi'

const StyledImg = styled.div`
	min-width: 80%;
    overflow: hidden;
    @media (min-width: 640px) {
        min-width: 280px;
    }
	svg {
		font-size: 3rem;
		margin-right: -8px;
	}
`
const Img = () => {
	return (
		<StyledImg className="img w-11/12 shadow rounded-b-xl rounded-t-xl">
			<img src={luxury} className="rounded-t-xl h-48 object-cover object-right" alt="" />
			<div className="px-4 pb-5 pt-4">
				<h4 className="font-medium mb-1">The Luxury Collection</h4>
				<div className="flex gap-2 items-center justify-between">
					<p className="text-sm text-gray-600">
						Escape to iconic hotels that are living expressions of the communities they
						call home.
					</p>
					<HiChevronRight />
				</div>
			</div>
		</StyledImg>
	)
}
export default Img
