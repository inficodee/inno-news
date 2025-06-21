import axios from 'axios'
import ShortCard from './ShortCard'
import { APISERVICE } from '../services/api-service'
import { useEffect, useState } from 'react'

function MostRead() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(APISERVICE.posts)
				.then(res => setPosts(res.data.data))
				.catch(err => console.log(err))
		}

		fetchData()
	}, [])
	return (
		<div className='most-read-news'>
			<h1>Eng ko'p o'qilganlar</h1>
			<div className='most-read-cards'>
				{posts.map((post, index) => (
					<ShortCard key={post._id} title={post.title} item={index + 1} />
				))}
			</div>
		</div>
	)
}

export default MostRead
