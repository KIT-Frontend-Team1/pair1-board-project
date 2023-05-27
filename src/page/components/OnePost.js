import { useState } from 'react'
import styled from 'styled-components'
import SimpleSlider from './ImgSlider'
import Comments from './Comment'

const OnePost = ({ data }) => {
	const name = data.User.name
	const content = data.content
	const comments = data.Comments
	const postImg = data.PostImg

	//comment창을 보여주는 state
	const [isComment, setIsComment] = useState(false)

	const onClickCommentShow = () => {
		setIsComment(prev => !prev)
	}

	return (
		<Wrapper isComment={isComment}>
			<PostContainer>
				<UserContainer>{name}</UserContainer>
				<ImageContainer>
					<SimpleSlider postImg={postImg} />
				</ImageContainer>
				<ButtonContainer>
					수정, 삭제 버튼 들어가는 곳
					<Button onClick={onClickCommentShow} type="button">
						댓글 {comments.length}개
					</Button>
				</ButtonContainer>
				<TextContainer>{content}</TextContainer>
			</PostContainer>
			{isComment && (
				<CommentContainer>
					<Comments comments={comments} />
				</CommentContainer>
			)}
		</Wrapper>
	)
}

export default OnePost

const Wrapper = styled.div`
	background-color: white;
	display: flex;
	margin-bottom: 50px;
	width: ${props => (props.isComment ? '850px' : '500px')};
`
//글쓴이 정보 컨테이너(상단)
const UserContainer = styled.div`
	width: 100%;
	height: 50px;
	font-size: 20px;
	font-weight: 500;
	padding-top: 10px;
	padding-left: 10px;
	background-color: white;
`

const PostContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`
const ImageContainer = styled.div`
	width: 100%;
`

const CommentContainer = styled.div`
	height: 750px;
	width: 350px;
`
//글 들어가는 곳
const TextContainer = styled.div`
	background-color: white;
	width: 100%;
	height: 150px;
	padding: 10px;
	font-size: 19px;
`
const Button = styled.button`
	border-radius: 15px;
	background-color: skyblue;
	font-size: 20px;
	position: absolute;
	right: 0;
`

//버튼들 들어가는 곳
const ButtonContainer = styled.div`
	width: 100%;
	height: 50px;
	background-color: pink;
	position: relative;
	display: flex;
	justify-content: space-evenly;
`
