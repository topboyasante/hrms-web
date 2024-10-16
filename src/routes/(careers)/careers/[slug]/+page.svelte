<script lang="ts">
	import { Input } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import ListingCard from './_components/listing-card.svelte';

	export let data;
	$: ({ company } = data);

	let searchQuery: string = '';

	$: filteredListings = company.jobs.filter((listing) =>
		listing.title.toLowerCase().includes(searchQuery.toLowerCase())
	);
</script>

<svelte:head>
	<title>{company.company_name} | Careers</title>
</svelte:head>

<section class="w-full h-full">
	<div class="max-w-screen-md mx-auto py-12 px-6 space-y-5">
		<div>
			<h3 class="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-primary-base">
				{company.company_name}
			</h3>
			<p class="text-sm text-neutral-400">
				Ready for a new experience? Start a career at {company.company_name}.
			</p>
			<br />
			<p class="text-sm text-primary-base">{company.jobs.length} {company.jobs.length > 1 ? 'positions' : 'position'} available</p>
		</div>
		<div class="mt-2">
			<Input
				type="search"
				id="first_name"
				placeholder="Search for a listing"
				size="md"
				bind:value={searchQuery}
			>
				<SearchOutline slot="left" class="w-4 h-4" />
			</Input>
		</div>
		<div>
			{#if filteredListings.length > 0}
				<div class="space-y-5">
					{#each filteredListings as listing}
						<ListingCard {listing} />
					{/each}
				</div>
			{:else}
				<div>
					{#if searchQuery !== ''}
						<p class="text-lg text-gray-600 text-center my-8">
							No jobs matches the title "{searchQuery}"
						</p>
					{:else}
						<p class="text-lg text-gray-600 text-center my-8">
							No jobs available at {company.company_name}.
							<br />
							Come back later!
						</p>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</section>
