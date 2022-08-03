<script>
    import "../app.css";
    import NavBar from "./lib/components/NavBar.svelte";
</script>

<div class="bg-slate-200 min-h-screen">
    <NavBar />
    <div class="max-w-2xl mx-auto">
        <div class="grid cols-1 rounded-lg mt-8 bg-white py-8">
            <slot />
        </div>
    </div>
</div>
