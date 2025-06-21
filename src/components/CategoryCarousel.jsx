import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import NewsCard from './NewsCard'
import AliceCarousel from 'react-alice-carousel'
import { useRef } from 'react'

const CategoryCarousel = ({ name }) => {
	const carouselRef = useRef(null)

	const handleDragStart = e => e.preventDefault()
	const items = [
		<div onDragStart={handleDragStart}>
			<NewsCard />
		</div>,
		<div onDragStart={handleDragStart}>
			<NewsCard />
		</div>,
		<div onDragStart={handleDragStart}>
			<NewsCard />
		</div>,
		<div onDragStart={handleDragStart}>
			<NewsCard />
		</div>,
		<div onDragStart={handleDragStart}>
			<NewsCard />
		</div>,
	]

	return (
		<div className='category-carousel'>
			<div className='title'>
				<h1>{name}</h1>
				<div className='control-btns'>
					<button onClick={() => carouselRef.current.slidePrev()}>
						<FaAngleLeft />
					</button>
					<button onClick={() => carouselRef.current.slideNext()}>
						<FaAngleRight />
					</button>
				</div>
			</div>
			<AliceCarousel
				ref={carouselRef}
				mouseTracking
				items={items}
				responsive={{
					0: {
						items: 1,
					},
					1024: {
						items: 3,
						itemsFit: 'contain',
					},
					1440: {
						items: 4,
						itemsFit: 'contain',
					},
				}}
				disableButtonsControls
				disableDotsControls
				autoPlay
				infinite
				autoPlayInterval={2500}
			/>
		</div>
	)
}

export default CategoryCarousel
