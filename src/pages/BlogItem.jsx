import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APISERVICE } from '../services/api-service'
import Loader from '../components/loader'

function BlogItem() {
	const { id } = useParams()
	const [data, setData] = useState()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		const fetchData = async () => {
			await axios
				.get(`${APISERVICE.posts}/${id}`)
				.then(res => {
					setData(res.data.data)
					console.log(res.data.data)
				})
				.catch(err => console.log(err))
				.finally(() => setLoading(false))
		}
		fetchData()
	}, [id])

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='blog-item'>
					<div className='blog-item-container'>
						<img
							src={`${import.meta.env.VITE_APP_API_URL}/${data?.image}`}
							alt='post image'
						/>
						<div className='post-info'>
							<h1>{data?.title}</h1>
							<p>{data?.description}</p>
							<p
								dangerouslySetInnerHTML={{
									__html: data?.richtext,
								}}
							></p>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default BlogItem
