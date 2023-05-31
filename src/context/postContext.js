import { DATA } from '../data/faker'
import { createContext } from 'react'
import { useContext, useReducer } from 'react'

const initialState = DATA

const postContext = createContext()

export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

const postReducer = (initialState, action) => {
	switch (action.type) {
		//포스트 추가 로직
		case ADD_POST: {
			const newPost = {
				id: Math.floor(Math.random() * 10000),
				user: {
					id: 123456,
					name: 'me',
				},
				content: action.payload.Text,
				postImg: action.payload.Img,
				comment: [],
				myPost: true,
			}
			return [newPost, ...initialState]
		}
		case UPDATE_POST: {
		}
		case DELETE_POST: {
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
