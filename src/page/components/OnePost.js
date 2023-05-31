import { useState } from 'react'
import styled from 'styled-components'
import SimpleSlider from './ImgSlider'
import Comments from './Comment'
import { FaRegCommentDots } from 'react-icons/fa'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { BiEditAlt } from 'react-icons/bi'
import { DELETE_POST, UPDATE_POST } from '../../context/postContext'
import { usePostContext } from '../../context/postContext'

//OnePost : PostList의 하위 컴포넌트 포스트를 하나하나 받아 렌더링
const OnePost = ({ data }) => {
	//props로 받은 data에서 각각의 속성을 구조분해 할당으로 변수 선언
	const name = data.user.name
	const { content, comments, postImg, id, myPost } = data
	//전역상태 사용
	const [post, dispatch] = usePostContext()

	//comment창을 보여주는 state. 보여주면 true, 아니면 false
	const [isComment, setIsComment] = useState(true)
	//수정모드가 true이면 input, 아니면 text 보여줌
	const [isEditMode, setIsEditMode] = useState(false)
	//수정한 글 관리하는 상태
	const [editText, setEditText] = useState(content)

	//onClickCommentShow : isComment를 바꿔주는 함수
	//@현재 버블링으로 (상위 컴포넌트의 이벤트- 댓글창이 펴지고 닫아지는 이벤트 발생으로
	//true로 고정시켜 놓음)
	const onClickCommentShow = () => {
		// setIsComment(prev => !prev)
		setIsComment(true)
	}

	//edit모드 바꿔주는 함수
	//@현재 버블링으로 (상위 컴포넌트의 이벤트- 댓글창이 펴지고 닫아지는 이벤트 발생으로
	//true로 고정시켜 놓음)사용 x
	const onClickEditMode = e => {
		myPost
			? setIsEditMode(prev => !prev)
			: alert('본인의 글만 수정할 수 있습니다!')
	}

	//edit input 관리해주는 함수
	const onChangeEdit = e => {
		setEditText(e.target.value)
	}

	//수정한 글을 제출하는 함수. dispatch로 해당 post의 id와, 수정한 글, 내 포스트
	//여부를 전달함.
	const onSumbitEdit = () => {
		setIsEditMode(prev => !prev)
		dispatch({
			type: UPDATE_POST,
			payload: { postId: id, editText, myPost },
		})
	}

	//delete실행
	//@alert 부분에서 에러 : 새로고침 되면 글 모두가 삭제됨 => 나중에 수정
	//window.location.reload() 때문!
	const onDelete = () => {
		if (myPost) {
			dispatch({
				type: DELETE_POST,
				payload: { postId: id },
			})
			window.location.reload()
		} else {
			alert('본인의 글만 삭제할 수 있습니다!')
		}
	}

	return (
		<Wrapper isComment={isComment}>
			<PostContainer>
				<UserContainer>{name}</UserContainer>
				<ImageContainer>
					<SimpleSlider postImg={postImg} />
				</ImageContainer>
				<ButtonContainer>
					{/*수정모드이냐에 따라 버튼 기능과 색상이 바뀜*/}
					{!isEditMode ? (
						<BiEditAlt onClick={onClickEditMode} size="30" color="black" />
					) : (
						<BiEditAlt onClick={onSumbitEdit} size="30" color="skyblue" />
					)}
					<MdOutlineDeleteOutline size="30" color="black" onClick={onDelete} />
					<FaRegCommentDots
						size="30"
						color="black"
						onClick={onClickCommentShow}
						type="button"
					/>
				</ButtonContainer>
				{/*수정모드이냐에 따라 수정인풋이 나오거나 text가 나옴*/}
				{isEditMode ? (
					<EditInput onChange={onChangeEdit} value={editText} />
				) : (
					<TextContainer>{content}</TextContainer>
				)}
			</PostContainer>
			{isComment && (
				<CommentContainer>
					<Comments
						setIsComment={setIsComment}
						id={id}
						comments={comments}
						myPost={myPost}
					/>
				</CommentContainer>
			)}
		</Wrapper>
	)
}

export default OnePost

const EditInput = styled.textarea`
	width: 500px;
	height: 150px;
	border: 1px solid black;
	font-size: 17px;
	padding-top: 15px;
`
const Wrapper = styled.div`
	width: 100%;
	margin: 0 100px;
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
	position: relative;
	display: flex;
	justify-content: space-evenly;
	margin-top: 50px;
`
