import styled from 'styled-components'
const Layout = ({ children, setIsModalOpen }) => {
	const onClickModalOpen = () => {
		console.log('click')
		setIsModalOpen(true)
	}

	return (
		<Wrapper>
			<NavBar>
				<Img src="/image/instagram.png" />
				<Button onClick={onClickModalOpen}>post</Button>
			</NavBar>
			<ContentContainer>{children}</ContentContainer>
		</Wrapper>
	)
}

export default Layout

const Wrapper = styled.div`
	display: flex;
`

const Img = styled.img`
	height: 100px;
`
const NavBar = styled.div`
	width: 15%;
	height: 100vh;
	position: fixed;
	display: flex;
	color: black;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	div && button {
		margin: 20px;
	}
`

const Button = styled.button`
	width: 100px;
	height: 50px;
	border-radius: 25px;
`

const ContentContainer = styled.div`
	margin-left: 15%;
	width: 85%;
	background-color: #ececec;
	display: flex;
	justify-content: center;
	padding-top: 50px;
`
