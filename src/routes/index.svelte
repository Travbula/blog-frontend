<script>
    export let data;
    export let meta;
</script>

<div class="grid grid-cols-1">
    {#each data as post}
        <a href={`/post/${post.id}`}>
            <div
                class="grid grid-cols-4 container border-slate-200 px-16
                {post === data[0] ? '' : 'pt-8'}
                {post === data[data.length - 1] ? '' : 'pb-8 border-b-4'}"
            >
                <div class="mr-4 col-span-1 justify-self-center self-center">
                    <img
                        class="h-24"
                        src={`${post.attributes.cover.data.attributes.formats.thumbnail.url}`}
                        alt={`${post.attributes.cover.data.attributes.alternativeText}`}
                    />
                    <!--<img src={`/media${post.attributes.cover_image.data[0].attributes.formats.thumbnail.url}`} alt={`${post.attributes.cover_image.data[0].attributes.alternativeText}`}>-->
                </div>

                <div class="col-span-3 self-center">
                    <div class="text-2xl font-bold text-slate-900">
                        {post.attributes.title}
                    </div>
                    <div class="text-base font-medium text-slate-700">
                        {post.attributes.description}
                    </div>
                    <div
                        class="text-sm font-medium text-slate-500 justify-between"
                    >
                        <div>
                            {new Date(post.attributes.createdAt).toDateString()}
                        </div>
                        <!--<div><a href={`/post/${post.id}`} class="hover:text-slate-900">Read more</a></div>-->
                    </div>
                </div>
            </div>
        </a>
    {/each}
</div>
