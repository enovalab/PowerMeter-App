<script>
    export let width = 50;
    export let height = 25;
    export let borderRadius = "5px";
    export let isOn = false;
</script>

<button 
    on:click={() => isOn = !isOn} on:click 
    style:height style:width style:--border-radius={borderRadius}
    class:on="{isOn}"
>   
</button>

<style>
    button {
        background-color: grey;
        display: block;
        position: relative;
        border-radius: var(--border-radius);
    }

    button::after {
        content: "";
        position: absolute;
        top: 10%;
        left: 5%;
        width: 45%;
        height: 80%;
        background-color: white;
        border-radius: calc(var(--border-radius) * 0.8);
        transition: 0.5s;
    }

    .on {
        background: var(--main-color);
    }

    .on::after {
        left: 95%;
        transform: translateX(-100%);
    }

    button:active::after {
        width: 70%;
    }
</style>
