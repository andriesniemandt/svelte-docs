<script>
    import NavSet from '../NavSet/NavSet.svelte'

    const introLinks = [
        {
            name: "Introduction",
            href: "/#/"
        },
        {
            name: "Another link",
            href: "/#/"
        },
        {
            name: "And another",
            href: "/#/"
        }
    ]

    const usageLinks = [
        {
            name: "Getting Started",
            href: "/#/usage/getting-started"
        }
    ]
</script>

<style>
    aside {
        flex-shrink: 0;
        width: 312px;
        padding: 24px;
        position: sticky;
        top: 0;
        box-sizing: border-box;
        border-right: 1px solid #dddddd;
        overflow-y: auto;
        height: 100vh;
    }

    .logo-wrapper {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 24px;
        color: #f05454;
    }
</style>

<aside>
    <div class="logo-wrapper">
        CUSTOM LOGO
    </div>
    <div class="sidebar">
        <NavSet
                title="Introduction"
                links={introLinks}
        />
        <NavSet
                title="Usage Guide"
                links={usageLinks}
        />
    </div>
</aside>