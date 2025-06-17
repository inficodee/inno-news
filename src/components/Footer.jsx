import { FaTelegram } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import Logo from './Logo'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='top'>
					<ul>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>Categories</a>
						</li>
						<li>
							<a href='#'>Blog</a>
						</li>
					</ul>
					<div className='top-info'>
						<div>
							<Logo />
							<a href='#'>Biz haqimizda</a>
							<a href='#'>Biz bilan bog'lanish</a>
						</div>
						<div>
							<span>
								<a href='#'>
									<FaInstagram />
								</a>
							</span>
							<span>
								<a href='#'>
									<FaTelegram />
								</a>
							</span>
						</div>
					</div>
					<div className='bottom-info'>
						<a href='#'>Istam Rustamov</a>
						<p>Author: Istam Rustamov</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
