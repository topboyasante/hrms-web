<script>
	const logos = [
		{
			name: 'Vercel',
			url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg'
		},
		{
			name: 'Nextjs',
			url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg'
		},
		{
			name: 'Webflow',
			url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg'
		},
		{
			name: 'Airbnb',
			url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg'
		},
		{
			name: 'Tina',
			url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg'
		},
		{
			name: 'Mistral',
			url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg'
		}
	];
</script>

<div class="w-full py-12">
	<div class="flex w-full flex-col items-center justify-center px-4 md:px-8">
		<div class="grid grid-cols-3 gap-x-6 md:grid-cols-5 lg:grid-cols-6">
			{#each logos as logo}
				<img src={logo.url} class="h-10 w-28 px-2 brightness-0" alt={`${logo.name}`} />
			{/each}
		</div>
	</div>
</div>
