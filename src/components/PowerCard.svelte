<script lang="ts">
    import { onDestroy } from "svelte";
    import { fetchRestAPI, getDeviceIP, roundToStep } from "../modules/Helpers";
    
    export let measurements = [
        {
            title: "Active Power",
            unit: "W",
            key: "activePower_W",
            step: 0.1
        },
        {
            title: "Apparent Power",
            unit: "VA", 
            key: "apparentPower_VA",
            step: 0.1
        },
        {
            title: "Reactive Power",
            unit: "var",
            key: "reactivePower_var",
            step: 0.1
        },
        {
            title: "Voltage",
            unit: "V",
            key: "voltage_Vrms",
            step: 0.1
        },
        {
            title: "Current",
            unit: "A",
            key: "current_Arms",
            step: 0.001
        },
        {
            title: "Power Factor",
            unit: "",
            key: "powerFactor",
            step: 0.001
        }
    ];
    
    export let isOn: boolean;

    let power = {
        activePower_W: 0,
        apparentPower_VA: 0,
        reactivePower_var: 0,
        voltage_Vrms: 0,
        current_Arms: 0,
        powerFactor: 0
    };

    onDestroy(() => {
        clearInterval(pollingIntervalId);
    });
    
    let pollAgain = true;
    const pollingIntervalId = setInterval(() => {
        if(pollAgain) {
            fetchRestAPI(`http://${getDeviceIP()}/api/power`, "GET", undefined, 5000)
            .then(data => {
                power = data;
                pollAgain = true;
            });
        }
        pollAgain = false;
    }, 1);
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