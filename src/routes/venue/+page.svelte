<script>
	import Container from '$lib/Container.svelte';
	import barn from './barn.jpeg';
</script>

<svelte:head>
	<title>Venue Info | The Barn at Old Colony</title>
</svelte:head>

<Container>
	<h1>Venue Info</h1>
</Container>

<Container wide>
	<div>
		<article>
			<p>
				Welcome to The Barn at Old Colony. We are an indoor-outdoor wedding and event center located
				eight miles west of Orland off I-5 and just across the road from the Black Butte Dam
				Observation Point. We are a large venue and can accommodate intimate groups as well as up to
				300 guests.
			</p>
			<p>
				At Old Colony we offer several ceremony options: the more than one hundred-year-old hay barn
				has maintained its turn of the century authenticity and charm and is our most popular
				choice, or atop the beautiful buttes overlooking the lake, near the oak tree with our
				organic almond orchards as your backdrop, or the outdoor cattle corral complete with arbor
				and garden fountain.
			</p>
			<p>
				Consider the season that suits you best, whether it be the green grasses and wildflowers,
				the February pink and white blossoms in the almond orchards, or the warm, golden hills
				amongst the beautiful black buttes during the fall.
			</p>
			<p>We look forward to helping you choose the perfect setting for your special day.</p>
			<p>
				Join us on a summer evening for one of our sunset concerts in the corral, where families can
				bring chairs and gaze at the colorful horizon as the sun sets behind the buttes, all while
				listening to good vibes from our local bands. Vendors from the valley also come out to serve
				yummy foods and spirits. Whether you choose to play games, relax and listen to the tunes, or
				stomp and dance under the stars, you are sure to have a rousin’ good time.
			</p>
			<p>
				At Old Colony we also are eager to help you with your next fundraiser, reunion, prom, party,
				shower, casino night, or any suggested event you have in mind. <a
					href="https://forms.gle/12m5Bway6AP18Ssv7"
					target="_blank">Contact us</a
				>
				today for a scheduled tour or appointment.
			</p>
		</article>

		<aside>
			<img src={barn} />
		</aside>
	</div>
</Container>

<style>
	div {
		margin-bottom: 4rem;
		gap: 4rem;
		grid-template-columns: repeat(2, 1fr);
		width: 100%;
	}

	img {
		display: block;
		height: auto;
		width: 100%;
	}

	@media (min-width: 80ch) {
		div {
			display: grid;
		}
	}
</style>
