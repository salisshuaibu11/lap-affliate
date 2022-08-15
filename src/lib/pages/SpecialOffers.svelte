<script>
	import Button from '../components/Button.svelte';

	const SUITABLE_FOR_ALL = [
		{
			id: 0,
			title: 'Full Access To The 30 Days Income Challenge Program.'
		},
		{
			id: 1,
			title: 'Free LAP Membership Account'
		},
		{
			id: 2,
			title:
				'Access to our proven money generating Blueprint Called The Make Money In 48Hours Blueprint'
		},
		{
			id: 3,
			title: 'Weekly coaching calls'
		},
		{
			id: 4,
			title:
				'Access to a special Money secret training that will ensure you succeed on this platform'
		},
		{
			id: 5,
			title: 'Access to our help community on Telegram and Facebook'
		}
	];
</script>

<div class="bg-gray-100 lg:p-20 p-3">
	<div class="max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
		<div class="max-w-lg">
			<h3 class="text-3xl font-bold mb-3">Our special offer awaits..</h3>
			<p class="text-gray-500">
				Everything You’ll Need To Build Your Own $1000 To $10,000 Income Online Is Given To You On
				This Platform
			</p>
		</div>

		<div class="bg-white shadow-md rounded-lg divide-y divide-gray-400">
			<div class="flex justify-between items-center p-6">
				<div class="space-y-2">
					<h4 class="space-x-3">
						<span class="font-extrabold text-lg">VIP plan</span>
						<span class="text-teal-200 bg-teal-500 rounded-full px-3 py-1">Popular</span>
					</h4>
					<p class="text-gray-500">Our most popular plan for affliates</p>
				</div>
				<div>
					<span class="font-bold">
						<sup class="text-2xl">$</sup>
						<span class="text-5xl">100</span>
					</span>
					<span class="font-bold">annually</span>
				</div>
			</div>

			<div class="p-6">
				<h2 class="text-2xl font-extrabold text-gray-900">Features</h2>
				<div class="mt-8 space-y-10  sm:space-y-3 grid grid-cols-1 gap-0 sm:grid-cols-2">
					{#each SUITABLE_FOR_ALL as SUITABLE}
						<div class="flex items-center space-x-3">
							<!-- Heroicon name: outline/check -->
							<div
								id={SUITABLE.id}
								class="flex items-baseline justify-center rounded-full bg-green-100"
							>
								<svg
									class="h-5 w-5 text-green-500"
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
							<p class="leading-6 text-sm font-medium text-gray-500">
								{SUITABLE.title}
							</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="p-6">
				<Button className="w-full text-white bg-teal-700 py-2 rounded-md">Get started</Button>
			</div>
		</div>
	</div>
</div>
