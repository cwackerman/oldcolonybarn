<script>
	import { page } from '$app/stores';
	console.debug($page.params.photo);
</script>

<svelte:head>
	<title>{$page.params.photo} | The Barn at Old Colony</title>
</svelte:head>

<img src="/gallery/photos/{$page.params.photo}" />

<style>
	img {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 2;
	}
</style>
