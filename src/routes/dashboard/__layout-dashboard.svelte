<script>
	import Logo from '$lib/components/Logo.svelte';
	import Button from '$lib/components/Button.svelte';

	import NavLink from '$lib/components/NavLink.svelte';

	export let title = 'Dashboard';
</script>

<div>
	<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	<!-- <div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-gray-600 bg-opacity-75" />

		<div class="fixed inset-0 flex z-40">
			<div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
				<div class="absolute top-0 right-0 -mr-12 pt-2">
					<button
						type="button"
						class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					>
						<span class="sr-only">Close sidebar</span>

						<svg
							class="h-6 w-6 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div class="flex-shrink-0 flex items-center px-4">
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
						alt="Workflow"
					/>
				</div>
				<div class="mt-5 flex-1 h-0 overflow-y-auto">
					<nav class="px-2 space-y-1">
						<a
							href="#"
							class="bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
						>
							<svg
								class="text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
							Dashboard
						</a>
					</nav>
				</div>
			</div>
		</div>
	</div> -->

	<!-- Static sidebar for desktop -->
	<div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div class="flex-1 flex flex-col pt-20 min-h-0 border border-r-2">
			<div class="flex-1 flex flex-col overflow-y-auto">
				<nav
					class="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
					aria-label="Sidebar"
				>
					<div class="px-2 space-y-2">
						<!-- Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:text-white hover:bg-cyan-600" -->
						<NavLink
							href="/dashboard"
							className="space-x-2 group flex items-center px-2 py-2 text-base font-medium rounded-md"
						>
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
									d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
								/></svg
							>
							<span>Dashboard</span>
						</NavLink>

						<NavLink
							href="/dashboard/classroom"
							className="space-x-2 group flex items-center px-2 py-2 text-base font-medium rounded-md"
						>
							<img src="/navIcons/classroom.svg" alt="Classroom icon" />
							<span>Classroom</span>
						</NavLink>

						<NavLink
							href="/dashboard/market"
							className="space-x-2 group flex items-center px-2 py-2 text-base font-medium rounded-md"
						>
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
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/></svg
							>
							<span>Marketplace</span>
						</NavLink>

						<NavLink
							href="/dashboard/wallet"
							className="space-x-2 group flex items-center px-2 py-2 text-base font-medium rounded-md"
						>
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
									d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
								/></svg
							>
							<span>Wallet</span>
						</NavLink>

						<NavLink
							href="/dashboard/transactions"
							className="space-x-2 group flex items-center px-2 py-2 text-base font-medium rounded-md"
						>
							<img width="20" src="/navIcons/transaction.svg" alt="Transaction icon" />
							<span>Transactions</span>
						</NavLink>

						<NavLink
							href="/dashboard/leaderboard"
							className="space-x-2 group flex items-center px-2 py-2 text-base font-medium rounded-md"
						>
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
									d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
								/></svg
							>
							<span>Leaderboard</span>
						</NavLink>

						<NavLink
							href="/dashboard/bonus"
							className="space-x-2 group flex items-center px-2 py-2 text-base font-medium rounded-md"
						>
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
									d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
								/></svg
							>
							<span>Bonuses</span>
						</NavLink>

						<NavLink
							href="/dashboard/referrals"
							className="space-x-2 group flex items-center px-2 py-2 text-base font-medium rounded-md"
						>
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
									d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
								/></svg
							>
							<span>Referrals</span>
						</NavLink>
					</div>
					<div class="mt-6 pt-6">
						<div class="px-2 space-y-1">
							<NavLink
								href="/dashboard/support"
								className="space-x-2 group flex items-center px-2 py-2 text-base font-medium rounded-md"
							>
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
										d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
									/></svg
								>
								<span>Support</span>
							</NavLink>

							<NavLink
								href="#"
								className="space-x-2 group flex items-center px-2 py-2 text-base font-medium rounded-md"
							>
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
										d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
									/></svg
								>
								<span>Logout</span>
							</NavLink>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>

	<div
		class="sticky px-8 top-0 z-10 flex-shrink-0 flex items-center justify-between h-14 bg-white shadow"
	>
		<Logo />
		<div class="flex space-x-2 items-center">
			<Button className="border-2 border-black py-1 px-3">
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
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/></svg
				>
			</Button>
			<Button className="border-2 border-black py-1 px-3">
				<svg
					class="w-6 h-6 inline-block"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/></svg
				>
				<span>18</span>
			</Button>
			<span class="font-medium text-lg">Sam Havard</span>
			<img
				class="inline-block h-10 w-10 rounded-full"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			/>
		</div>
	</div>

	<div class="md:pl-64 flex flex-col">
		<main class="flex-1">
			<div class="py-6">
				<!-- <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
					<h1 class="text-2xl font-semibold text-gray-900">{title}</h1>
				</div> -->
				<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
					<slot />
				</div>
			</div>
		</main>
		<!-- <div class="flex-1 z-10 h-18 text-white bg-black shadow">Footer</div> -->
	</div>
</div>
