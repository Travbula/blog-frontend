<script>
    import SvelteMarkdown from "svelte-markdown";
    import mixpanel from 'mixpanel-browser';

    export let data;

    mixpanel.init(`${process.env.MIXPANEL_TOKEN}`);
    mixpanel.track('Post', {'post_id': data.id});
</script>

<div class="px-4 sm:px-16 max-w-4xl">
    <div class="text-sm text-right text-slate-500">{data.attributes.title}</div>
    <!--https://github.com/pablo-abc/svelte-markdown/issues/35-->
    <div class="markdown-content">
        <SvelteMarkdown source={data.attributes.content} />
    </div>
</div>

<style lang="postcss">
    .markdown-content :global(p) {
        @apply my-4 text-slate-700 font-medium text-base max-w-xl;
    }

    .markdown-content :global(.sh) {
        @apply max-w-4xl;
    }

    .markdown-content :global(iframe) {
        @apply mb-8 mt-8;
    }

    .markdown-content :global(img) {
        @apply mb-8 mt-8 max-w-3xl;
    }

    .markdown-content :global(h1) {
        @apply text-slate-900 font-bold text-2xl;
    }

    .markdown-content :global(h2) {
        @apply text-slate-900 font-bold text-lg pt-4;
    }

    .markdown-content :global(code) {
        @apply whitespace-pre-wrap bg-slate-200;
    }

    .markdown-content :global(a) {
        @apply underline;
    }

    .markdown-content :global(ul) {
        @apply list-disc;
    }
</style>
