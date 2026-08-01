const topNav: menuItem[] = [
	{
		title: 'Home',
		href: '/'
	},
	{
		title: 'Test',
		href: '/test'
	},
	{
		title: 'More',
		items: [
			{
				title: 'About',
				href: '/about'
			},
			{
				title: 'Jobs',
				href: '/jobs'
			},
			{
				title: 'Contact',
				href: '/contact'
			},
			{
				title: '-'
			},
			{
				title: 'Report an issue',
				href: '/report'
			}
		]
	}
];

export default topNav;
