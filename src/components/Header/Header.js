import { useRef, useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBriefcase, BsQuestionCircle } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import './Burger/burger.css'

const StyledHeader = styled.header`
	#wrapper {
		padding: 0 .7rem;
		padding-bottom: 0;
		max-width: var(--maxWidth);
		margin: 0 auto;
		@media (min-width: 640px) {
			padding: 0 1.5rem;
		}
		@media (min-width: 1280px) {
			padding: 0;
		}
	}
	#navLinks {
		.active {
			position: relative;
			opacity: 1;
			&::after {
				content: '';
				background-color: var(--brandRed);
				position: absolute;
				height: 4px;
				width: 100%;
				top: 22px;
				border-radius: 99999px;
				left: 0;
			}
		}
	}
	#burger {
		#menu {
			position: fixed;
			width: 100%;
			top: 73px;
			right: ${(props) => (props.open ? '0' : '-100%')};
			max-width: 100%;
			transition: right .25s;
			background-color: white;
			z-index: 10;
			color: #282626;
			overflow-y: scroll;
			height: 70vh;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
			#menuLinks {
				.active {
					opacity: 1 !important;
					color: var(--brandRed);
				}
			}
			.listItem {
				width: 100%;
				font-size: 120%;
				display: flex;
				a {
					border-radius: 4px;
					/* padding: 1rem; */
					width: 100%;
					height: 100%;
					opacity: .5;
					&:hover {
						opacity: 1;
					}
				}
			}
		}
		#overlay {
			position: fixed;
			top: 73px;
			left: ${(props) => (props.open ? '0' : '-100%')};
			width: 100%;
			height: 100vh;
			background-color: rgba(0, 0, 0, .6);
			z-index: -100;
			opacity: ${(props) => (props.open ? 1 : 0)};
			transition: opacity .25s;
			transition-delay: .2s;
		}
	}
	#top {
		svg {
			font-size: 1.8rem;
			padding: 0 2px;
			border: 1px solid transparent;
		}
	}
	#logo {
		position: absolute;
		z-index: 19;
		left: 50%;
		top: 60%;
		transform: translate(-50%, -50%);
		background-repeat: no-repeat;
		background-size: contain;
		height: 96px;
		width: 96px;
		@media (min-width: 1024px) {
			left: 2.5rem;
			top: 50%;
		}
	}
`
const Header = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const handleOpen = () => {
		document.getElementById('nav-icon1').classList.toggle('open')
		document.body.classList.toggle('freezeflow')
		setIsOpen(!isOpen)
	}
	const handleClose = () => {
		document.getElementById('nav-icon1').classList.remove('open')
		document.body.classList.remove('freezeflow')
		setIsOpen(false)
	}
	const topLinks = [ 'COVID-19', 'Help', 'English', 'Sign In or Join', 'My Trips' ]
	const bottomLinks = [
		{ name: 'home', to: '/' },
		{ name: 'find & reserve', to: '/find' },
		{ name: 'special offers', to: '/specials' },
		{ name: 'vacations', to: '/vacations' },
		{ name: 'our brands', to: '/brands' },
		{ name: 'our credit cards', to: '/credit' },
		{ name: 'about mariott bonvoy', to: '/bonvoy' }
	]
	const menuRef = useRef()
	return (
		<StyledHeader className="border-b border-gray-400" open={isOpen}>
			<div id="wrapper">
				<div
					id="top"
					className="flex justify-between lg:justify-start lg:gap-4 relative py-3"
				>
					<div>
						<div id="burger" className="lg:hidden" ref={menuRef}>
							<div id="nav-icon1" onClick={handleOpen}>
								<span />
								<span />
								<span />
							</div>
							<div id="menu" className="p-5 ">
								<ul
									id="menuLinks"
									className="flex flex-col items-center justify-center capitalize font-bold gap-4"
								>
									{bottomLinks.map((link, i) => (
										<li key={i} className="listItem" onClick={handleClose}>
											<NavLink to={link.to} end>
												{link.name}
											</NavLink>
										</li>
									))}
								</ul>
								<div className="flex items-center text-xs gap-1">
									<div className="text-xs">
										<i className="fa fa-globe" aria-hidden="true" />
									</div>
									<span>English</span>
								</div>
							</div>
							<div id="overlay" onClick={handleClose} />
						</div>
					</div>
					<div className="flex lg:flex-col lg:w-full">
						<ul
							id="navLinks"
							className="hidden lg:flex items-center gap-6  h-8 ml-24 text-sm xl:text-base lg:order-2 xl:justify-between"
						>
							{bottomLinks.map((link, i) => (
								<li key={i} className="capitalize font-medium whitespace-nowrap">
									<NavLink
										to={link.to}
										end
										className="opacity-70 hover:opacity-100"
									>
										{link.name}
									</NavLink>
								</li>
							))}
						</ul>
						<div className="flex items-center gap-5 lg:gap-6 h-8 lg:ml-24 lg:justify-end">
							<div className="hidden lg:flex gap-5">
								{topLinks.map((link, i) => (
									<Link
										to="/"
										className="font-medium whitespace-nowrap text-xs opacity-80 hover:opacity-100"
									>
										{link}
									</Link>
								))}
							</div>
							<div className="flex  gap-4 md:gap-6 lg:hidden">
								<BsQuestionCircle />
								<BsBriefcase />
								<AiOutlineUser />
							</div>
						</div>
					</div>

					<div id="logo">
						<Link to="/">
							<img src={logo} alt="" />
						</Link>
					</div>
				</div>
			</div>
		</StyledHeader>
	)
}
export default Header
