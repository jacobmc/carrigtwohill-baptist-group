export default {
	name: 'menu',
	title: 'Menu',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'id',
			title: 'ID',
			type: 'string'
		},
		{
			name: 'menuItems',
			title: 'Menu Items',
			type: 'array',
			of: [{type: 'menuItem'}]
		}
	],
	preview: {
		select: {
			title: "title",
			subtitle: "id"
		}
	}
}
