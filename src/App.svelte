<script>
    import Router from 'svelte-spa-router'
    import routes from './routes'
    import Header from './Components/Header/Header.svelte'
    import Sidebar from './Components/Sidebar/Sidebar.svelte'
</script>

<style>
	.flex_section {
		display: flex;
        margin-top: 75px;
	}
	.sidebar {
		flex-basis: 20%;
	}
	.content {
		padding: 1% 5%;
        width: 100%;
	}
</style>

<main>
    <Header/>
    <section class="flex_section">
        <div class="sidebar">
            <Sidebar/>
        </div>
        <div class="content">
            <Router {routes}/>
        </div>
    </section>
</main>