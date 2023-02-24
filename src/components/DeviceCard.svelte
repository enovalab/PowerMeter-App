<script>
    import Switch from "./Switch.svelte";
    import { createEventDispatcher } from "svelte";

    export let name = "Power Meter";
    let ip = "192.168.178.81";
    export let online = true;
    export let power = 132.89;
    const dispatchEvent = createEventDispatcher();
</script>

<section class="card">
    <button on:click={() => {
        if(confirm(`Are you sure you want to delete '${name}'?`)) {
            dispatchEvent("delete", name);
        }
    }}>
        <img src="../icons/delete_black_24dp.svg" alt="delete">
    </button>
    <a class="flex-column-center-all" href={`http://${ip}`} class:online>
        <h2>{name}</h2>
        <span>{ip}</span>
        <span class:power-offline={!online} >{power} W</span>
    </a>  
    <Switch width=50px height=25px/>
</section>

<style>
    section {
        height: 150px;
        min-height: 150px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: clamp(20px, 5%, 60px);
        box-sizing: border-box;
    }
    
    .online {
        color: var(--contrast-color);
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 100%;
        color: rgb(86, 86, 86);
        text-decoration: none;
        cursor: pointer;
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

    h2 {
        margin: 0;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: clamp(30px, 10%, 60px);
        border: 0;
        background-color: var(--main-color);
        cursor: pointer;
    }

    button:active {
        background-color: var(--accent-color);
    }

    img {
        height: 25%;
    }

    .power-offline {
        visibility: hidden;
    }
</style>