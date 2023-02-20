<script>
    import { createEventDispatcher } from "svelte";

    export let icons = {};
    const iconsKeys = Object.keys(icons);
    export let selected = iconsKeys[0];
    const dispatchEvent = createEventDispatcher();

    function handleMouseWheel(event) {
        let selectedIndex = iconsKeys.findIndex((icon) => icon === selected);
        if(event.wheelDelta > 0) {
            selectedIndex++;
        }
        else {
            selectedIndex--;
        }
        selected = iconsKeys.at(selectedIndex);
        dispatchEvent("select", selected);
    }
</script>

<nav on:mousewheel={handleMouseWheel}
>
    {#each Object.entries(icons) as [iconKey, iconValue]}
        <button
            on:click={() => {
                selected = iconKey;
                dispatchEvent("select", selected);
            }}
            class:selected={iconKey === selected}
            style="width: calc(100vw / {iconsKeys.length});"
        >
            <img src={iconValue} alt={iconKey}>
        </button>
    {/each}
</nav>

<style>
    nav {
        background-color: var(--main-color);
        width: 100vw;
        height: 40px;
        display: flex;
        align-items: center;
    }

    button {
        background-color: var(--main-color);
        border: 0;
        padding: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .selected {
        background-color: var(--accent-color);
    }
</style>