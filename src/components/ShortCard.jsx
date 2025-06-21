function ShortCard({ title, item }) {
	return (
		<div className='short-card-item'>
			<div className='card-number'>
				<h2>{item}</h2>
			</div>
			<div className='card-info'>
				<span className='card-category'>Fantastika</span>
				<h3>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</h3>
			</div>
		</div>
	)
}

export default ShortCard
