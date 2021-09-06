import { useRef, useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import logoNobg from '../../assets/logo-nobg.png'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBriefcase, BsQuestionCircle } from 'react-icons/bs'
import { HiChevronRight } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import './Burger/burger.css'
import useOnClickOutside from 'use-onclickoutside'
import Headroom from 'react-headroom'

const StyledHeader = styled.header`
	position: sticky;
	width: 100%;
	z-index: 100;
	/* height: 86px; */
	background-color: #fff;
	/* transition: transform 5s; */
	@media (min-width: 1024px) {
		/* height: 114px; */
	}
	#wrapper {
	}

	#burger {
		#menu {
			position: fixed;
			z-index: 10;
			width: 100%;
			top: 87px;
			left: ${(props) => (props.open ? '0' : '-100%')};
			max-width: 100%;
			transition: left .25s;
			background-color: #fff;
			/* z-index: 100; */
			color: #333;
			overflow-y: scroll;
			height: 62vh;
			display: flex;
			flex-flow: column;
			justify-content: space-between;
			#menuLinks {
			}
			.listItem {
				width: 100%;
				font-size: 105%;
				display: flex;
				@media (min-width: 768px) {
					font-size: 120%;
				}
				a {
					border-radius: 4px;
					width: 100%;
					height: 100%;
					/* opacity: .9; */
					&:hover {
						opacity: 1;
					}
				}
			}
		}
		#overlay {
			position: fixed;
			top: 86px;
			left: ${(props) => (props.open ? '0' : '-100%')};
			width: 100%;
			height: 100vh;
			background-color: rgba(0, 0, 0, .6);
			z-index: -0;
			opacity: ${(props) => (props.open ? 1 : 0)};
			transition: opacity .2s;
			transition-delay: .2s;
		}
	}
	#top {
		background-color: #151515;
		color: white;
		@media (min-width: 1024px) {
			background-color: #fff;
			color: #333;
		}

		svg {
			font-size: 1.75rem;
			padding: 0 2px;
			border: 1px solid transparent;
		}
	}
	#logo {
		position: absolute;
		z-index: 11;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-repeat: no-repeat;
		background-size: contain;
		height: 112px;
		width: 112px;
		@media (min-width: 1024px) {
			left: 4.5rem;
			top: 80%;
		}
		@media (min-width: 1280px) {
			left: 3.5rem;
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
		{ name: 'find & reserve', to: '/find' },
		{ name: 'special offers', to: '/specials' },
		{ name: 'vacations', to: '/vacations' },
		{ name: 'our brands', to: '/brands' },
		{ name: 'our credit cards', to: '/credit' },
		{ name: 'about marriott bonvoy', to: '/bonvoy' }
	]
	const menuRef = useRef()
	useOnClickOutside(menuRef, () => {
		setIsOpen(false)
		document.getElementById('nav-icon1').classList.remove('open')
		document.body.classList.remove('freezeflow')
	})

	const handlePin = () => {
		headerRef.current.style.top = '0'
	}
	const handleUnpin = () => {
		headerRef.current.style.top = '-100%'
	}
	const headerRef = useRef()
	return (
		<Headroom onPin={handlePin} onUnpin={handleUnpin}>
			<div>
				<StyledHeader
					open={isOpen}
					ref={headerRef}
					className="transform transition duration-300 shadow "
				>
					<div id="wrapper" className="mx-auto lg:max-w-6xl py-3">
						<div
							id="top"
							className="flex items-center justify-between lg:justify-start lg:gap-4 relative px-4 my-3 xl:px-0 xl:py-0"
						>
							<div>
								<div id="burger" className="lg:hidden" ref={menuRef}>
									<div id="nav-icon1" onClick={handleOpen}>
										<span />
										<span />
										<span />
									</div>
									<div id="menu" className="p-5 pt-8 ">
										<ul
											id="menuLinks"
											className="flex flex-col items-center justify-center capitalize font-medium gap-5"
										>
											{bottomLinks.map((link, i) => (
												<li key={i} className="listItem">
													<Link
														to={link.to}
														end
														className="flex items-center justify-between"
													>
														<span>{link.name}</span>
														<HiChevronRight />
													</Link>
												</li>
											))}
										</ul>
										<div className="flex items-center text-xs gap-1 cursor-pointer">
											<div>
												<i className="fa fa-globe" aria-hidden="true" />
											</div>
											<span className="font-medium">English</span>
										</div>
									</div>
									<div id="overlay" onClick={handleClose} />
								</div>
							</div>
							<div className="flex lg:flex-col lg:w-full lg:gap-y-3">
								<ul
									id="navLinks"
									className="hidden lg:flex items-center gap-6  h-8 ml-32 text-sm xl:text-base lg:order-2 lg:justify-between"
								>
									{bottomLinks.map((link, i) => (
										<li
											key={i}
											className="capitalize font-medium whitespace-nowrap"
										>
											<NavLink
												to={link.to}
												end
												className="opacity-90 hover:opacity-100"
											>
												{link.name}
											</NavLink>
										</li>
									))}
								</ul>
								<div className="flex items-center gap-5 lg:gap-6 h-8 lg:ml-24 lg:justify-end ">
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
							<div id="logo" className="lg:pr-2">
								<Link to="/">
									<img src={logoNobg} className="lg:hidden" alt="" />
									<img src={logo} className="hidden lg:block" alt="" />
								</Link>
							</div>
						</div>
					</div>
				</StyledHeader>

				<div id="options" className="bg-lightGray p-4 px-3 text-gray-700">
					<div className="bg-white grid grid-cols-2 justify-between p-4 md:py-5 xl:py-6 rounded-lg lg:max-w-4xl mx-auto md:text-lg md:px-5 xl:px-6 shadow">
						<div className="border-r border-gray-300 cursor-pointer">
							<div className="flex items-center gap-2 capitalize text-brandRed ">
								<div className="">
									<i className="fa fa-map-marker" aria-hidden="true" />
								</div>
								<span>destination</span>
							</div>
							<span className="font-medium text-gray-500">Where next?</span>
						</div>
						<div className="pl-4 md:pl-5 xl:pl-6 cursor-pointer flex items-center justify-between">
							<div className=" ">
								<div className="flex items-center gap-2 capitalize text-brandRed ">
									<div className="">
										<i className="fa fa-calendar" aria-hidden="true" />
									</div>
									<span>dates</span>
								</div>
								<span className="font-medium text-gray-500">Add dates</span>
							</div>
							<div className="hidden md:block">
								<button className="bg-gray-900 text-white font-medium rounded-full px-5 py-2">Find Hotels</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Headroom>
	)
}
export default Header
