<script>
    export let color = "lightblue";
    export let title;
</script>

<header style="background-color: {color};">
    <h1>{title}</h1>
    <slot></slot>
</header>

<style>
    header {
        width: 100vw;
        height: 40px;
        display: flex;
        align-items: center;
    }

    h1 {
        margin: 0;
        padding-left: 20px;
        font-size: 1.5rem;
    }
</style>