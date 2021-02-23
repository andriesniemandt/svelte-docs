<script>
    export let title;
    export let links;
</script>

<style>
    .set-header {
        text-transform: uppercase;
        font-weight: bold;
        padding: 0.3rem .6rem;
        border-radius: 5px;
        background: rgba(221, 221, 221, 0.4);
    }
    .navset-links > ul {
        list-style: none;
    }
    .navset-links > ul > li {
        margin-bottom: 10px;
    }
</style>

<section>
    <div class="set-header">{title}</div>
    <div class="navset-links">
        <ul>
            {#each links as link}
                <li><a href="{link.href}">{link.name}</a></li>
            {/each}
        </ul>
    </div>
</section>