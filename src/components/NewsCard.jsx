const NewsCard = () => {
	return (
		<div className='card'>
			<div className='card-image'>
				<img src='https://picsum.photos/350/200' alt='news-image' />
				<div className='news-text'>
					<span className='news-info'>
						<p className='date'>12/06/2025, 19:05</p>
						<p className='tag'>Fantastika</p>
					</span>
				</div>
			</div>
			<div className='card-title'>
				<h2>hello news</h2>
			</div>
		</div>
	)
}

export default NewsCard
