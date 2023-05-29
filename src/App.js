import './App.css'
import MainPage from './page/mainPage'
import GlobalStyles from './style/global'
function App() {
	return (
		//globalStyles 사용
		//mainPage만 렌더링
		<>
			<GlobalStyles />
			<MainPage />
		</>
	)
}

export default App
