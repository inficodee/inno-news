import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import axios from 'axios'
import { APISERVICE } from '../services/api-service'
import Loader from './loader'

function CategoryDetail() {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		const fetchData = async () => {
			await axios
				.get(APISERVICE.posts)
				.then(res => setPosts(res.data.data))
				.catch(err => console.log(err))
				.finally(() => setLoading(false))
		}

		fetchData()
	}, [])

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='category-detail'>
					<div className='category-detail-container'>
						<h1>Fantastika</h1>
						<div className='category-news'>
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
				</div>
			)}
		</>
	)
}

export default CategoryDetail
