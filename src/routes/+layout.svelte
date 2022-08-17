<script>
	import PageFooter from '$lib/PageFooter.svelte';
	import PageHeader from '$lib/PageHeader.svelte';
</script>

<PageHeader />

<main>
	<slot />
</main>

<PageFooter />

<style>
	main {
		flex-grow: 1;
		width: 100%;
	}
</style>
