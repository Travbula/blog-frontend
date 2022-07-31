<script>
    export let data;
    export let meta;
</script>

{#each data as post}
    <div class="flex container border-b-4 border-slate-500 pt-2 mb-8 items-center">
        <div class="basis-1/4 mr-4">
            <img src={`http://localhost:1337${post.attributes.cover_image.data[0].attributes.formats.thumbnail.url}`} alt={`${post.attributes.cover_image.data[0].attributes.alternativeText}`}>
            <!--<img src={`/media${post.attributes.cover_image.data[0].attributes.formats.thumbnail.url}`} alt={`${post.attributes.cover_image.data[0].attributes.alternativeText}`}>-->
        </div>

        <div class="basis-3/4">
            <div class="text-2xl font-bold text-slate-900">{post.attributes.title}</div>
            <div class="text-base font-medium text-slate-700">{post.attributes.description}</div>
            <div class="flex text-sm font-medium text-slate-500 justify-between">
                <div>{new Date(post.attributes.createdAt).toDateString()}</div>
                <!--<div><a href={`/post/${post.id}`} class="hover:text-slate-900">Read more</a></div>-->
            </div>
        </div>
    </div>
{/each}