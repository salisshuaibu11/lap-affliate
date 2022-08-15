<script>
	import Button from '../components/Button.svelte';
	import NavLink from '../components/NavLink.svelte';
</script>

<div class="p-10">
	<div class="max-w-7xl mx-auto text-center py-8 px-4 sm:py-10 sm:px-6 lg:px-8">
		<h2 class="text-3xl tracking-tight font-medium sm:text-2xl sm:tracking-tight">
			Let’s get started on something great
		</h2>
		<p class="mt-4 text-lg leading-6 text-gray-500">
			Join over 4,000+ affiliates already earning with Learnoflix.
		</p>
		<div class="mt-8 flex space-x-2 justify-center">
			<Button
				className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md text-gray-600 bg-white hover:bg-gray-50 sm:w-auto"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span>View demo</span>
			</Button>
			<Button
				href="/register"
				className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 sm:w-auto"
			>
				Get started
			</Button>
		</div>
	</div>
</div>
