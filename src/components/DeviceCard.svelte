<script>
    import Switch from "./Switch.svelte";
    import { createEventDispatcher } from "svelte";

    export let name = "Power Meter";
    let ip = "192.168.178.81";
    export let online = true;
    export let power = 132.89;
    const dispatchEvent = createEventDispatcher();
</script>

<div class="wrapper">
    <section class:online>
        <button on:click={() => {
            if(confirm(`Are you sure you want to delete '${name}'?`)) {
                dispatchEvent("delete", name);
            }
        }}>
            <img src="../icons/delete_black_24dp.svg" alt="delete">
        </button>
        <a href={`http://${ip}`}>
            <h2>{name}</h2>
            <span>{ip}</span>
            <span class:power-offline={!online} >{power} W</span>
        </a>  
        <Switch width=50px height=25px/>
    </section>
</div>

<style>
    .wrapper {
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section {
        width: clamp(100px, 85%, 1000px);
        height: 80%;
        border-radius: 20px;
        color: rgb(124, 124, 124);
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: clamp(20px, 5%, 60px);
        background-color: var(--background-color-dark);
    }
    
    .online {
        color: var(--contrast-color);
    }

    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: var(--contrast-color);
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