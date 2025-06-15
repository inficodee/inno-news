import React from 'react'
import Banner from '../components/Banner'
import RecentNews from '../components/RecentNews'
import MostRead from '../components/MostRead'
import CategoryCarousel from '../components/CategoryCarousel'

const Home = () => {
	return (
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
			<div className='category-blocks'>
				<CategoryCarousel />
			</div>
			<div className='category-blocks'>
				<CategoryCarousel />
			</div>
			<div className='category-blocks'>
				<CategoryCarousel />
			</div>
		</div>
	)
}

export default Home
