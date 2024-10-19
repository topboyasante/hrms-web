<script>
	import Logo from '$lib/_components/ui/logo.svelte';
	import { Button } from 'flowbite-svelte';

	const NAV_LINKS = [
		{
			title: 'About',
			href: '/about'
		},
		{
			title: 'Products',
			href: '/products'
		},
		{
			title: 'Developers',
			href: '/developers'
		},
		{
			title: 'Help',
			href: '/contact'
		}
	];
</script>

<nav class="w-full h-[7vh] sticky top-0 px-3 z-50 bg-white ">
	<div class="max-w-screen-xl mx-auto h-full p-2 rounded-full">
		<div class="w-full h-full flex justify-between items-center gap-2">
			<a href="/"> <Logo /></a>
			<div class="hidden md:flex gap-4 items-center">
				{#each NAV_LINKS as link}
					<a href={link.href} class="text-primary-500 text-sm">{link.title}</a>
				{/each}
			</div>
			<div class="space-x-5">
				<a href="/login" class="hover:underline text-sm">Sign In</a>
				<Button class="bg-primary-base hover:bg-primary-400" pill size="sm" href="/register">Get Started</Button>
			</div>
		</div>
	</div>
</nav>
