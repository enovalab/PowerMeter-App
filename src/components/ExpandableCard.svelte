<script>
    import Switch from "./Switch.svelte";

    let isExpanded = false;

    function expand() {
        isExpanded = true;
    }

    function collapse() {
        isExpanded = false;
    }
</script>

<div
    class="card"
    on:click={expand}
    on:keydown={expand}
>
    {#if isExpanded}
        <div class="flex">
            <button type="submit">
                <slot name="submit"></slot>
            </button>
            <button on:click|stopPropagation={collapse}>
                <slot name="cancel"></slot>
            </button>
        </div>
        <div class="content expanded">
            <slot name="expanded"></slot>
        </div>
    {:else}
        <div class="content">
            <slot name="collapsed"></slot>
        </div>
    {/if}
</div>

<style>
    .card {
        min-height: 50px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        overflow: hidden;
    }
    
    .content {
        padding: 20px
    }
    
    .flex {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    button {
        flex: 1;
        background-color: var(--main-color);
    }

    button:nth-of-type(2) {
        border-right: 1px solid var(--background-color-dark);
    }
</style>