<script>
	import Button from './Button.svelte';

	const COURSES = [
		{
			id: 0,
			imgUrl: '/video.png',
			title: `“I went from earning $20 to making over $4000 in 7 Days. LAP has really changed my life”`,
			subTitle: 'Kenny Nwokoye'
		},
		{
			id: 1,
			imgUrl: '/video.png',
			title: `“I went from earning $20 to making over $4000 in 7 Days. LAP has really changed my life”`,
			subTitle: 'Kenny Nwokoye'
		},
		{
			id: 2,
			imgUrl: '/video.png',
			title: `“I went from earning $20 to making over $4000 in 7 Days. LAP has really changed my life”`,
			subTitle: 'Kenny Nwokoye'
		}
	];
</script>

<div class="bg-gray-100 my-10 py-4">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
		<div class="max-w-3xl mb-10 mx-auto text-center">
			<h2 class="text-3xl font-extrabold text-gray-900">
				Join thousands of affliliates already earning
			</h2>
			<p class="mt-4 text-lg text-gray-500">
				Join the 50,000+ online entrepreneurs who are actively using Learnoflix to easily get
				traffic to other people’s products and get paid for it!
			</p>
		</div>
		<ul
			class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
		>
			{#each COURSES as course}
				<li class="relative">
					<div class="space-y-4">
						<div class="relative">
							<img
								class="h-48 w-full bg-black  object-cover rounded-lg"
								src={course.imgUrl}
								alt=""
							/>
							<svg
								class="w-6 h-6 absolute top-24 left-44 text-white"
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
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex justify-center">
		<Button className="text-white mx-auto bg-cyan-600 py-3 px-6">Get Started Today</Button>
	</div>
</div>
