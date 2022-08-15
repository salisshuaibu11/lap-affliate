<script>
	import Carousel from '../components/Carousel.svelte';
	const SUITABLE_FOR_ALL = [
		{
			id: 0,
			title: 'A business owner in need of more online sales & revenue'
		},
		{
			id: 1,
			title: 'Sales TEAM under pressure to meet up with HUGE sales target'
		},
		{
			id: 2,
			title: 'You have a job (9-5) but need some extra side income'
		},
		{
			id: 3,
			title: 'A network marketer who wants to grow your team and rank high.'
		},
		{
			id: 4,
			title: 'A startup looking for investment capital to expand'
		},
		{
			id: 5,
			title: "Maybe you're a consultant looking for high-paying clients"
		},
		{
			id: 6,
			title: "You're a student in need of steady pocket money"
		},
		{
			id: 7,
			title: 'REAL ESTATE brokers who wants to sell more properties.'
		},
		{
			id: 8,
			title: 'Unemployed looking for a HIGH-PAYING job'
		},
		{
			id: 9,
			title: 'Anyone who would like to build an online business Making Minimum $10,000 Monthly.'
		}
	];
</script>

<div class="bg-white">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl font-extrabold text-gray-900">Suitable for all people</h2>
			<p class="mt-4 text-lg text-gray-500">
				We Identified Categories Of People This Platform Is Meant For, Lets See If This Is The Best
				Fit For You.
			</p>
		</div>
		<div
			class="max-w-5xl mx-auto mt-12 space-y-10  sm:space-y-3 grid grid-cols-1 gap-0 sm:grid-cols-2"
		>
			{#each SUITABLE_FOR_ALL as SUITABLE}
				<div class="flex items-center space-x-3">
					<!-- Heroicon name: outline/check -->
					<div
						id={SUITABLE.id}
						class="flex items-center justify-center h-8 w-8 rounded-full bg-green-100"
					>
						<svg
							class="h-6 w-6 text-green-500"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
						</svg>
					</div>
					<p class="leading-6 font-medium text-gray-500">
						{SUITABLE.title}
					</p>
				</div>
			{/each}
		</div>
	</div>
	<Carousel />
</div>
