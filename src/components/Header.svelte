<script>
    export let title;
</script>

<header>
    <h1>{title}</h1>
    <slot></slot>
</header>

<style>
    header {
        width: 100vw;
        height: 40px;
        display: flex;
        align-items: center;
        background-color: var(--main-color);
    }

    h1 {
        margin: 0;
        padding-left: 20px;
        font-size: 1.5rem;
    }
</style>