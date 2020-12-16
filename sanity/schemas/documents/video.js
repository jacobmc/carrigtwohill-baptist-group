export default {
	name: 'video',
	title: 'Video',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'url',
			title: 'YouTube URL',
			type: 'url',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'blockContent'
		}
	]
}
