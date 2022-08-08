<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';

	export let lat = 0;
	export let lng = 0;
	export let zoom = 0;

	let element: HTMLElement;

	mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

	onMount(() => {
		if (browser) {
			console.debug(element);
			const map = new mapboxgl.Map({
				container: element,
				cooperativeGestures: true,
				center: [lat, lng],
				zoom,
				style: 'mapbox://styles/cwackerman/cl5yr5bnv001n14nqnc6cdn9f'
			});

			const marker = new mapboxgl.Marker().setLngLat([lat, lng]).addTo(map);
		}
	});
</script>

<svelte:head>
	<link href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css" rel="stylesheet" />
</svelte:head>

<div bind:this={element} />

<style>
	div {
		height: 600px;
		max-height: 80vh;
	}
</style>
