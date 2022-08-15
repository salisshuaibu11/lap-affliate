<script>
	import Button from '$lib/components/Button.svelte';
	const COURSES = [
		{
			id: 0,
			imgUrl: '/video.png',
			title: `Whatsapp Growth Hack`,
			subTitle: 'Find and grow your customer base on whatsapp',
			name: 'Sam Havard',
			date: 'Mar 14, 2020'
		}
	];
</script>

<div class="dashboard__header pb-4">
	<h4 class="text-3xl font-bold mb-2">Classroom</h4>
	<p class="text-gray-500 font-medium">Learn skills that would last you for life</p>
</div>

<div>
	<div class="sm:hidden">
		<label for="tabs" class="sr-only">Select a tab</label>
		<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
		<select
			id="tabs"
			name="tabs"
			class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md"
		>
			<option selected>Skills Center</option>
			<option>Crypto Academy</option>
		</select>
	</div>
	<div class="hidden sm:block">
		<div class="border-b border-gray-200">
			<nav class="-mb-px flex space-x-8" aria-label="Tabs">
				<a
					href="/"
					class="border-teal-600 text-black font-bold hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-4 text-sm"
				>
					Skills Center
				</a>

				<a
					href="/"
					class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
				>
					Crypto Academy
				</a>
			</nav>
		</div>
	</div>
</div>

<div class="my-8">
	<ul
		class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
	>
		{#each COURSES as course}
			<li class="relative">
				<div class="space-y-4">
					<div class="relative">
						<img class="h-48 w-full bg-black  object-cover rounded-lg" src={course.imgUrl} alt="" />
						<svg
							class="w-6 h-6 absolute top-24 left-40 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
							/><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/></svg
						>
					</div>

					<div class="space-y-2">
						<div class="text-lg leading-6 font-medium space-y-1">
							<p class="font-bold">
								{course.title}
							</p>
							<h3 class="text-gray-500">{course.subTitle}</h3>
						</div>
						<div class="space-x-3 text-gray-400">
							<span>{course.name}</span>
							<span>{course.date}</span>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
