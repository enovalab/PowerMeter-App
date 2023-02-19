<script>
    export let colorOn = "lightblue";
    export let colorOff = "grey";
    export let width = 50;
    export let height = 25;
    export let borderRadius = 5;
    export let on = false;
</script>

<button style="
    width: {width};
    height: {height};
    --color-on: {colorOn};
    --color-off: {colorOff};
    --border-radius: {borderRadius};"
    on:click={() => on = !on} on:click 
    class:on
>   
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        background-color: var(--color-off);
        display: block;
        position: relative;
        border-radius: calc(var(--border-radius) * 1px);
    }

    button::after {
        content: "";
        position: absolute;
        top: 10%;
        left: 5%;
        width: 45%;
        height: 80%;
        background-color: white;
        border-radius: calc(var(--border-radius) * 0.8px);
        transition: 0.5s;
    }

    .on {
        background: var(--color-on);
    }

    .on::after {
        left: 95%;
        transform: translateX(-100%);
    }

    button:active::after {
        width: 70%;
    }
</style>
