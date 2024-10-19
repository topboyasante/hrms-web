import { BriefcaseBusiness, Users } from "lucide-svelte";

export const NAV_LINKS = [
	{
		title: 'Jobs',
		sub_links: [
			{
				name: 'Listings',
				href: '/jobs',
                icon: BriefcaseBusiness
			},
			{
				name: 'Applications',
				href: '/applications',
                icon: Users
			}
		]
	}
];
