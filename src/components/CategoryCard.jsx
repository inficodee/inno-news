import { Link } from 'react-router-dom'

const CategoryCard = ({ link, image, name }) => {
	return (
		<Link to={link} className='card'>
			<div className='card-image'>
				<img src={image} alt='news-image' />
				<div className='news-text'>
					<span className='news-info'></span>
				</div>
			</div>
			<div className='card-title'>
				<h2>{name}</h2>
			</div>
		</Link>
	)
}

export default CategoryCard
