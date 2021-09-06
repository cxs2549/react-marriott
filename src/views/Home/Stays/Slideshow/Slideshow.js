import styled from 'styled-components'
import Img from './Img/Img'

const StyledSlideshow = styled.div`
   
`
const Slideshow = () => {
	return (
		<StyledSlideshow className="px-1 py-3 flex overflow-x-scroll gap-4">
			<Img />
			<Img />
			<Img />
		</StyledSlideshow>
	)
}
export default Slideshow
