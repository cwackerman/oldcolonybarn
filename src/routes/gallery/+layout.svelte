<script lang="ts">
	import { onMount } from 'svelte';
	import Container from '$lib/Container.svelte';

	type Masonry = Array<Array<URL>>;

	const photos = Object.values(
		import.meta.glob('./assets/*.{jpg,jpeg,mp4}', {
			as: 'url',
			eager: true
		})
	).map(function (photo) {
		return new URL(photo, import.meta.url);
	});

	let clientWidth = 0;
	let columns: Masonry = [];

	function generateColumns() {
		const items = photos;

		const minColWidth = 300;

		const gap = parseInt(
			window.getComputedStyle(document.documentElement).getPropertyValue('font-size')
		);

		const length = Math.max(
			Math.min(items.length, Math.floor((clientWidth + gap) / (minColWidth + gap))),
			1
		);

		const columnWidth = clientWidth / length;

		columns = items.reduce(function (memo, photo, index) {
			memo[index % length].push(photo);
			return memo;
		}, Array.from({ length }, () => []) as Masonry);
	}

	onMount(generateColumns);
</script>

<svelte:window on:resize={generateColumns} />

<Container>
	<h1>Photo Gallery</h1>
</Container>

<div class="gallery" bind:clientWidth>
	{#each columns as column}
		<div class="column">
			{#each column as item}
				<a href={item.href} target="_blank">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src={item.href} />
				</a>
			{/each}
		</div>
	{/each}
</div>

<slot />

<style>
	.gallery {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		margin: 1rem;
	}

	.gallery a {
		display: block;
		margin-block: 1rem;
		width: 100%;
	}

	img {
		display: block;
		height: auto;
		display: block;
		width: 100%;
	}
</style>
