<script>
    let isExpanded = true;

    function expand() {
        if(!isExpanded) {
            isExpanded = true;
        }
    }

    function collapse() {
        isExpanded = false;
    }
</script>

<form class="card" 
    class:expanded="{isExpanded}"
    class:collapsed="{!isExpanded}" 
    on:click|self={() => isExpanded = true} 
    on:keydown|self={() => isExpanded = true}
>
    {#if !isExpanded}
        <img src="../icons/add_white_24dp.svg" alt="">
    {:else}
        <label for="name">Name</label>
        <input id="name" type="text">
        <label for="ip">IP</label>
        <input id="ip" type="url">
        <button type="submit" on:click={() => isExpanded = false}>
            <img src="../icons/close_black_24dp.svg" alt="">
        </button>
        <button type="submit" on:click={() => isExpanded = false}>
            <img src="../icons/add_black_24dp.svg" alt="">
        </button>
    {/if}
</form>

<style>
    * {
        font-family: "Dosis";
        color: var(--contrast-color);
        font-size: 22px;
    }

    form {
        display: grid;
        grid-template-columns: 100px calc(100% - 100px);
        row-gap: 10px;
        border: 2px dotted var(--main-color);
        height: 75px;
        min-height: 75px;
        cursor: pointer;
        transition: min-height 1s;
        overflow: hidden;
        
    }
    
    .expanded {
        min-height: 200px;
        border: 0;
    }

    .collapsed {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    img {
        height: 80%;
    }

    input {
        margin-top: 10px;
        margin-right: 10px;
        padding: 5px;
        border: 0;
        border-radius: 10px;
        background-color: var(--background-color);
    }

    label {
        min-width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        background-color: var(--main-color);
    }
</style>
