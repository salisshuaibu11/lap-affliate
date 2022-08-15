<script>
	import Logo from './Logo.svelte';
	import NavLink from './NavLink.svelte';
	import Button from './Button.svelte';
</script>

<nav
	class="relative flex items-center justify-between sm:h-10 md:justify-center"
	aria-label="Global"
>
	<div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
		<div class="flex items-center justify-between w-full md:w-auto">
			<NavLink href="/">
				<span class="sr-only">LAP Affliates</span>
				<Logo />
			</NavLink>
			<div class="-mr-2 flex items-center md:hidden">
				<button
					type="button"
					class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<!-- Heroicon name: outline/menu -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>
	<div
		class="hidden md:absolute md:flex space-x-3 md:items-center md:justify-end md:inset-y-0 md:right-0"
	>
		<span class="inline-flex rounded-md shadow">
			<NavLink className="border-2 border-black py-2 px-4" href="/login">Login</NavLink>
		</span>
		<Button className="bg-black text-white py-2.5 px-6 rounded-md" href="/register">
			<span>Create your account</span>
		</Button>
	</div>
</nav>
