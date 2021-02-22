<script>
    let src='static/placeholder-logo.png'
</script>

<style>
    .header_section {
        position: fixed;
        z-index: 10;
        width: 100%;
        top: 0;
        left: 0;
        box-sizing: border-box;
        color: white;
        background: #14274e;
        display: flex;
        justify-content: space-between;
        padding: 1%;
        align-items: center;
    }
    .logo {
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 2px;
    }
    .header_section > div > ul {
        list-style: none;
    }
    .social-links {
        display: flex;
        justify-content: space-between;
    }
    .social-links > div {
        margin-left: 15px;
    }
</style>

<section class="header_section">
    <div class="logo">
        CUSTOM LOGO
    </div>
    <div class="social-links">
        <div>Github</div>
        <div>LinkedIn</div>
        <div>Docs</div>
    </div>
</section>