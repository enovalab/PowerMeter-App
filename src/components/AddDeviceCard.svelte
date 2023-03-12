<script>
    import { createEventDispatcher } from "svelte";

    const dispatchEvent = createEventDispatcher();

    let isExpanded = false;
    let formData = {
        name: "",
        ip: ""
    };

    let errors = {
        name: false,
        ip: false
    };


    function handleSubmit() {
        if(formData.name === "") {
            errors.name = true;
            setTimeout(() => {
                errors.name = false;
            }, 1000);
            return;
        }

        const ipPattern = new RegExp(
            /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
        );
        if(formData.ip === "" || !ipPattern.test(formData.ip)) {
            errors.ip = true;
            setTimeout(() => {
                errors.ip = false;
            }, 1000);
            return; 
        }
        if(dispatchEvent("add", formData)) {
            collapse();
        }
    }

    function expand() {
        isExpanded = true;
    }

    function collapse() {
        errors.name = false;
        errors.ip = false;
        isExpanded = false;
        formData.name = "";
        formData.ip = "";
    }
</script>

<svelte:window on:keydown={(event) => {
    switch(event.key) {
        case ' ':
            expand();
            break;
        case "Escape":
            collapse();
            break;
    }
}}/>
<form 
    class="card"
    class:expanded="{isExpanded}"
    on:click={expand}
    on:keydown={expand}
    on:submit|preventDefault={handleSubmit}
>
    {#if !isExpanded}
        <img src="../icons/add_white_24dp.svg" alt="">
    {:else}
        <div></div>
        <div class="grid">
            <label for="name">Name</label>
            <input
                class:error="{errors.name}"
                id="name"
                type="text"
                bind:value={formData["name"]}
            >
            <label for="ip">IP</label>
            <input 
                class:error="{errors.ip}"
                id="ip"
                type="text"
                bind:value={formData["ip"]}
            >
        </div>
        <div class="flex">
            <button type="submit">
                <img src="../icons/add_black_24dp.svg" alt="">
            </button>
            <button on:click|stopPropagation={collapse}>
                <img src="../icons/close_black_24dp.svg" alt="">
            </button>
        </div>
    {/if}
</form>

<style>
    * {
        font-family: "Dosis";
        color: var(--contrast-color);
        font-size: 22px;
    }

    form {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 75px;
        min-height: 75px;
        border: 2px solid var(--main-color);
        cursor: pointer;
        overflow: hidden;
        transition: all 1s;
    }
    
    .expanded {
        justify-content: space-between;
        border: 0;
        min-height: 150px;
        height: 150px;
    }
    
    .grid {
        width: 95%;
        display: grid;
        grid-template-columns: 75px calc(100% - 75px);
        row-gap: 10px;
    }

    .grid > * {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .flex {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
    
    input {
        background-color: var(--background-color);
        border: 0;
        border-radius: 5px;
    }
    
    .error {
        box-shadow: 0 0 20px var(--error-color);
        position: relative;
        animation: shake 0.1s 3;
    }

    @keyframes shake {
        0% {
            transform: translateX(0px);
        }
        100% {
            transform: translateX(5px);
        }
    }

    button {
        flex: 1;
        background-color: var(--main-color);
    }

    button:nth-of-type(2) {
        border-right: 1px solid var(--background-color-dark);
    }

    img {
        height: 80%;
    }
</style>