<script>
    import Header from './Components/Header/Header.svelte'
    import Sidebar from './Components/Sidebar/Sidebar.svelte'
    import Main from './Components/Main/Main.svelte'
</script>

<style>
	.flex_section {
		display: flex;
	}
	.sidebar {
		flex-grow: 1;
	}
	.content {
		flex-grow: 9;
		padding: 1%;
	}
</style>

<main>
    <Header/>
    <section class="flex_section">
        <div class="sidebar">
            <Sidebar/>
        </div>
        <div class="content">
            <Main />
        </div>
    </section>
</main>