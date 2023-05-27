import styled from 'styled-components'
import { useContext } from 'react'
import ModalContext from '../context/ModalContext'
import PostList from './components/PostList'
import Layout from '../components/Layout'
import Paging from './components/Pagination'
import AddModal from '../components/AddModal'
const MainPage = () => {
	const { isModalOpen, setIsModalOpen } = useContext(ModalContext)

	return (
		<Wrapper>
			{isModalOpen && <AddModal />}
			<Layout>
				<PostList />
				<Paging />
			</Layout>
			{/*페이지 버튼 컨테이너*/}
		</Wrapper>
	)
}

export default MainPage

const Wrapper = styled.div``
