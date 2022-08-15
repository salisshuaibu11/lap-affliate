<script>
	import { slide } from 'svelte/transition';
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);

	const data = {
		'Is there a free trial available?': [
			`Yes, you can try us for free for 30 days. If you want, we’ll provide you with a
								free, personalized 30-minute onboarding call to get you up and running as soon as
								possible.`
		],
		'Is there a free trial available?': [
			`Yes, you can try us for free for 30 days. If you want, we’ll provide you with a
								free, personalized 30-minute onboarding call to get you up and running as soon as
								possible.`
		]
	};
</script>

<div class="bg-gray-50">
	<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
			<h2 class="text-center tracking-tight font-bold text-gray-900 sm:tracking-tight">
				<span class="block text-4xl">Frequently asked questions</span>
				<span class="text-gray-500">Everything you need to know about the product and billing.</span
				>
			</h2>
			<dl class="mt-6 space-y-6 divide-y divide-gray-200">
				{#each Object.entries(data) as entry}
					<div aria-controls={entry[0]} class="pt-6">
						<dt class="text-lg">
							<button
								type="button"
								on:click={toggle}
								aria-expanded={isOpen}
								class="text-left w-full flex justify-between items-start text-gray-400"
								aria-controls={entry[0]}
							>
								<span class="font-medium text-gray-900">{entry[0]}</span>
								<span class="ml-6 h-7 flex items-center">
									{#if isOpen}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-6 w-6 text-teal-700"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									{:else}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-6 w-6 text-teal-700"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									{/if}
								</span>
							</button>
						</dt>
						{#each entry[1] as item}
							{#if isOpen}
								<dd transition:slide={{ duration: 300 }} class="mt-2 pr-12" id="faq-0">
									<p class="text-base text-gray-500">
										{item}
									</p>
								</dd>
							{/if}
						{/each}
					</div>
				{/each}

				<!-- More questions... -->
			</dl>
		</div>
	</div>
</div>
