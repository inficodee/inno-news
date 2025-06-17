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
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'end',
								gap: '10px',
							}}
						>
							<Logo />
							<a href='#'>Biz haqimizda</a>
							<a href='#'>Biz bilan bog'lanish</a>
						</div>
						<div>
							<div className='socials'>
								<span>
									<a href='#'>
										<FaInstagram size={20} />
									</a>
								</span>
								<span>
									<a href='#'>
										<FaTelegram size={20} />
									</a>
								</span>
							</div>
							<div>
								<p style={{ marginTop: '10px' }}>
									Copyright &copy; {new Date().getFullYear()}
								</p>
							</div>
						</div>
					</div>
					<div className='bottom-info'>
						<a href='#'>Senior developers</a>
						<p>Author: Frontend team</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
