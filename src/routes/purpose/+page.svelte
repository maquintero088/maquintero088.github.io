<section>
	<h1>
		Propósito
	</h1>
	<p>
		Presentar al visitante los proyectos de diseño y desarrollo de aplicaciones multiplataforma realizados por <a
		href="https://linkedin.com/in/qcmarcel">@qcmarcel</a>
	</p>
	<ul>
		<li><img src="yo.jpg" width="90%" alt="me proyecto"></li>
		<li class="icon"><img src="favicon.svg" alt="me presento"></li>
		<li><img src="IMG_0007.jpg" alt="me dedico"></li>
	</ul>
</section>

<style>
	ul {
			padding: 0 ;
			margin-top: 3em;
			list-style: none;
			display: flex;
      gap: -2em;
	}

	ul li img{
			max-height: 40vh;
      filter: drop-shadow(1px 1px 6px var(--shadow-six));
	}

	ul li:first-child img{
			transform: rotate(calc(-.5*var(--rotate30)));
	}

	.icon {
			z-index: 10;
	}

  ul li:nth-child(2) img{
      margin-left: -3em;
  }

  ul li:last-child img{
      transform: rotate(calc(.5*var(--rotate30)));
  }
</style>