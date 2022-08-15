<script>
	import Button from '$lib/components/Button.svelte';
</script>

<div class="dashboard__header pb-4">
	<h4 class="text-3xl font-bold mb-2">Bonus</h4>
	<p class="text-gray-500 font-medium">See who you have referred and commissions earned from it</p>
</div>

<ul
	class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
>
	<li>
		<div class="space-y-4">
			<div class="aspect-w-3 aspect-h-2">
				<img class="object-cover shadow-lg" src="/video.png" alt="" />
			</div>

			<div class="space-y-2">
				<div class="text-lg leading-6 font-medium">
					<h3 class="mb-6">6 Days Coaching Program</h3>
					<Button
						className="flex space-x-2 items-center text-white bg-teal-600 py-2 px-3 rounded-md"
					>
						<span class="text-sm">Open</span>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/></svg
						>
					</Button>
				</div>
			</div>
		</div>
	</li>

	<li>
		<div class="space-y-4">
			<div class="aspect-w-3 aspect-h-2">
				<img class="object-cover shadow-lg" src="/video.png" alt="" />
			</div>

			<div class="space-y-2">
				<div class="text-lg leading-6 font-medium">
					<h3 class="mb-6">Chat with Sam Harvard</h3>
					<Button
						className="flex space-x-2 items-center text-white bg-teal-600 py-2 px-3 rounded-md"
					>
						<span class="text-sm">Open</span>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/></svg
						>
					</Button>
				</div>
			</div>
		</div>
	</li>

	<li>
		<div class="space-y-4">
			<div class="aspect-w-3 aspect-h-2">
				<img class="object-cover shadow-lg" src="/video.png" alt="" />
			</div>

			<div class="space-y-2">
				<div class="text-lg leading-6 font-medium">
					<h3 class="mb-6">High Ticket Mindset</h3>
					<Button
						className="flex space-x-2 items-center text-white bg-teal-600 py-2 px-3 rounded-md"
					>
						<span class="text-sm">Open</span>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/></svg
						>
					</Button>
				</div>
			</div>
		</div>
	</li>
</ul>
