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
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		},
		{
			name: 'url',
			title: 'YouTube URL',
			type: 'url',
		},
		{
			name: 'featuredImage',
			title: 'Featured Image',
			type: 'featuredImage'
		},
		{
			name: 'description',
			title: 'Description',
			type: 'blockContent'
		}
	]
}
