import { DATA } from '../data/faker'
import { createContext } from 'react'
import { useContext, useReducer } from 'react'

const initialState = DATA

const postContext = createContext()

const postReducer = (initialState, action) => {}

const PostContextProvider = ({ children }) => {
	const [post, dispatch] = useReducer(postReducer, initialState)
	return (
		<postContext.Provider value={[post, dispatch]}>
			{children}
		</postContext.Provider>
	)
}

export default PostContextProvider

export const usePostContext = () => useContext(postContext)
