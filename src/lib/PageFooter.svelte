<footer>
	<section>
		<strong>The Barn at Old Colony</strong>
		<ul>
			<li><a href="mailto:jeanine@thebarnatoldcolony.com">jeanine@thebarnatoldcolony.com</a></li>
			<li><a href="tel:+15303301590">(530) 330-1589</a></li>
		</ul>
		<a
			href="https://www.google.com/maps/place/19409+Newville+Rd,+Orland,+CA+95963/@39.8089505,-122.3294629,580m/data=!3m1!1e3!4m5!3m4!1s0x8082f64fd21c9cbd:0x530b97720c1889f4!8m2!3d39.8017412!4d-122.3242979"
			target="_blank"
		>
			<address>
				19409 Newville Rd
				<br />
				Orland, CA 95963
			</address>
		</a>
	</section>
	<nav>
		<a href="https://www.facebook.com/thebarnatoldcolony" target="_blank">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 32 32"
				height="24"
				width="24"
				style="fill: currentColor"
			>
				<title>Facebook</title>
				<path
					d="M31 16.092C31 7.757 24.284 1 16 1 7.716 1 1 7.757 1 16.092 1 23.624 6.485 29.868 13.656 31V20.454H9.848v-4.362h3.808v-3.325c0-3.783 2.24-5.872 5.666-5.872 1.641 0 3.358.295 3.358.295v3.714h-1.892c-1.863 0-2.444 1.163-2.444 2.357v2.83h4.16l-.665 4.363h-3.495V31C25.514 29.868 31 23.624 31 16.092"
				/>
			</svg>
		</a>

		<a href="https://www.instagram.com/thebarnatoldcolony/" target="_blank">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				width="24"
				viewBox="0 0 32 32"
				style="fill: currentColor"
			>
				<title>Instagram</title>
				<path
					d="M16 1c4.074 0 4.585.017 6.184.09 1.597.073 2.687.327 3.642.698a7.352 7.352 0 012.656 1.73 7.353 7.353 0 011.73 2.656c.371.955.625 2.045.698 3.642.073 1.6.09 2.11.09 6.184s-.017 4.585-.09 6.184c-.073 1.597-.327 2.687-.697 3.642a7.353 7.353 0 01-1.73 2.656 7.353 7.353 0 01-2.657 1.73c-.955.371-2.045.625-3.642.698-1.6.073-2.11.09-6.184.09s-4.585-.017-6.184-.09c-1.597-.073-2.687-.327-3.642-.697a7.353 7.353 0 01-2.656-1.73 7.352 7.352 0 01-1.73-2.657c-.371-.955-.625-2.045-.698-3.642C1.017 20.584 1 20.074 1 16s.017-4.585.09-6.184c.073-1.597.327-2.687.698-3.642a7.352 7.352 0 011.73-2.656 7.352 7.352 0 012.656-1.73c.955-.371 2.045-.625 3.642-.698C11.416 1.017 11.926 1 16 1zm0 2.703c-4.005 0-4.48.015-6.061.087-1.463.067-2.257.311-2.786.517-.7.272-1.2.597-1.724 1.122a4.647 4.647 0 00-1.122 1.724c-.206.529-.45 1.323-.517 2.786-.072 1.581-.087 2.056-.087 6.061s.015 4.48.087 6.061c.067 1.463.311 2.257.517 2.786.272.7.597 1.2 1.122 1.724.525.525 1.024.85 1.724 1.122.529.206 1.323.45 2.786.517 1.581.072 2.056.087 6.061.087s4.48-.015 6.061-.087c1.463-.067 2.257-.311 2.786-.517.7-.272 1.2-.597 1.724-1.122a4.647 4.647 0 001.122-1.724c.206-.529.45-1.323.517-2.786.072-1.581.087-2.056.087-6.061s-.015-4.48-.087-6.061c-.067-1.463-.311-2.257-.517-2.786-.272-.7-.597-1.2-1.122-1.724a4.647 4.647 0 00-1.724-1.122c-.529-.206-1.323-.45-2.786-.517-1.581-.072-2.056-.087-6.061-.087zm0 4.594a7.703 7.703 0 110 15.406 7.703 7.703 0 010-15.406zM16 21a5 5 0 100-10 5 5 0 000 10zm9.807-13.007a1.8 1.8 0 11-3.6 0 1.8 1.8 0 013.6 0z"
				/>
			</svg>
		</a>
	</nav>
</footer>

<style>
	footer {
		background-color: var(--color-tint);
		box-sizing: border-box;
		color: var(--color-brand);
		gap: 1em;
		padding: 1em;
		width: 100%;
		align-items: flex-end;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	footer::after {
		content: '';
		background-color: inherit;
		position: fixed;
		top: 100%;
		left: -100vw;
		right: 100vw;
		height: 100vh;
	}

	ul {
		list-style: none;
		margin-block: 0.5em;
		padding-left: 0;
	}

	address {
		font-style: normal;
	}

	nav {
		column-gap: 1rem;
		display: flex;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		color: var(--color-text);
	}
</style>
