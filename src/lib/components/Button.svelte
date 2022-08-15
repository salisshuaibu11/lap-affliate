<script>
	export let className;
	export let href;
</script>

{#if href}
	<a {href} class={className}>
		<slot />
	</a>
{:else}
	<button type="button" class={className} aria-expanded="false"><slot /></button>
{/if}
