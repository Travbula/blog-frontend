<script>
	import '../app.css';
	import NavBar from './lib/components/NavBar.svelte';
</script>

<div class="bg-slate-200 min-h-screen">
	<!--<div class="container border-l border-r border-slate-700 max-w-2xl mx-auto p-16 mt-16">-->

	<NavBar />
	<!--<div class="min-w-full bg-slate-700">-->
	<div class="max-w-2xl mx-auto">
		<!--<div class="container border rounded-lg border-slate-200 max-w-2xl mx-auto p-8 m-16 bg-white">-->
		<div class="grid cols-1 rounded-lg mt-8 bg-white py-8">
			<slot />
		</div>
	</div>
	<!--</div>-->
</div>
