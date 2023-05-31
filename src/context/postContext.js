import { DATA } from '../data/faker'
import { createContext } from 'react'
import { useContext, useReducer } from 'react'
const { faker } = require('@faker-js/faker')
const initialState = DATA

const postContext = createContext()

export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

//post의 상태를 바꿔주는 reducer함수
const postReducer = (initialState, action) => {
	switch (action.type) {
		//ADD_POST: 포스트 추가 로직
		//newPost객체를 만들어 기존 데이터의 앞에다 추가
		case ADD_POST: {
			const addState = [...initialState]
			const newPost = {
				id: Math.floor(Math.random() * 10000),
				user: {
					id: 123456,
					name: 'me',
				},
				content: action.payload.Text,
				postImg: action.payload.Img,
				comments: [],
				myPost: true,
			}
			return [newPost, ...addState]
		}
		//UPDATE_POST: 포스트 수정 로직
		//해당 postId를 받아서 전제에서 해당 post를 찾아 content 부분을
		//payload로 받은 editText로 바꿔준다.
		case UPDATE_POST: {
			const updateState = [...initialState]
			const { postId, editText } = action.payload
			const targetEditPost = updateState.find(post => post.id === postId)
			targetEditPost.content = editText
			return updateState
		}
		//DELETE_POST: 포스트 삭제 로직
		//해당 postId를 받아 전체에서 해당 id와 일치하는 포스트만 filter 해줌
		case DELETE_POST: {
			const deleteState = [...initialState]
			deleteState.filter(post => post.id === action.payload.postId)
			return deleteState
		}
		//ADD_COMMENT : 댓글 추가 로직
		//해당 포스트의 postId를 받아서 해당 포스트에 newComment객체를 수정해 comment
		//배열에 앞에다가 추가. 이따 payload로 받아온 commnetText를 content의 값으로 사용
		case ADD_COMMENT: {
			//얕은 복사를 하니까 댓글이 2번 추가됨. JSON.stringfy를 통해 댓글까지 깊은
			//복사를 하니까 오류 해결...음
			// const _addState = [...initialState]
			const _addState = JSON.parse(JSON.stringify(initialState))
			const { commentText, postId } = action.payload
			const targetCommentPost = _addState.find(post => post.id === postId)
			const newComment = {
				user: {
					id: faker.string.alphanumeric(6),
					name: 'me',
				},
				myComment: true,
				content: commentText,
			}
			targetCommentPost.comments = [newComment, ...targetCommentPost.comments]
			return _addState
		}
		//DELETE_COMMENT : 댓글 삭제 로직
		//해당 포스트의 아이디와 postId, 댓글의 아이디 CommentId를 받음
		//우선 해당 포스트와 id가 일치하는 post를 찾아 targetDeleteCommentPost로 지정하고
		//그 포스트의 댓글중 CommentId와 일치하는 comment를 filter함
		//그리고 포스트의 Comment를 바뀐 newComment(댓글이 삭제된)으로 바꿔줌
		case DELETE_COMMENT: {
			const _deleteState = JSON.parse(JSON.stringify(initialState))
			const { postId, CommentId } = action.payload
			const targetDeleteCommentPost = _deleteState.find(
				post => post.id === postId,
			)
			const newComment = targetDeleteCommentPost.comments.filter(
				comment => comment.user.id !== CommentId,
			)
			targetDeleteCommentPost.comments = newComment
			return _deleteState
		}

		default:
			return initialState
	}
}
const PostContextProvider = ({ children }) => {
	const [data, dispatch] = useReducer(postReducer, initialState)
	return (
		<postContext.Provider value={[data, dispatch]}>
			{children}
		</postContext.Provider>
	)
}

export default PostContextProvider

export const usePostContext = () => useContext(postContext)
