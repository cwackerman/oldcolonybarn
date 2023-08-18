<script lang="ts">
	import Container from '$lib/Container.svelte';
	import Map from '$lib/Map.svelte';
	import mp4 from './directions.mp4';
</script>

<svelte:head>
	<title>Directions | The Barn at Old Colony</title>
</svelte:head>

<Container>
	<h1>Directions</h1>

	<!-- svelte-ignore a11y-media-has-caption -->
	<video controls>
		<source src={mp4} />
	</video>
</Container>

<Map lng={39.810032} lat={-122.329718} zoom={15} />

<style>
	video {
		display: block;
		max-width: 100%;
		margin-bottom: 4em;
	}
</style>
