<script lang="ts">
    import Switch from "./Switch.svelte";
    import { createEventDispatcher, onDestroy } from "svelte";
    import { fetchRestAPI, roundToStep } from "../modules/Helpers";

    export let name = "Power Meter";
    export let ip = "0.0.0.0";
    export let isSingleton = false;
    let isOnline = false;
    let power = 0;
    
    onDestroy(() => {
        clearInterval(pollingIntervalId);
    });
    
    let pollAgain = true;
    const pollingIntervalId = setInterval(pollPower, 100);

    function pollPower() {
        if(pollAgain) {
            fetchRestAPI(`http://${ip}/api/power`, "GET", undefined, 5000)
            .then(data => {
                isOnline = true;
                power = data.activePower_W;
            })
            .catch(() => {
                isOnline = false;
            })
            .finally(() => {
                pollAgain = true;
            });
        }
        pollAgain = false;
    }
    pollPower();

    const url = new URL("/Device", window.location.href);
    url.searchParams.set("ip", ip);

    const dispatchEvent = createEventDispatcher();
    function handleDeleteClick() {
        if(confirm(`Are you sure you want to delete '${name}'?`)) {
            dispatchEvent("delete", name);
        }
    }

</script>

<section class="card">
    <button class:singleton={isSingleton} on:click={handleDeleteClick}>
        <span class="material-icons-round">delete</span>
    </button>
    <a class="flex-column-center-all" href={isOnline ? url.href : null} class:offline="{!isOnline}" >
        <h2>{name}</h2>
        <span>{ip}</span>
        {#if isOnline}
            <span>{power.toFixed(1)} W</span>
        {/if}
    </a>
    <div>
        <Switch url={`http://${ip}/api/relay`} width=50px height=25px/>
    </div>
</section>

<style>
    .card {
        min-height: 120px;
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
</style>