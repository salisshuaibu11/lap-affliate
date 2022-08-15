<script>
	import { onMount } from 'svelte';

	let Carousel; // for saving Carousel component class
	let carousel; // for calling methods of the carousel instance
	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});
</script>

<ul
	class="max-w-5xl mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
>
	<li>
		<div
			class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
		>
			<img
				src="/carousels/1.png"
				alt=""
				class="object-cover pointer-events-none group-hover:opacity-75"
			/>
		</div>
	</li>
	<li>
		<div
			class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
		>
			<img
				src="/carousels/1.png"
				alt=""
				class="object-cover pointer-events-none group-hover:opacity-75"
			/>
		</div>
	</li>
	<li>
		<div
			class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
		>
			<img
				src="/carousels/1.png"
				alt=""
				class="object-cover pointer-events-none group-hover:opacity-75"
			/>
		</div>
	</li>
	<li>
		<div
			class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
		>
			<img
				src="/carousels/1.png"
				alt=""
				class="object-cover pointer-events-none group-hover:opacity-75"
			/>
		</div>
	</li>
</ul>
