<script>
	import { base } from '$app/paths';
	import Toaster from '$lib/Toaster.svelte';
	import '../app.css';
</script>

<slot />

<Toaster />
