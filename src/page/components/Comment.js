import styled from 'styled-components'
import { useState } from 'react'
import {
	ADD_COMMENT,
	DELETE_COMMENT,
	usePostContext,
} from '../../context/postContext'

//Comments : 댓글 보여주는 컴포넌트
const Comments = ({ comments, id }) => {
	const [commentText, setCommentText] = useState('')
	const [post, dispatch] = usePostContext()

	//작성한 댓글 관리하는 함수
	const onChangeCommentInput = e => {
		setCommentText(e.target.value)
	}

	//댓글 작성후 게시하는 함수
	const onSubmitComment = e => {
		e.preventDefault()
		dispatch({
			type: ADD_COMMENT,
			payload: {
				commentText,
				postId: id,
			},
		})
		e.stopPropagation()
	}

	//댓글 삭제하는 함수. 해당 댓글의 CommentId를 dispatch의 인자로 넘겨줘서 삭제함
	const onDeleteComment = CommentId => {
		dispatch({
			type: DELETE_COMMENT,
			payload: {
				postId: id,
				CommentId,
			},
		})
	}
	return (
		<Wrapper>
			<Title>Comment</Title>
			<CommentContainer>
				{comments &&
					comments.map((comment, index) => {
						//내 Comment인지를 boolean값으로 전달해
						//댓글 이름의 색상을 바꿔줌
						const myComment = comment.myComment
						const targetId = comment.id
						return (
							<OneComment key={index}>
								<CommentName myComment={myComment}>
									{comment.user.name}
									{/*myComment가 true일때만 삭제 버튼이 보임
									삭제할 때 해당 댓글의 id를 props로 넘김(해당 댓글을 판별하기 위함)*/}
									{myComment ? (
										<button onClick={() => onDeleteComment(comment.user.id)}>
											삭제
										</button>
									) : null}
								</CommentName>
								<div>{comment.content}</div>
							</OneComment>
						)
					})}
			</CommentContainer>
			<form onSubmit={onSubmitComment}>
				<CommentInput
					value={commentText}
					onChange={onChangeCommentInput}
					placeholder="댓글 작성..."
				/>
				<CommentBtn type="submit">게시</CommentBtn>
			</form>
		</Wrapper>
	)
}

export default Comments

const CommentBtn = styled.button`
	width: 100px;
	height: 30px;
	margin-left: 230px;
`
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
	height: 150px;
	bottom: 10px;
	/* background-color: yellowgreen; */
	border: 1px solid black;
`

const CommentName = styled.div`
	font-weight: 500;
	font-size: 16px;
	color: ${props => (props.myComment ? 'orange' : 'black')};
	display: flex;
	justify-content: space-between;
`
