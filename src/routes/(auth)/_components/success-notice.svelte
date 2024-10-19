<script lang="ts">
	import { formatSuccessMessage } from '$lib/utils/success';
	import { CircleCheck } from 'lucide-svelte';
	export let message: string;
</script>

<div class="bg-green-200 px-4 py-2 rounded-lg flex items-center gap-2">
	<CircleCheck class="stroke-green-700" />
	<small class="text-green-700 text-sm inline-block font-normal" id="api-error">{formatSuccessMessage(message)}</small>
</div>
