<script>
    import Router from 'svelte-spa-router'
    import routes from './routes'
    import Sidebar from './Components/Sidebar/Sidebar.svelte'
    import Header from './Components/Header/Header.svelte'
</script>

<style>
    main {
        display: flex;
        margin: 0 auto;
        max-width: 1440px;
        min-height: 100vh;
    }
    .content {
        padding: 2% 5%;
        display: block;
        width: 100%;
    }
</style>

<main>
    <Sidebar/>
    <div class="content">
        <Header/>
        <Router {routes}/>
    </div>
</main>