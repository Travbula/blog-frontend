<script>
    import SvelteMarkdown from "svelte-markdown";
    export let data;
    export let meta;
</script>

<div class="px-4 sm:px-16">
    <div class="text-sm text-right text-slate-500">{data.attributes.title}</div>
    <!--https://github.com/pablo-abc/svelte-markdown/issues/35-->
    <div class="markdown-content">
        <SvelteMarkdown source={data.attributes.content} />
    </div>
</div>

<style lang="postcss">
    .markdown-content :global(p) {
        @apply my-4 text-slate-700 font-medium text-base;
    }

    .markdown-content :global(iframe) {
        @apply mb-8 mt-8;
    }

    .markdown-content :global(img) {
        @apply mb-8 mt-8;
    }

    .markdown-content :global(h1) {
        @apply text-slate-900 font-bold text-2xl;
    }

    .markdown-content :global(h2) {
        @apply text-slate-900 font-bold text-lg;
    }
</style>
