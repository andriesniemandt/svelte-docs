<script>
    import marked from 'marked'
    export let page;
    let source = marked("## Markdown");
</script>

<section>
    The page name is {page}
    <div>{@html source}</div>
</section>