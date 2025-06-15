const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner-info'>
				<img src='https://picsum.photos/1400/500' alt='banner image' />
				<div className='banner-text'>
					<h1>Hello world</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum
						illum sit, sint iure autem iusto dolore atque doloribus hic omnis
						laudantium aliquid dolorum doloremque!
					</p>
					<span className='news-info'>
						<p className='date'>12/06/2025, 19:05</p>
						<p className='tag'>Fantastika</p>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Banner
