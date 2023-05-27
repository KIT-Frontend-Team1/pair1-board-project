import './App.css'
import MainPage from './page/mainPage'
import GlobalStyles from './style/global'
import { ModalContextProvider } from './context/ModalContext'
function App() {
	return (
		//modalContext를 사용
		<ModalContextProvider>
			<GlobalStyles />
			<MainPage />
			{/* <SimpleSlider /> */}
		</ModalContextProvider>
	)
}

export default App
