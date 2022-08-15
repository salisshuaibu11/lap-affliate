<script>
	import { page } from '$app/stores';
	export let href;
	export let className;

	const { pathname } = $page.url;

	$: active = pathname === href;
</script>

<a {href} class={`${className} ${active ? 'bg-black text-white' : 'text-gray-600'}`}>
	<slot />
</a>
