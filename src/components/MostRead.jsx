import ShortCard from './ShortCard'

function MostRead() {
	return (
		<div className='most-read-news'>
			<h1>Eng ko'p o'qilganlar</h1>
			<div className='most-read-cards'>
				<ShortCard />
				<ShortCard />
				<ShortCard />
				<ShortCard />
				<ShortCard />
				<ShortCard />
			</div>
		</div>
	)
}

export default MostRead
