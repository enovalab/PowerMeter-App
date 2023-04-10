<script>
    import { fetchRestAPI, roundToStep } from "../modules/Helpers";
    import { onMount } from "svelte";
    
    export let measurements = [
        {
            title: "Active Power",
            unit: "W",
            key: "active",
            step: 0.1
        },
        {
            title: "Apparent Power",
            unit: "VA", 
            key: "apparent",
            step: 0.1
        },
        {
            title: "Reactive Power",
            unit: "var",
            key: "reactive",
            step: 0.1
        },
        {
            title: "Voltage",
            unit: "V",
            key: "voltage",
            step: 0.1
        },
        {
            title: "Current",
            unit: "A",
            key: "current",
            step: 0.001
        },
        {
            title: "Power Factor",
            unit: "",
            key: "powerFactor",
            step: 0.001
        }
    ];
    
    export let isOn;

    export let power = {
        active: 0,
        apparent: 0,
        reactive: 0,
        voltage: 0,
        current: 0,
        powerFactor: 0
    };

</script>

<div class="card card-padding">
    <div class="grid">
        {#each measurements as measurement, i}
            <div 
                style:--color={isOn ? `hsl(${i / measurements.length * 360}, 100%, 80%)` : "var(--inactive-color)"}
                style:box-shadow={isOn ? "0 0 5px 3px var(--color)" : "0 0 0 3px var(--color)"}
            >
                <h2>{measurement.title}</h2>
                <span>{roundToStep(power[measurement.key], measurement.step)} {measurement.unit}</span>
            </div>
        {/each}
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .grid {
        width: 100%;
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