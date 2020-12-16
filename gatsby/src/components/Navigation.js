import React from "react"
import { Link } from "gatsby"

/**
 * Renders a menu as an unordered list with nested lists as submenus
 *
 * @param menu
 * @param currentPage
 * @returns {JSX.Element}
 * @constructor
 */
export default function Navigation({menu, currentPage, className} ) {
	// Renders link using anchor tag if menu item goes to external source
	const renderLink = menuItem => {
		if(menuItem.menuItemUrl.externalContent) {
			return <a href={"/" + menuItem.menuItemUrl.linkUrl}>{menuItem.text}</a>
		}

		return <Link to={"/" + menuItem.menuItemUrl.linkUrl}>{menuItem.text}</Link>
	}

	// Renders the submenu if it exists for menu item
	const renderSubmenu = menuItem => {
		if(menuItem.submenuItems.length) {
			return (
				<ul>
					{menuItem.submenuItems.map((submenuItem, index) => {
						return <li key={index} className={(currentPage === submenuItem.menuItemUrl.linkUrl) ? 'active' : ''}>{renderLink(submenuItem)}</li>
					})}
				</ul>
			)
		}
	}

	return (
		<ul className={className}>
			{menu.menuItems.map((menuItem, index) => {
				return (
					<li key={index} className={(currentPage === menuItem.menuItemUrl.linkUrl) ? 'active' : ''}>
						{renderLink(menuItem)}
						{renderSubmenu(menuItem)}
					</li>
				)
			})}
		</ul>
	)
}
