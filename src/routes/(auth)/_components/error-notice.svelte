<script lang="ts">
	import { formatError } from '$lib/utils/errors';
	import { CircleX } from 'lucide-svelte';

	export let error: string | string[];
</script>

<div class="bg-red-200 px-4 py-2 rounded-lg flex items-center gap-2">
	<CircleX class="stroke-red-700" />
	<small class="text-red-700 text-sm inline-block font-normal" id="api-error">
		{formatError(Array.isArray(error) ? error[0] : error)}
	</small>
</div>
