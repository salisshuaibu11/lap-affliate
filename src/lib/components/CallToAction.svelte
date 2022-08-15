<script>
	import NavLink from './NavLink.svelte';
</script>

<div class="p-10">
	<div
		class="rounded-lg bg-gradient-to-r from-cyan-50 to-orange-100 max-w-7xl mx-auto text-center py-8 px-4 sm:py-10 sm:px-6 lg:px-8"
	>
		<div class="flex justify-center mb-3 -space-x-2 overflow-hidden">
			<img
				class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
				src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			/>
			<img
				class="inline-block z-10 h-10 w-10 rounded-full ring-2 ring-white"
				src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			/>
			<img
				class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
				src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
				alt=""
			/>
		</div>
		<h2 class="text-3xl tracking-tight font-bold sm:text-2xl sm:tracking-tight">
			Still have questions?
		</h2>
		<p class="mt-4 text-lg leading-6 text-gray-500">
			Can’t find the answer you’re looking for? Please chat to our friendly team.
		</p>
		<NavLink
			href="/register"
			className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 sm:w-auto"
		>
			Sign up for free
		</NavLink>
	</div>
</div>
