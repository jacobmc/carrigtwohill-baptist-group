import HiOutlineCalendar from "react-icons/hi"

export default {
	name: 'event',
	title: 'Event',
	type: 'document',
	icon: HiOutlineCalendar,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
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
			name: 'start',
			title: 'Start Date',
			type: 'datetime'
		},
		{
			name: 'end',
			title: 'End Date',
			type: 'datetime'
		},
		{
			name: 'venue',
			title: 'Venue',
			type: 'reference',
			to: {type: 'venue'}
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
