<script>
	import { Button } from 'flowbite-svelte';
	import LogoCloud from '../../_components/logo-cloud.svelte';
	import HeroImg from '$lib/images/marketing/hero.png';
</script>

<div class="max-w-screen-xl mx-auto px-5 py-16">
	<div class="w-full flex flex-col justify-center items-center">
		<div class="text-center">
			<h1
				class="styled-heading text-balance text-3xl sm:text-4xl font-bold tracking-tight text-primary-base lg:text-6xl text-center"
			>
				Smart HR Solutions
				<br />
				for Growing Companies
			</h1>
			<p class="my-3 md:text-lg text-neutral-400">
				From job applications to employee management, your all-in-one HR solution designed to
				simplify hiring, onboarding, and beyond.
			</p>
		</div>
		<div class="max-w-3xl mx-auto">
			<Button class="bg-primary-base hover:bg-primary-400" size="sm">Get Started</Button>
			<Button color="alternative" size="sm">Book a demo</Button>
		</div>
		<LogoCloud />
		<div>
			<img src={HeroImg} alt="hero-img" />
		</div>
	</div>
</div>
