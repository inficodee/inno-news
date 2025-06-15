import NewsCard from './NewsCard'

function RecentNews() {
	return (
		<div className='recent-news'>
			<h1>So'nggi maqolalar</h1>
			<div className='news'>
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</div>
		</div>
	)
}

export default RecentNews
