import CategoryCard from '../components/CategoryCard'

const categories = [
	{
		id: 1,
		name: 'Fantastika',
		image: 'https://picsum.photos/250/200',
	},
	{
		id: 2,
		name: 'Dunyo xabarlari',
		image: 'https://picsum.photos/250/200',
	},
	{
		id: 3,
		name: 'Ilmiy yangiliklar',
		image: 'https://picsum.photos/250/200',
	},
]

function Catagories() {
	return (
		<div className='categories'>
			<div className='categories-container'>
				<h1>All Categories</h1>
				<div className='all-categories'>
					{categories.map(item => (
						<CategoryCard
							name={item.name}
							link={`/categories/${item.id}`}
							image={item.image}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Catagories
