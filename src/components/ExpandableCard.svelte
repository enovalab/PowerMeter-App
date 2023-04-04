<script>
    import Switch from "./Switch.svelte";

    let isExpanded = false;

    export function expand() {
        isExpanded = true;
    }

    export const collapse = () => {
        isExpanded = false;
    }
</script>

<section
    class="card"
    on:click={expand}
    on:keydown={expand}
>
    {#if isExpanded}
        <div class="content">
            <slot name="expanded"></slot>
        </div>
        <div class="controls">
            <div type="action">
                <slot name="action"></slot>
            </div>
            <div on:click|stopPropagation={collapse} on:keydown={collapse}>
                <slot name="cancel"></slot>
            </div>
        </div>
    {:else}
        <div class="content collapsed">
            <slot name="collapsed"></slot>
        </div>
    {/if}
</section>

<style>
    .card {
        min-height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    }
    
    .content {
        padding: 20px
    }
    
    .collapsed {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .controls {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    .controls div {
        flex: 1;
    }

    .controls div:nth-of-type(2) {
        border-right: 1px solid var(--background-color-dark);
    }
</style>