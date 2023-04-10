<script>
    import ExpandableCard from "./ExpandableCard.svelte";

    export let title;
</script>

<ExpandableCard>
    <div slot="preview">
        <h2>{title}</h2>
    </div>
    <div slot="content" class="card-padding">
        <slot></slot>
    </div>
</ExpandableCard>

<style>
    div[slot="content"] {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 20px;
        grid-column-gap: 20px;
        align-items: center;
    }

    h2 {
        color: black;
    }
</style>