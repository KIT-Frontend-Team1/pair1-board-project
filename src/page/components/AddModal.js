import styled from 'styled-components'
import { GrFormClose } from 'react-icons/gr'
import { useContext } from 'react'
import ModalContext from '../../context/ModalContext'

const AddModal = () => {
	const { isModalOpen, setIsModalOpen } = useContext(ModalContext)

	//글 추가하는 모달창 닫는 함수
	const onClickModalClose = () => {
		if (isModalOpen) {
			return setIsModalOpen(false)
		}
		return isModalOpen
	}

	return (
		<Wrapper>
			<Form>
				<RelativeContainer>
					<GrFormClose size="50px" onClick={onClickModalClose} />
					<div>포스트 작성하는 곳</div>
					<TextArea>asdf</TextArea>
					<Button type="button">POST</Button>
				</RelativeContainer>
			</Form>
		</Wrapper>
	)
}
export default AddModal

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 1000;
`
const Form = styled.form`
	width: 600px;
	height: 600px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`

const TextArea = styled.textarea`
	width: 480px;
	height: 400px;
	background-color: yellowgreen;
	margin: 0 auto;
`

const RelativeContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const Button = styled.button`
	width: 100px;
	height: 50px;
	border-radius: 25px;
	margin-top: 50px;
`
