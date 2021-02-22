<script>
    import {link} from 'svelte-spa-router'
</script>

<style>
    section {
        position: fixed;
        left: 0;
        top: 65px;
        padding: 1%;
        border-right: 1px solid #14274e;
        height: calc(100vh - 65px);
        width: 15%;
        background: #f1f6f9;
    }
    section > div > ul {
        list-style: none;
        font-size: 0.9rem;
        margin-left: 5%;
    }
    .link-group-header {
        margin-left: 10%;
        margin-top: 10%;
        text-transform: uppercase;
        font-weight: 500;
    }
</style>

<section>
    <div class="link-group">
        <div class="link-group-header">
            About
        </div>
        <ul>
            <li><a href="/" use:link>Introduction</a></li>
        </ul>
    </div>
    <div class="link-group">
        <div class="link-group-header">
            Usage
        </div>
        <ul>
            <li><a href="/usage/getting-started" use:link>Getting Started</a></li>
        </ul>
    </div>
</section>