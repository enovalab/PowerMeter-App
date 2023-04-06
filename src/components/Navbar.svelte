<script>
    import { createEventDispatcher } from "svelte";

    export let tabs = []; 
    export let selectedIndex = 0;
    export let title = "";

    $: title = tabs[selectedIndex].title;

    const dispatchEvent = createEventDispatcher();
    
    function handleMouseWheel(event) {
        if(event.wheelDelta > 0) {
            nextTab();
        }
        else {
            preceedTab();
        }
        dispatchEvent("select", {selected: selectedIndex, title});
    }

    function nextTab() {
        if(selectedIndex >= tabs.length - 1) {
            selectedIndex = 0;
        }
        else {
            selectedIndex++;
        }
    }

    function preceedTab() {
        if(selectedIndex <= 0) {
            selectedIndex = tabs.length - 1;
        }
        else {
            selectedIndex--;
        }
    }
</script>

<header class="bar">
    <h1>{title}</h1>
    <slot name="header"></slot>
</header>
<slot></slot>
<nav class="bar" on:mousewheel={handleMouseWheel}>
    {#each tabs as tab, i}
        <button
            on:click={() => {
                selectedIndex = i;
                dispatchEvent("select", {selectedIndex, title});
            }}
            class:selected={i === selectedIndex}
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
        align-items: end;
        background-color: var(--main-color);
        --blur-radius: 20px;
    }

    button {
        background-color: var(--main-color);
        padding: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media(hover: hover) and (pointer: fine) {
        button:hover {
            box-shadow: 0 0 var(--blur-radius) var(--main-color);
        }
    }

    header {
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 20px;
        /* padding-top: 5px;
        padding-bottom: 5px; */
        width: 100vw;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        color: black;
        font-size: 25px;
    }

    img {
        height: 30px;
    }
    
    .selected {
        background-color: var(--accent-color);
        box-shadow: 0 0 var(--blur-radius) var(--accent-color);
    }
</style>