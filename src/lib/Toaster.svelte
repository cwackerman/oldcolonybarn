<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import Toast from './Toast.svelte';

	export interface iToast {
		duration?: number;
		level: 'success' | 'error' | 'warning' | 'info';
		message: string;
	}

	function makeStore() {
		const store = writable<iToast[]>([]);

		function add(item: iToast) {
			store.update(function (items) {
				return items.concat(item);
			});
		}

		function remove(item: iToast) {
			store.update(function (items) {
				return items.filter((i) => i !== item);
			});
		}

		return {
			subscribe: store.subscribe,
			add,
			remove
		};
	}

	export const toasts = makeStore();
</script>

<script lang="ts">
	$: {
		console.debug($toasts);
	}
</script>

<aside>
	{#each $toasts as toast}
		<Toast on:close={() => toasts.remove(toast)} duration={toast.duration} level={toast.level}
			>{toast.message}</Toast
		>
	{/each}
</aside>

<style>
	aside {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		position: fixed;
		margin: 1rem;
		max-width: 40ch;
		width: 100%;
		bottom: 0;
		left: auto;
		right: auto;
	}
</style>
