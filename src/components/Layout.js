import NavBar from './NavBar'
import styled from 'styled-components'
const Layout = ({ children }) => {
	return (
		<Wrapper>
			<NavBar />
			<ContentContainer>{children}</ContentContainer>
		</Wrapper>
	)
}

export default Layout

const Wrapper = styled.div`
	display: flex;
`

const ContentContainer = styled.div`
	margin-left: 15%;
	width: 85%;
	background-color: #ececec;
	display: flex;
	justify-content: center;
	padding-top: 50px;
`
