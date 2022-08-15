<script>
	import Button from '../../lib/components/Button.svelte';
	import NavLink from '../../lib/components/NavLink.svelte';
</script>

<div class="dashboard__header pb-4 flex justify-between items-center">
	<div>
		<h4 class="text-3xl font-bold mb-2">Wallet</h4>
		<p class="text-gray-500 font-medium">Ready to make some money today? Let's Do it!</p>
	</div>
	<div class="font-bold">
		<Button className="border border-black rounded-md py-2 px-4">Generate E-Pin</Button>
		<Button className="bg-teal-600 text-white rounded-md py-2 px-4">Request Payout</Button>
	</div>
</div>

<ul class="my-4 grid grid-cols-1 lg:grid-cols-3 lg:gap-y-0 gap-y-4 gap-x-4">
	<li
		class="flex items-center px-6 text-black rounded-md h-32 bg-gradient-to-r from-cyan-50 to-orange-100"
	>
		<div>
			<h4 class="font-medium">Available Balance</h4>
			<span class="text-xl font-extrabold">$742.5</span>
		</div>
	</li>
	<li class="flex items-center px-6 text-black rounded-md h-32 bg-gray-100">
		<div>
			<h4 class="font-medium">Pending Payout</h4>
			<span class="text-xl font-extrabold">0</span>
		</div>
	</li>
	<li class="flex items-center px-6 text-black rounded-md h-32 bg-gray-100">
		<div>
			<h4 class="font-medium">Affliate Commission</h4>
			<span class="text-xl font-extrabold">$323,343</span>
		</div>
	</li>
</ul>

<ul class="mt-10 mb-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-y-0 gap-y-4 gap-x-4">
	<li aria-labelledby="recent-hires-title">
		<div class="overflow-hidden">
			<div>
				<div class="flex justify-between items-center">
					<h2 class="font-extrabold text-lg" id="recent-hires-title">Payout History</h2>
					<div class="flex space-x-2">
						<NavLink
							href="#"
							className="w-full flex justify-center items-center text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
						>
							View all
						</NavLink>
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
					</div>
				</div>

				<div class="rounded-lg border p-2 bg-white shadow-lg flow-root mt-6">
					<ul class="-my-5 divide-y divide-gray-200">
						<li class="py-4">
							<div class="flex items-center space-x-4">
								<div class="flex-shrink-0 rounded-full p-2 bg-red-100 text-red-500">
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
											d="M5 10l7-7m0 0l7 7m-7-7v18"
										/></svg
									>
								</div>
								<div class="flex-1 min-w-0">
									<p class="text-md font-bold truncate">Payout $1000</p>
									<p class="text-sm truncate">20-01-2022 5:54pm</p>
								</div>
								<div>
									<a
										href="#"
										class="inline-flex items-center shadow-sm px-3 py-0.5 text-sm leading-5 font-medium rounded-full text-amber-700 bg-amber-100 hover:bg-gray-50"
									>
										Pending
									</a>
								</div>
							</div>
						</li>
						<li class="py-4">
							<div class="flex items-center space-x-4">
								<div class="flex-shrink-0 rounded-full p-2 bg-red-100 text-red-500">
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
											d="M5 10l7-7m0 0l7 7m-7-7v18"
										/></svg
									>
								</div>
								<div class="flex-1 min-w-0">
									<p class="text-md font-bold truncate">Payout $1000</p>
									<p class="text-sm truncate">20-01-2022 5:54pm</p>
								</div>
								<div>
									<a
										href="#"
										class="inline-flex items-center shadow-sm px-3 py-0.5 text-sm leading-5 font-medium rounded-full text-green-700 bg-green-100 hover:bg-gray-50"
									>
										Approved
									</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</li>

	<li aria-labelledby="recent-hires-title">
		<div class="overflow-hidden">
			<div>
				<div class="flex justify-between items-center">
					<h2 class="font-extrabold text-lg" id="recent-hires-title">E-pin History</h2>
					<div class="flex space-x-2">
						<NavLink
							href="#"
							className="w-full flex justify-center items-center text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
						>
							View all
						</NavLink>
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
					</div>
				</div>

				<div class="rounded-lg border p-2 bg-white shadow-lg flow-root mt-6">
					<ul class="-my-5 divide-y divide-gray-200">
						<li class="py-4">
							<div class="flex items-center space-x-4">
								<div class="flex items-baseline space-x-2 flex-1 min-w-0">
									<div>
										<p class="text-md font-bold truncate">Payout $1000</p>
										<p class="text-sm truncate">20-01-2022 5:54pm</p>
									</div>
									<div>
										<a
											href="#"
											class="inline-flex items-center shadow-sm px-3 py-0.5 text-sm leading-5 font-medium rounded-full text-green-700 bg-green-100 hover:bg-gray-50"
										>
											Active
										</a>
									</div>
								</div>
								<div>
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
											d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
										/></svg
									>
								</div>
							</div>
						</li>
						<li class="pb-4 pt-2">
							<div class="flex items-center space-x-4">
								<div class="flex items-baseline space-x-2 flex-1 min-w-0">
									<div>
										<p class="text-md font-bold truncate">Payout $1000</p>
										<p class="text-sm truncate">20-01-2022 5:54pm</p>
									</div>
									<div>
										<a
											href="#"
											class="inline-flex items-center shadow-sm px-3 py-0.5 text-sm leading-5 font-medium rounded-full text-green-700 bg-green-100 hover:bg-gray-50"
										>
											Active
										</a>
									</div>
								</div>
								<div>
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
											d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
										/></svg
									>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</li>
</ul>
