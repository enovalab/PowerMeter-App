<script>
    let isExpanded = false;
    let contentElement;

    $: {
        if(contentElement) {
            const height = contentElement.scrollHeight;
            contentElement.style.transition = "";

            if(!isExpanded) {
                contentElement.style.height = "0";
            }
            else {
                contentElement.style.height = height + "px";
            }
        }
    }

    function toggle() {
        isExpanded = !isExpanded;
    }
</script>

<section class="card" class:expanded={isExpanded}>
    <div class="head" on:click={toggle} on:keydown={toggle}>
        <div class="preview">
            <slot name="preview"></slot>
        </div>
        <img class:expanded={isExpanded} src="../icons/expand_circle_down_black_24dp.svg" alt="">
    </div>
    <div class="content" class:expanded={isExpanded} bind:this={contentElement}>
        <slot name="content"></slot>
    </div>
</section>

<style>
    .head {
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
    }


    img {
        grid-column-start: 3;
        height: 40px;
        margin: 5px;
        transform: rotate(90deg);
        transition: transform 0.7s;
    }
    
    img.expanded {
        transform: rotate(0deg);
    }
</style>