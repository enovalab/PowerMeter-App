<script>
    import Switch from "./Switch.svelte";
    import { createEventDispatcher } from "svelte";

    export let name = "Power Meter";
    export let ip = "0.0.0.0";
    export let isSingleton = false;
    let isOnline = true;
    let power = 132.89;

    const url = new URL("/Device", window.location.href);
    url.searchParams.set("ip", ip);
    console.log(url.href);

    const dispatchEvent = createEventDispatcher();

    function handleDeleteClick() {
        if(confirm(`Are you sure you want to delete '${name}'?`)) {
            dispatchEvent("delete", name);
        }
    }

    function handleDeviceClick() {
    }
</script>

<section class="card">
    <button class:singleton={isSingleton} on:click={handleDeleteClick}>
        <img src="../icons/delete_black_24dp.svg" alt="delete">
    </button>
    <a class="flex-column-center-all" href={url.href} class:offline="{!isOnline}" on:click={handleDeviceClick}>
        <h2>{name}</h2>
        <span>{ip}</span>
        <!-- <span class:power-offline={!isOnline}>{power} W</span> -->
    </a>  
    <!-- <Switch width=50px height=25px/> -->
</section>

<style>
    .card {
        height: 100px;
        min-height: 100px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: clamp(20px, 5%, 60px);
    }
    
    a {
        color: var(--contrast-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 100%;
        text-decoration: none;
        cursor: pointer;
    }

    .offline {
        color: var(--inactive-color);
    }
    
    a > * {
        text-align: center;
    }

    @media (min-width: 700px) {
        a {
            flex-direction: row;
            justify-content: space-between;
            width: 65%;
            font-size: 1.2rem;
        }

        h2 {
            font-size: 1.7rem;
            flex: 2;
        }

        span {
            flex: 1;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: clamp(30px, 10%, 60px);
        background-color: var(--main-color);
    }

    button.singleton {
        visibility: hidden;
    }

    button:active {
        background-color: var(--accent-color);
    }

    img {
        height: 25%;
    }

    /* .power-offline {
        visibility: hidden;
    } */
</style>