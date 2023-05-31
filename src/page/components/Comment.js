import styled from 'styled-components'

//OnePost의 하위 컴포넌트 comments를 받아서 렌더링
const Comments = ({ comments }) => {
	return (
		<Wrapper>
			<Title>Comment</Title>
			<CommentContainer>
				{comments.map((comment, index) => {
					return (
						<OneComment key={index}>
							<CommentName>{comment.user.name}</CommentName>
							<div>{comment.content}</div>
						</OneComment>
					)
				})}
			</CommentContainer>
			<CommentInput placeholder="댓글 작성..." />
		</Wrapper>
	)
}

export default Comments

const Title = styled.div`
	width: 100%;
	height: 50px;
	font-size: 20px;
	font-weight: 500;
	position: absolute;
	padding-top: 10px;
	top: 0;
`
const CommentContainer = styled.div`
	margin-top: 40px;
	/* background-color: skyblue; */
	height: 520px;
	width: 330px;
	overflow-y: scroll;
`
const Wrapper = styled.div`
	height: 100%;
	width: 350px;
	position: relative;
	padding-top: 10px;
	padding-left: 10px;
	display: flex;
	flex-direction: column;
`
const OneComment = styled.div`
	margin-bottom: 20px;
`
const CommentInput = styled.input`
	margin-top: 10px;
	width: 330px;
	height: 200px;
	bottom: 10px;
	/* background-color: yellowgreen; */
	border: 1px solid black;
`

const CommentName = styled.div`
	font-weight: 500;
	font-size: 16px;
`
