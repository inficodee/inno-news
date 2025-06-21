import Banner from '../components/Banner'
import RecentNews from '../components/RecentNews'
import MostRead from '../components/MostRead'
import CategoryCarousel from '../components/CategoryCarousel'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { APISERVICE } from '../services/api-service'
import Loader from '../components/loader'

const Home = () => {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		const fetchData = async () => {
			await axios
				.get(APISERVICE.categories)
				.then(res => setCategories(res.data.data))
				.catch(err => console.log(err))
				.finally(() => setLoading(false))
		}
		console.log(categories)
		fetchData()
	}, [])

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div>
					<Banner />
					<div className='news-block'>
						<div className='all-news'>
							<div className='recent-news-block'>
								<RecentNews />
							</div>
							<div className='most-read-block'>
								<MostRead />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Home
