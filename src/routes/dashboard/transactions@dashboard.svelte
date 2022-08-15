<div class="px-4 sm:px-6 lg:px-8">
	<div class="sm:flex sm:items-center">
		<div class="sm:flex-auto">
			<h1 class="text-xl font-semibold text-gray-900">Transactions</h1>
			<p class="mt-2 text-sm text-gray-700">
				View all transactions carried out on your affliate account.
			</p>
		</div>
		<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
			<button
				type="button"
				class="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none sm:w-auto"
				>Export as CSV</button
			>
		</div>
	</div>
	<div class="mt-8 flex flex-col">
		<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
				<!-- Pagination -->
				<nav class="bg-white py-3 flex items-center justify-between" aria-label="Pagination">
					<div class="hidden sm:block">
						<p class="text-sm text-gray-700">
							Showing
							<span class="font-medium">10</span>
							entries
						</p>
					</div>
					<div class="flex-1 flex justify-between items-center sm:justify-end">
						<button
							type="button"
							class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
							id="menu-button"
							aria-expanded="false"
							aria-haspopup="true"
						>
							Sort by:
						</button>
						<select class="py-1 border-none outline-none">
							<option class="text-gray-500 px-4 py-2 text-sm">All</option>
						</select>
					</div>
				</nav>
				<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
					<table class="min-w-full divide-y divide-gray-300">
						<thead class="bg-gray-100">
							<tr>
								<th
									scope="col"
									class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
									>Date</th
								>
								<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>Transaction Type</th
								>
								<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>Amount</th
								>
								<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>Description</th
								>
							</tr>
						</thead>
						<tbody class="bg-white divide-y">
							<!-- Odd row -->
							<tr>
								<td
									class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
									>02-11-2021</td
								>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
									>Affliate commission</td
								>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">$40</td>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
									>Your earn first level referral commission, good job!</td
								>
							</tr>
							<tr>
								<td
									class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
									>02-11-2021</td
								>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
									>Affliate commission</td
								>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">$40</td>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
									>Your earn first level referral commission, good job!</td
								>
							</tr>
							<tr>
								<td
									class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
									>02-11-2021</td
								>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
									>Affliate commission</td
								>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">$40</td>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
									>Your earn first level referral commission, good job!</td
								>
							</tr>

							<!-- More people... -->
						</tbody>
					</table>
				</div>
				<div class="flex justify-end py-3">
					<nav class="relative z-0 inline-flex -space-x-px" aria-label="Pagination">
						<a
							href="#"
							class="relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
						>
							<svg
								class="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="sr-only">Previous</span>
							<span class="hidden sm:block">Previous</span>
						</a>
						<!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white text-gray-500 hover:bg-gray-50" -->
						<a
							href="#"
							aria-current="page"
							class="z-10 bg-black text-white relative inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium"
						>
							1
						</a>
						<a
							href="#"
							class="bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
						>
							2
						</a>
						<a
							href="#"
							class="bg-white text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 text-sm font-medium"
						>
							3
						</a>
						<a
							href="#"
							class="bg-white text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 text-sm font-medium"
						>
							4
						</a>
						<a
							href="#"
							class="bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
						>
							5
						</a>
						<a
							href="#"
							class="relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
						>
							<span class="sr-only">Next</span>
							<span class="hidden sm:block">Next</span>
							<svg
								class="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</nav>
				</div>
			</div>
		</div>
	</div>
</div>
