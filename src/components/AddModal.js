import styled from 'styled-components'
import { GrFormClose } from 'react-icons/gr'
import { useState } from 'react'

const AddModal = ({ onAddPost, setIsModalOpen, isModalOpen }) => {
	//글 추가하는 모달창 닫는 함수
	const onClickModalClose = () => {
		if (isModalOpen) {
			return setIsModalOpen(false)
		}
		return isModalOpen
	}

	const [Text, setText] = useState('')
	const onChangeinput = e => {
		setText(e.target.value)
	}

	const [Img, setImg] = useState([])
	const onChangeImg = e => {
		const fileArr = Array.from(e.target.files)
		// console.log(fileArr)
		// setImg(prev => [...prev, ...fileArr])
		console.log('image', Img)
		for (let i = 0; i < fileArr.length; i++) {
			const imageUrl = URL.createObjectURL(fileArr[i])
			setImg(prev => [...prev, imageUrl])
		}
	}

	const onSubmit = e => {
		e.preventDefault()
		onAddPost(Text, Img)
	}

	// const onAddImage = () => {

	// }

	return (
		<Wrapper>
			<Form onSubmit={onSubmit}>
				<RelativeContainer>
					<GrFormClose size="50px" onClick={onClickModalClose} />
					<div>포스트 작성하는 곳</div>
					{/*이미지 업로드 */}
					<input type="file" accept="image/*" multiple onChange={onChangeImg} />

					{/* {Img.map(image => {
						return <div>{image}</div>
					})} */}
					<Input onChange={onChangeinput} value={Text} />
					<button>사진업로드</button>
					<Button>POST</Button>
				</RelativeContainer>
			</Form>
		</Wrapper>
	)
}
export default AddModal

const Input = styled.input`
	margin-top: 30px;
	width: 500px;
	height: 350px;
	border: 1px solid black;
	font-size: 20px;
	padding-left: 20px;
`
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
`

// let fileURLs = []
// for (let i = 0; i < fileArr.length; i++) {
// 	// const nowImgUrl = URL.createObjectURL(fileArr[i])
// }
