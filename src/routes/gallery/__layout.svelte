<script lang="ts">
	import { onMount } from 'svelte';
	import Container from '$lib/Container.svelte';
	import Image from 'svimg';

	type Masonry = Array<Array<URL>>;

	const photos = Object.values(
		import.meta.glob('../../../static/images/{Engagement,Summer Concerts,Wedding}/*.{jpg,jpeg}', {
			as: 'url',
			eager: true
		})
	).map(function (path) {
		return path.replace('/static', '');
	});

	console.debug(photos);

	let clientWidth = 0;
	let columnWidth = 0;
	let columns: Masonry = [];

	const filters = new Set<string>();

	for (const photo of photos) {
		const folder = photo.split('/')[2];
		filters.add(folder);
	}

	const activeFilters = new Set(filters);

	function generateColumns() {
		const items = photos.filter((photo) => {
			for (const filter of activeFilters) {
				if (photo.startsWith(`/images/${filter}`)) {
					return true;
				}
			}

			return false;
		});

		const minColWidth = 300;

		const gap = parseInt(
			window.getComputedStyle(document.documentElement).getPropertyValue('font-size')
		);

		const length = Math.max(
			Math.min(items.length, Math.floor((clientWidth + gap) / (minColWidth + gap))),
			1
		);

		columnWidth = clientWidth / length;

		columns = items.reduce(function (memo, photo, index) {
			const url = new URL(photo, import.meta.url);
			memo[index % length].push(url);
			return memo;
		}, Array.from({ length }, () => []) as Masonry);

		console.debug(columns);
	}

	function toggleFilter(event: Event) {
		if (event.target instanceof HTMLInputElement) {
			if (event.target.checked) {
				activeFilters.add(event.target.value);
			} else {
				activeFilters.delete(event.target.value);
			}
			generateColumns();
		}
	}

	onMount(generateColumns);
</script>

<svelte:window on:resize={generateColumns} />

<Container>
	<h1>Photo Gallery</h1>
</Container>

<form>
	{#each Array.from(filters) as filter}
		<input
			hidden
			id={filter}
			type="checkbox"
			checked={activeFilters.has(filter)}
			on:change={toggleFilter}
			value={filter}
		/>
		<label class="tag" for={filter}>
			{filter}
		</label>
	{/each}
</form>

<div class="gallery" bind:clientWidth>
	{#each columns as column}
		<div class="column">
			{#each column as item}
				<a href={item.href} target="_blank">
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

	form {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 3rem auto;
		gap: 1rem;
	}

	.tag {
		background-color: hsl(333, 12%, 95%);
		border-radius: 1rem;
		cursor: pointer;
		line-height: 1;
		padding: 0.5rem 1rem;
		user-select: none;
	}

	input:checked + .tag {
		background-color: var(--color-brand);
		color: var(--color-text-inverse);
	}
</style>
