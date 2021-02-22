<script>
    import {link} from 'svelte-spa-router'
</script>

<style>
    section {
        padding: 10% 0;
        border-right: 1px solid #14274e;
        height: 100vh;
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
            Intro
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
            <li><a href="/guide" use:link>Getting Started</a></li>
        </ul>
    </div>
</section>