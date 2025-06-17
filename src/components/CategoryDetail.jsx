import React from 'react'
import NewsCard from './NewsCard'

function CategoryDetail() {
	return (
		<div className='category-detail'>
			<div className='category-detail-container'>
				<h1>Fantastika</h1>
				<div className='category-news'>
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</div>
			</div>
		</div>
	)
}

export default CategoryDetail
