<script>
	import { NAV_LINKS } from './sidebar-links';
</script>

<div class="hidden lg:block">
	<div class="overflow-y-scroll sticky top-4 border-r p-3 min-h-screen bg-[#fdfdfd]">
		<div>
			<div class="text-neutral-400 font-bold tracking-tight">HRMS</div>
		</div>
		<br />
		<div>
			{#each NAV_LINKS as link}
				<div>
					<p class="uppercase text-xs tracking-wide text-neutral-400 mb-3">{link.title}</p>
					<div class="space-y-3">
						{#each link.sub_links as sub_link}
							<div class="flex items-center gap-2">
								<svelte:component this={sub_link.icon} class="w-4 h-4" />
								<a href={sub_link.href} class="text-sm">{sub_link.name}</a>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
