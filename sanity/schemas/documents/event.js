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
			name: 'description',
			title: 'Description',
			type: 'blockContent'
		}
	]
}
