import styled from 'styled-components'
import OnePost from './OnePost'
const PostList = ({ currentPageData }) => {
	console.log('daa', currentPageData)
	return (
		<Wrapper>
			{currentPageData &&
				currentPageData.map(data => (
					<OnePost key={Math.floor(Math.random() * 10000)} data={data} />
				))}
			;
		</Wrapper>
	)
}

export default PostList

const Wrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
`
