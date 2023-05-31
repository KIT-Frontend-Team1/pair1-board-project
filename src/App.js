import './App.css'
import MainPage from './page/mainPage'
import GlobalStyles from './style/global'
import PostContextProvider from './context/postContext'
function App() {
	return (
		//globalStyles 사용
		//mainPage만 렌더링
		<PostContextProvider>
			<GlobalStyles />
			<MainPage />
		</PostContextProvider>
	)
}

export default App
