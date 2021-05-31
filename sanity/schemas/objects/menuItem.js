export default {
	name: 'menuItem',
	title: 'Menu Item',
	type: 'object',
	fields: [
		{
			name: 'text',
			title: 'Link Text',
			type: 'string'
		},
		{
			name: 'menuItemUrl',
			title: 'Link URL',
			type: 'link'
		},
		{
			name: 'submenuItems',
			title: 'Submenu Items',
			type: 'array',
			of: [{type: 'menuItem'}]
		}
	],
	preview: {
		select: {
			title: 'text',
			subtitle: 'menuItemUrl.linkUrl',
			submenuItems: 'submenuItems'
		},
		prepare(selection) {
			const {title, subtitle, submenuItems} = selection
			let newSubtitle = subtitle

			if ( submenuItems !== undefined && submenuItems.length ) {
				newSubtitle	= `${subtitle} | ${submenuItems.length} submenu ${(submenuItems.length === 1) ? 'item' : 'items'}`
			}

			return {
				title: title,
				subtitle: newSubtitle
			}
		}
	}
}
