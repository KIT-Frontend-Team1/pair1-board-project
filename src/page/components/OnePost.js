import { useState } from 'react'
import styled from 'styled-components'
import SimpleSlider from './ImgSlider'
import Comments from './Comment'
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import useInput from '../use-input';

//OnePost : PostList의 하위 컴포넌트
// 포스트를 하나하나 받아 렌더링 합니다.
const OnePost = ({ data, onDelete , onUpdate }) => {
	//props로 받은 data에서 name(이름), content(내용),
	//comments(댓글), postImg(포스트이미지)를 구조분해 할당으로 변수 선언
	const name = data.user.name
	const { content, comments, postImg } = data
	console.log('data',data)
	//comment창을 보여주는 state. 보여주면 true, 아니면 false
	const [isComment, setIsComment] = useState(false)
	const [isEditMode, setIsEditMode] = useState(false);
  	const [editContent, setEditContent] = useInput(content);

	//isComment를 바꿔주는 함수
	const onClickCommentShow = () => {
		setIsComment(prev => !prev)
	}

	const handleSetIsEditMode = () => {
		if (!isEditMode) return setIsEditMode(true);
		onUpdate(id, editContent);
		setIsEditMode(false);
	  };


	return (
		<Wrapper isComment={isComment}>
			<PostContainer>
				<UserContainer>{name}</UserContainer>
				<ImageContainer>
					<SimpleSlider postImg={postImg} />
				</ImageContainer>
				<ButtonContainer>
					<AiFillEdit 
						onClick = { () => handleSetIsEditMode } onChange={setEditContent} type="button"/>
					<AiFillDelete 
						onClick = { () => onDelete(data.id) } type="button"/> 
					<Button onClick={onClickCommentShow} type="button">
						댓글
					</Button>
				</ButtonContainer>
				<TextContainer>{content}</TextContainer>
			</PostContainer>
			{isComment && (
				<CommentContainer>
					<Comments comments={comments} />
				</CommentContainer>
			)}
			<Content state={state}>
          {isEditMode ? (
            <textarea onChange={setEditContent} value={editContent}></textarea>
          ) : (
            content
          )}
        </Content>
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

const Button2 = styled.button`
	border-radius: 15px;
	background-color: skyblue;
	font-size: 20px;
	position: absolute;
	right: 30;
`

//버튼들 들어가는 곳
const ButtonContainer = styled.div`
	width: 100%;
	height: 50px;
	background-color: pink;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	margin-top: 50px;
`
