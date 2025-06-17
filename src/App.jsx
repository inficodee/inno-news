import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Categories from './pages/Catagories'
import { Routes, Route } from 'react-router-dom'
import CategoryDetail from './components/CategoryDetail'

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/categories' element={<Categories />} />
				<Route path='/categories/:id' element={<CategoryDetail />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
