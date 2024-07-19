<section>
	<div class="welcome">
		<picture>
			<!--<source srcset="svelte-welcome.webp" type="image/webp" />-->
			<img src="favicon.svg" alt="Márcel Quintero" />
		</picture>
	</div>
	<h1>
		Márcel Armando Quintero Carrillo
	</h1>
	<h2>
		Fullstack Developer & Software Engineer
	</h2>
	<p>
		Jóven emprendedor con la motivación y el compromiso de diseñar aplicaciones web y móviles para el beneficio de sectores de innovación.
	</p>
	<!--<Counter />-->
</section>

<style>

	h1 {
		width: 100%;
		margin-bottom: 0;
	}

	h2{
		color: white;
		font-size: x-large;
		font-weight: bold;
		margin-top: 0;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
		margin-top: 2em;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
			filter: drop-shadow(1px 1px 6px var(--shadow-six));
	}
</style>
