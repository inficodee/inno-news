import Logo from './Logo'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='container'>
			<div className='navbar'>
				<Logo />
				<div className='nav-categories'>
					<ul>
						<li>
							<Link href='#'>Home</Link>
						</li>
						<li>
							<Link href='#'>Blogs</Link>
						</li>
						<li>
							<Link href='#'>News</Link>
						</li>
						<li>
							<Link href='#'>About</Link>
						</li>
						<li>
							<Link href='#'>Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
