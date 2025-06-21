import { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { APISERVICE } from '../services/api-service'
import axios from 'axios'
import Loader from './loader'

function RecentNews() {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		const fetchData = async () => {
			try {
				await axios.get(APISERVICE.posts).then(res => setPosts(res.data.data))
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='recent-news'>
					<h1>So'nggi maqolalar</h1>
					<div className='news'>
						{posts.map(post => (
							<NewsCard
								key={post._id}
								link={post._id}
								name={post.title}
								date={post.created_at}
								image={`${import.meta.env.VITE_APP_API_URL}/${post.image}`}
							/>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default RecentNews
