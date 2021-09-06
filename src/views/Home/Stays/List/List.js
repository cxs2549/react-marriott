import styled from 'styled-components'
const StyledList = styled.div`
	.item {
		border-radius: 99999px;
		padding: .5rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 84%;
		background-color: white;
		width: min-content;
		font-weight: 600;
	}
`
const List = () => {
	const items = [
		'cultural immersion',
		'wellness',
		'family connections',
		'outdoor & road trips',
		'one of a kind'
	]
	return (
		<StyledList className="px-3 flex gap-3 overflow-x-scroll">
			{items.map((item, i) => (
				<div
					key={i}
					style={{ backgroundColor: i === 0 && 'black', color: i === 0 && 'white' }}
					className="item whitespace-nowrap capitalize"
				>
					{item}
				</div>
			))}
		</StyledList>
	)
}
export default List
