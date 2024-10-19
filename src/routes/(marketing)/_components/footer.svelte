<script>
	import Logo from '$lib/images/logos/logo-white.png';
	const navigation = {
		connect: [
			{ name: 'Book Meeting', href: '' },
			{ name: 'Twitter', href: 'https://twitter.com/justansub' },
			{ name: 'Github', href: 'https://www.youtube.com/@SpeedyBrand-SEO' },
			{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/speedy-brand-inc/' }
		],
		company: [
			{ name: 'Blogs', href: '/' },
			{ name: 'Pricing', href: '/' },
			{ name: 'Affiliate Partner', href: '/' },
			{ name: 'AI For Enterprise', href: '/' }
		]
	};
</script>

<footer aria-labelledby="footer-heading" class="w-full bg-primary-base py-12 px-2">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-2">
		<div class="flex flex-col justify-between lg:flex-row">
			<div class="space-y-8">
				<img src={Logo} alt="arvo-logo" class="size-10" />
				<p class="text-md max-w-xs leading-6 text-white dark:text-gray-300">
					Spending too much time on HR?
					<br />We can fix that.
				</p>
			</div>

			<!-- Navigations -->
			<div class="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
				<div class="md:mt-0">
					<h3 class="text-sm font-semibold leading-6 text-white">Connect</h3>
					<div class="mt-6 space-y-4">
						{#each navigation.connect as item (item.name)}
							<div>
								<a
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									class="text-sm leading-6 text-primary-100 hover:text-primary-50"
								>
									{item.name}
								</a>
							</div>
						{/each}
					</div>
				</div>

				<div>
					<h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
					<div class="mt-6 space-y-4">
						{#each navigation.company as item (item.name)}
							<div>
								<a
									href={item.href}
									class="text-sm leading-6 text-primary-100 hover:text-primary-50"
								>
									{item.name}
								</a>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="mt-16 border-t border-white pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-white">&copy; 2024 SyntaxUI. All rights reserved.</p>
		</div>
	</div>
</footer>
