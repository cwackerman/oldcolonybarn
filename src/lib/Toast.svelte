<script lang="ts">
	import { onMount } from 'svelte';

	type Level = 'success' | 'error' | 'warning' | 'info';
	export let level: Level = 'info';
	export let duration = 5000;
	let element: HTMLDialogElement;

	onMount(function () {
		let timeout: ReturnType<typeof setTimeout>;

		element.show();

		if (duration) {
			timeout = setTimeout(function () {
				element.close();
			}, duration);
		}

		return function () {
			clearTimeout(timeout);
		};
	});
</script>

<dialog class={level} bind:this={element} on:close>
	<form method="dialog">
		<slot />
		<!-- <button>Close</button> -->
	</form>
</dialog>

<style>
	dialog {
		background-color: black;
		border-width: 2px;
		box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.25);
		box-sizing: border-box;
		color: white;
		position: relative;
		width: 100%;
	}

	.success {
		background-color: #6dd400;
	}

	.error {
		background-color: #e02020;
	}

	.warning {
		background-color: #f7b500;
	}

	.info {
		background-color: #0091ff;
	}
</style>
