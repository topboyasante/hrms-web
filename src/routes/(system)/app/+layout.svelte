<script>
	import Sidebar from './_components/sidebar.svelte';
</script>


<!-- using "style" here because for some reason tailwind is failing me -->
<section class="grid" style="grid-template-columns: 280px 1fr;">
	<Sidebar />
	<slot />
</section>