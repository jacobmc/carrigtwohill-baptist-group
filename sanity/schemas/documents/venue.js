export default {
	name: 'venue',
	title: 'Venue',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'address1',
			title: 'Address Line 1',
			type: 'string'
		},
		{
			name: 'address2',
			title: 'Address Line 2',
			type: 'string'
		},
		{
			name: 'postTown',
			title: 'Post Town',
			type: 'string'
		},
		{
			name: 'county',
			title: 'County',
			type: 'string'
		},
		{
			name: 'code',
			title: 'Eircode',
			type: 'string'
		}
	]
}
