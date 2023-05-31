import styled from 'styled-components'
import { useState } from 'react'
import Layout from '../components/Layout'
import Paging from './components/Pagination'
import AddModal from '../components/AddModal'
import { usePostContext } from '../context/postContext'
import LoadingPage from './loadingPage'
//mainpage
const MainPage = () => {
	//addModal이 보이면 true, 아니면 false
	const [isModalOpen, setIsModalOpen] = useState(false)
	//data : post로 뿌려줄 데이터. 초기 데이터는 faker에서 가져온 DATA.
	const [data, dispatch] = usePostContext()

	return data && data.length > 0 ? (
		<Wrapper>
			{isModalOpen && (
				<AddModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
			)}
			<Layout setIsModalOpen={setIsModalOpen}>
				<Paging data={data} />
			</Layout>
		</Wrapper>
	) : (
		<LoadingPage />
	)
}

export default MainPage

const Wrapper = styled.div``
