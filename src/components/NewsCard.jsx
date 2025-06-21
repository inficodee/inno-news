import { Link } from 'react-router-dom'

const NewsCard = ({ image, name, date, link }) => {
	return (
		<Link to={`/post/${link}`} className='card'>
			<div className='card-image'>
				<img src={image | 'https://picsum.photos/250/200'} alt='news-image' />
				<div className='news-text'>
					<span className='news-info'>
						<p className='date'>{date}</p>
						<p className='tag'>Fantastika</p>
					</span>
				</div>
			</div>
			<div className='card-title'>
				<h2>{name?.length > 15 ? `${name.slice(0, 15)}...` : name}</h2>
			</div>
		</Link>
	)
}

export default NewsCard
