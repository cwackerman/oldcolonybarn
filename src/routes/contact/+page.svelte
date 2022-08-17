<script type="ts">
	import Container from '$lib/Container.svelte';
	import { toasts } from '$lib/Toaster.svelte';
	let submitting = false;
</script>

<svelte:head>
	<title>Contact | The Barn at Old Colony</title>
</svelte:head>

<Container>
	<h1>Contact</h1>

	<form
		action="https://script.google.com/macros/s/AKfycbxen_IGrnOCbss7apckNd1ZrTMSIdOCRXaFpnnNCqArSHqZRgNX7dDeQNntuT8rbsR5Lg/exec"
		accept-charset="UTF-8"
		disabled={submitting ? true : undefined}
		enctype="multipart/form-data"
		method="POST"
		on:submit={async (event) => {
			event.preventDefault();
			submitting = true;
			const form = event.currentTarget;
			try {
				await fetch(form.action, {
					method: form.method,
					body: new FormData(form)
				});
				form.reset();
				toasts.add({
					duration: 5000,
					level: 'success',
					message: 'Thanks for your submission!'
				});
			} catch (error) {
				console.error(error);
				toasts.add({
					duration: 5000,
					level: 'error',
					message: 'Something went wrong. Please try again.'
				});
			} finally {
				submitting = false;
			}
		}}
	>
		<div class="row">
			<label for="name">
				<span>Name(s)</span>
				<input type="text" id="name" name="name" autocomplete="name" required />
			</label>
		</div>

		<div class="row">
			<label for="email">
				<span>Email Address</span>
				<input type="email" id="email" name="email" autocomplete="email" required />
			</label>

			<label for="phone">
				<span>Phone Number</span>
				<input type="tel" id="phone" name="phone" autocomplete="tel" />
			</label>
		</div>

		<div class="row">
			<label for="type">
				<datalist id="event-type-suggestions">
					<option>Wedding</option>
					<option>Reunion</option>
					<option>Fundraiser</option>
				</datalist>
				<span>Event Type</span>
				<input type="text" id="type" name="type" list="event-type-suggestions" />
			</label>
		</div>

		<div class="row">
			<label for="message">
				<span>Message</span>
				<textarea id="message" name="message" rows="3" required />
			</label>
		</div>

		<footer class="row">
			<!-- <button type="reset">Clear</button> -->
			<button type="submit">{submitting ? 'Sending...' : 'Send'}</button>
		</footer>
	</form>
</Container>

<style>
	form {
		--border-size: 2px;
		display: flex;
		flex-direction: column;
		gap: var(--border-size);
		margin-block: 2em;
	}

	form[disabled] {
		opacity: 0.5;
	}

	.row {
		display: flex;
		flex-direction: row;
		gap: var(--border-size);
	}

	.row > * {
		flex-grow: 1;
	}

	label {
		all: unset;
		display: block;
		position: relative;
	}

	label:focus-within {
		color: var(--color-brand);
		z-index: 1;
	}

	label span {
		font-family: monospace;
		font-size: smaller;
		margin: 0.5em;
		letter-spacing: 0.1em;
		line-height: 1em;
		position: absolute;
		text-transform: uppercase;
	}

	button,
	textarea,
	input {
		border: none;
		box-sizing: border-box;
		display: block;
		color: inherit;
		font: inherit;
		margin: 0;
		padding: 1.5em 0.5em 0.5em;
		outline: var(--border-size) solid currentColor;
		width: 100%;
	}

	textarea {
		resize: vertical;
	}

	button {
		background-color: transparent;
		padding-block: 1em;
	}

	button:focus-visible,
	button:hover {
		color: var(--color-brand);
	}

	button[type='submit'] {
		--color: var(--color-text);
		background-color: var(--color);
		color: var(--color-text-inverse);
		outline-color: var(--color);
	}

	button[type='submit']:focus-visible,
	button[type='submit']:hover {
		--color: var(--color-brand);
	}
</style>
