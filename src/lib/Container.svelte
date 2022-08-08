<script lang="ts">
	export let wide = false;
</script>

<div class:wide>
	<slot />
</div>

<style>
	div {
		box-sizing: border-box;
		margin: 0 auto;
		max-width: 80ch;
		padding: 0 2rem;
		width: 100%;
	}

	.wide {
		max-width: 160ch;
	}

	@media (min-width: 80ch) {
		div {
			padding-inline: 5rem;
		}
	}
</style>
