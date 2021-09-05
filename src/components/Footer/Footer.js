import { useState } from 'react'
import logo from '../../assets/footer-logo.png'
import styled from 'styled-components'
const StyledFooter = styled.footer`
	background-color: #151515;
	color: white;
`
const Footer = () => {
	const [ isOpen1, setIsOpen1 ] = useState(false)
	const [ isOpen2, setIsOpen2 ] = useState(false)
	const [ isOpen3, setIsOpen3 ] = useState(false)
	const accordions = [
		{
			title: 'top destinations',
			open: isOpen1,
			set: () => setIsOpen1(!isOpen1),
			links: [
				'anaheim hotels',
				'atlanta hotels',
				'baltimore hotels',
				'boston hotels',
				'cancun hotels',
				'charlotte hotels',
				'chicago hotels',
				'costa rica hotels',
				'dallas hotels',
				'las vegas hotels'
			]
		},
		{
			title: 'for guests',
			open: isOpen2,
			set: () => setIsOpen2(!isOpen2),
			links: [
				'best rate guarantee',
				'marriott bonvoy moments',
				'activities',
				'marriott insiders'
			]
		},
		{
			title: 'our company',
			open: isOpen3,
			set: () => setIsOpen3(!isOpen3),
			links: [
				'about marriott',
				'careers',
				'travel professionals',
				'news',
				'heart of the house'
			]
		}
	]
	const sitelinks = [
		'tracking preferences',
		'careers',
		'terms of use',
		'privacy center',
		'digital accessiblitiy',
		'site map',
		'help'
	]
	return (
		<StyledFooter className="border-t px-4 py-6 xl:px-0">
			<div id="wrapper" className="mx-auto xl:max-w-6xl">
                <img src={logo} className="w-40 mx-auto mb-8" alt="" />
                {/* accordions */}
                <div className="flex flex-col  mb-4">
                    {accordions.map((acc, i) => (
                        <div key={i} className="border-b">
                            <div
                                onClick={acc.set}
                                className="flex justify-between items-center capitalize font-medium text-xl cursor-pointer py-3"
                            >
                                <span>{acc.title}</span>
                                <div className="text-lg">
                                    <i className="fa fa-chevron-down" aria-hidden="true" />
                                </div>
                            </div>
                            {/* menu */}
                            {acc.open && (
                                <div>
                                    <ul className="flex flex-wrap gap-x-5 gap-y-2 pb-8 pt-4">
                                        {acc.links.map((link, i) => (
                                            <li key={i} className="capitalize flex items-center gap-1 text-sm">
                                                <span>{link}</span>
                                                <div className="text-xs">
                                                    <i
                                                        className="fa fa-chevron-right"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/* socials */}
                <div className=" font-medium text-xl cursor-pointer  flex items-center gap-8 mb-4 border-b pb-3">
                    <span>Follow us</span>
                    <div className="flex items-center gap-6">
                        <i className="fa fa-facebook" aria-hidden="true" />
                        <i className="fa fa-instagram" aria-hidden="true" />
                        <i className="fa fa-twitter" aria-hidden="true" />
                        <i className="fa fa-linkedin" aria-hidden="true" />
                        <i className="fa fa-youtube" aria-hidden="true" />
                    </div>
                </div>
                {/* lang */}
                <div className="flex items-center gap-2 py-4 pb-6 text-xs">
                    <i className="fa fa-globe" aria-hidden="true" />
                    <span>English</span>
                </div>
                {/* copy */}
                <p className="text-xs">
                    © 2021 Fobia Webworks for Marriott International, Inc. All rights reserved. Marriott
                    Proprietary Information
                </p>
                {/* sitelinks */}
                <nav className="flex flex-wrap capitalize gap-x-4 gap-y-1 text-xs mt-6">
                    {sitelinks.map((link, i) => <a href="/">{link}</a>)}
                </nav>
            </div>
		</StyledFooter>
	)
}
export default Footer
