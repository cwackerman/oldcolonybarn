<script>
	import Container from '$lib/Container.svelte';
	import PageFooter from '$lib/PageFooter.svelte';
	import PageHeader from '$lib/PageHeader.svelte';
	import hero from './derekandselena.mp4';
</script>

<svelte:head>
	<title>Home | The Barn at Old Colony</title>
</svelte:head>

<PageHeader fixed inverted />

<div class="hero">
	<h1>Let's have a rousin' good time!</h1>
	<a class="cta" href="/contact">Contact Us</a>

	<video autoplay muted>
		<source type="video/mp4" src={hero} />
	</video>
</div>

<PageFooter />

<style>
	.hero {
		align-items: center;
		color: var(--color-text-inverse);
		display: flex;
		flex: 0 0 auto;
		flex-direction: column;
		height: 100vh;
		justify-content: center;
		position: relative;
		width: 100%;
	}

	.hero video {
		object-fit: cover;
		position: absolute;
		right: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
	}

	h1 {
		max-width: 22ch;
	}

	.cta {
		background-color: var(--color-text-inverse);
		border-radius: 4px;
		color: var(--color-text);
		display: block;
		font-size: 1.5rem;
		font-family: Stranger-Slim;
		letter-spacing: 0.1em;
		margin: 0 auto;
		padding: 0.5rem 1rem;
		text-decoration: none;
		text-transform: uppercase;
		width: auto;
	}

	.cta:hover,
	.cta:focus-visible {
		background-color: var(--color-text);
		color: var(--color-text-inverse);
	}
</style>
