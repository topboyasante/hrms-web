<script>
	import { GetJobType } from '$lib/utils/careers';
	import { fromBaseForm } from '$lib/utils/currency';
	import { Button } from 'flowbite-svelte';
	import styles from '../[listing_id]/styles.module.css';
	export let data;
	$: ({ listing } = data);
</script>

<svelte:head>
	<title>{listing.title}</title>
</svelte:head>

<section class="py-16 px-5">
	<div class="max-w-screen-xl mx-auto py-12 px-6 bg-white rounded-lg min-h-screen">
		<div>
			<div>
				<h3 class="text-3xl font-bold tracking-tight text-primary-base">{listing.title}</h3>
			</div>
		</div>
		<hr class="my-5" />
		<div class="grid gap-4 p-4 lg:grid-cols-[1fr,_400px]">
			<div class="w-full space-y-8">
				<div>
					<div>
						<p class="text-sm uppercase tracking-wide text-primary-500">About This Role</p>
						<br />
						<div class={styles.listing}>{@html listing.description}</div>
					</div>
				</div>
			</div>
			<div class="sticky top-0 space-y-5 md:border-l md:px-5 md:py-2">
				<div>
					<p class="text-xs uppercase tracking-wide text-primary-500">Compensation</p>
					<p>
						{new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'GHS',
							minimumFractionDigits: 0,
							maximumFractionDigits: 0
						}).format(fromBaseForm(listing.compensation))}
					</p>
				</div>
				<div>
					<p class="text-xs uppercase tracking-wide text-primary-500">Location</p>
					<p>
						{listing.location}
					</p>
				</div>
				<div>
					<p class="text-xs uppercase tracking-wide text-primary-500">Type</p>
					<p>
						{GetJobType(listing.job_type)}
					</p>
				</div>
				<Button class="w-full">Apply</Button>
			</div>
		</div>
	</div>
</section>
