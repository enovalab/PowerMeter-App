<script>
    export let showExpandIcon = true;
    export let isExpanded = false;

    let contentElement;

    $: if(contentElement) {
        const height = contentElement.scrollHeight;
        contentElement.style.transition = "";

        if(!isExpanded) {
            contentElement.style.height = "0";
        }
        else {
            contentElement.style.height = height + "px";
        }
    }

    function toggle() {
        isExpanded = !isExpanded;
    }
</script>

<section class="card" class:expanded={isExpanded}>
    <div class="head" on:click={toggle} on:keydown={toggle}>
        {#if showExpandIcon}
            <span class="material-icons-round" class:expanded={isExpanded}>expand_circle_down</span>
        {/if}
        <div class="preview">
            <slot name="preview"></slot>
        </div>
        <slot name="icon"></slot>
    </div>
    <div class="content" class:expanded={isExpanded} bind:this={contentElement}>
        <slot name="content"></slot>
    </div>
</section>

<style>
    .head {
        padding: 5px;
        min-height: 40px;
        background-color: var(--main-color);
        cursor: pointer;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 50px 1fr 50px;
    }

    .content {
        transition: height 0.7s;
    }

    .preview {
        align-self: center;
        grid-column-start: 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .material-icons-round {
        font-size: 35px;
        transform: rotate(-90deg);
        transition: transform 0.7s;
    }
    
    .material-icons-round.expanded {
        transform: rotate(0deg);
    }
</style>