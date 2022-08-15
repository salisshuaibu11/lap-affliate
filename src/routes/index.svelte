<script>
	import Hero from '../lib/components/Hero.svelte';
	import SuitableForAll from '$lib/pages/SuitableForAll.svelte';
	import WaysToEarn from '$lib/pages/WaysToEarn.svelte';
	import SpecialOffers from '$lib/pages/SpecialOffers.svelte';
	import Button from '$lib/components/Button.svelte';
	import Faqs from '$lib/components/Faqs.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import Join from '$lib/pages/Join.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Course from '$lib/components/Course.svelte';
</script>

<main>
	<Hero />
	<SuitableForAll />
	<Course />
	<WaysToEarn />
	<SpecialOffers />
	<Faqs />
	<CallToAction />
	<Join />
	<Footer />
</main>
