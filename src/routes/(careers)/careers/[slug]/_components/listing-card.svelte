<script lang="ts">
	import { page } from '$app/stores';
	import type { IJobListing } from '$lib/types/careers';
	import { GetJobType } from '$lib/utils/careers';
	import MapPinCheckInside from 'lucide-svelte/icons/map-pin-check-inside';
	import UsersRound from 'lucide-svelte/icons/users-round';
	import Clock from 'lucide-svelte/icons/clock';
	import { getTimeAgo } from '$lib/utils/time';

	export let listing: IJobListing;
</script>

<div class="bg-white p-5 rounded-lg">
	<a
		href={`${$page.params.slug}/${listing.id}`}
		class="md:text-lg font-semibold tracking-tight hover:underline w-fit text-primary-base"
	>
		{listing.title}
	</a>
	<div class="mt-3 my-5">
		<p class="line-clamp-2 text-sm text-neutral-400">{@html listing.description}</p>
	</div>
	<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
		<div class="flex items-center gap-5">
			<div class="flex items-center gap-1">
				<MapPinCheckInside class="w-4 h-4 stroke-primary-base" />
				<p class="text-neutral-400 text-sm">{listing.location}</p>
			</div>
			<div class="flex items-center gap-1">
				<UsersRound class="w-4 h-4 stroke-primary-base" />
				<p class="text-neutral-400 text-sm">{GetJobType(listing.job_type)}</p>
			</div>
		</div>
		<div>
			<div class="flex items-center gap-1">
				<Clock class="w-4 h-4 stroke-primary-base" />
				<p class="text-neutral-400 text-sm">{getTimeAgo(listing.created_at)} ago</p>
			</div>
		</div>
	</div>
</div>
