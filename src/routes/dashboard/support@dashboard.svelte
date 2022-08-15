<script>
	import Button from '$lib/components/Button.svelte';
</script>

<div class="dashboard__header pb-4">
	<h4 class="text-3xl font-bold mb-2">Support</h4>
	<p class="text-gray-500 font-medium">Need Help? Open a support ticket here</p>
</div>

<form class="space-y-8">
	<div>
		<div>
			<label for="subject" class="sr-only">Subject</label>
			<input
				type="text"
				name="subject"
				id="subject"
				class="shadow-sm outline-none block w-full sm:text-sm border-gray-300 rounded-md"
				placeholder="Subject"
			/>
		</div>

		<div class="my-3">
			<textarea
				rows="4"
				name="message"
				id="message"
				placeholder="Type your message"
				class="shadow-sm focus:ring-2 focus:ring-gray-100 focus:outline-0 focus:border-0 block w-full sm:text-sm border-gray-300 rounded-md"
			/>
		</div>
		<div
			class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
		>
			<div class="space-y-1 text-center">
				<img class="mx-auto" src="/icons/upload.svg" alt="Icon for uploading" />
				<div class="flex text-sm text-gray-600">
					<label
						for="file-upload"
						class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
					>
						<span>Click to upload</span>
						<input id="file-upload" name="file-upload" type="file" class="sr-only" />
					</label>
					<p class="pl-1">or drag and drop</p>
				</div>
				<p class="text-xs text-gray-500">SVG, PNG, JPG, or GIF (max. 800x400px)</p>
			</div>
		</div>
	</div>
	<div class="pt-5">
		<div class="flex justify-end">
			<Button
				className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
				>Create new ticket</Button
			>
		</div>
	</div>
</form>

<div class="mt-20">
	<div class="my-2">
		<h4 class="text-3xl font-bold">Chat with support</h4>
	</div>

	<ul
		class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
	>
		<li class="bg-white p-4 border space-y-6 rounded-xl shadow-md">
			<div class="space-x-3">
				<span>Ada Billions</span>
				<span>Payout Issues</span>
			</div>
			<Button className="w-full border px-4 py-2 flex justify-center rounded-xl space-x-3">
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
						d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
					/></svg
				>
				<span>Chat now</span>
			</Button>
		</li>

		<li class="bg-white p-4 border space-y-6 rounded-xl shadow-md">
			<div class="space-x-3">
				<span>Energetic EJ</span>
				<span>Password Issues</span>
			</div>
			<Button className="w-full border px-4 py-2 flex justify-center rounded-xl space-x-3">
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
						d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
					/></svg
				>
				<span>Chat now</span>
			</Button>
		</li>

		<li class="bg-white p-4 border space-y-6 rounded-xl shadow-md">
			<div class="space-x-3">
				<span>Billionaire Sam</span>
				<span>Commission Issues</span>
			</div>
			<Button className="w-full border px-4 py-2 flex justify-center rounded-xl space-x-3">
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
						d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
					/></svg
				>
				<span>Chat now</span>
			</Button>
		</li>
	</ul>
</div>
