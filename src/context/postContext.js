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

const postReducer = (initialState, action) => {
	switch (action.type) {
		//포스트 추가 로직
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
		case UPDATE_POST: {
			const updateState = [...initialState]
			const { postId, editText } = action.payload
			const targetEditPost = updateState.find(post => post.id === postId)
			targetEditPost.content = editText
			return updateState
		}
		case DELETE_POST: {
			const deleteState = [...initialState]
			deleteState.filter(post => post.id === action.payload.postId)
			return deleteState
		}
		case ADD_COMMENT: {
			//얕은 복사를 하니까 댓글이 2번 추가됨. JSON.stringfy를 통해 댓글까지 깊은
			//복사를 하니까 오류 해결
			// const _addState = [...initialState]
			const _addState = JSON.parse(JSON.stringify(initialState))
			const { commentText, postId } = action.payload
			const targetCommentPost = _addState.find(post => post.id === postId)
			console.log(targetCommentPost)
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
		case DELETE_COMMENT: {
			const _deleteState = JSON.parse(JSON.stringify(initialState))
			const { postId, CommentId } = action.payload
			console.log(postId, CommentId)
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
