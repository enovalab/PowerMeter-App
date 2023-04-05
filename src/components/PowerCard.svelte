<script>
    import Switch from "./Switch.svelte";
    import { callRestAPI } from "../modules/Helpers";
    import { onMount } from "svelte";
    
    let isOn = false;

    const measurements = [
        {title: "Active Power", unit: "W"},
        {title: "Apparent Power", unit: "VA"},
        {title: "Reactive Power", unit: "var"},
        {title: "Voltage", unit: "V"},
        {title: "Current", unit: "A"},
        {title: "Power Factor", unit: ""}
    ];

    export let border = false;

    export let power = {
        active: 0,
        apparent: 0,
        reactive: 0,
        voltage: 0,
        current: 0,
        powerFactor: 0
    };

    const baseURL = "http://192.168.178.153";

    onMount(async () => {
        const response = await callRestAPI(`${baseURL}/api/config/relay`);
        isOn = response.state;
    });

    async function handleSwitchClick() {
        const response =  await callRestAPI(`${baseURL}/api/config/relay`, "PATCH", {state: isOn});
        isOn = response.state;
    }
</script>

<div class="card" class:border>
    <div class="grid">
        {#each measurements as measurement, i}
            <div 
                style:--color={isOn ? `hsl(${i / measurements.length * 360}, 100%, 80%)` : "var(--inactive-color)"}
                style:box-shadow={isOn ? "0 0 5px 3px var(--color)" : "0 0 0 3px var(--color)"}
            >
                <h2>{measurement.title}</h2>
                <span>{Object.values(power).at(i)} {measurement.unit}</span>
            </div>
        {/each}
    </div>
    <div class="switch">
        <Switch width=200px height=100px borderRadius=20px bind:isOn on:click={handleSwitchClick}/>
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .grid {
        width: 100%;
        margin-bottom: 50px;
        display: grid;
        grid-template-columns: 100%;
        column-gap: 20px;
        row-gap: 20px;
    }

    
    .grid > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        transition: color 1.5s, box-shadow 1.5s;
        border-radius: 10px;
        color: var(--color);
    }
    
    h2 {
        margin: 0;
    }
    
    span {
        font-size: 30px;
    }

    @media (min-width: 700px) {
        .grid {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>