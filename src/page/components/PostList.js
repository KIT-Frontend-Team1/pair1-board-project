import styled from 'styled-components'
import OnePost from './OnePost'

//PostList : 실제 포스트들(3개)가 페이지마다 렌더링 되는 컴포넌트
//Pagination에서 currentPageData를 받아서
//Onepost로 map을 돌려 post를 렌더링
const PostList = ({ currentPageData }) => {
	console.log('daa', currentPageData)
	return (
		<Wrapper>
			{currentPageData &&
				currentPageData.map(data => (
					<OnePost key={Math.floor(Math.random() * 10000)} data={data} />
				))}
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
