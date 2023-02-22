<script>
    import { createEventDispatcher } from "svelte";

    export let tabs = []; 
    export let selected = 0;
    export let title = "";
    $: (title = tabs[selected].title)

    const dispatchEvent = createEventDispatcher();
    
    function handleMouseWheel(event) {
        if(event.wheelDelta > 0) {
            nextTab();
        }
        else {
            preceedingTab();
        }
        dispatchEvent("select", {selected, title});
    }

    function nextTab() {
        if(selected >= tabs.length - 1) {
            selected = 0;
        }
        else {
            selected++;
        }
    }

    function preceedingTab() {
        if(selected <= 0) {
            selected = tabs.length - 1;
        }
        else {
            selected--;
        }
    }
</script>

<header class="bar">
    <h1>{title}</h1>
</header>
<slot></slot>
<nav class="bar" on:mousewheel={handleMouseWheel}
>
    {#each tabs as tab, i}
        <button
            on:click={() => {
                selected = i;
                dispatchEvent("select", {selected, title});
            }}
            class:selected={i === selected}
            style:width="calc(100vw / {tabs.length})"
        >
            <img src={tab.icon} alt={tab.title}>
        </button>
    {/each}
</nav>

<style>
    nav {
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
    
    .selected {
        background-color: var(--accent-color);
    }
</style>