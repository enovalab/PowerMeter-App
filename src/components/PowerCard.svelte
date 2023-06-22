<script lang="ts">
    import { onDestroy } from "svelte";
    import { fetchRestAPI, getDeviceURL } from "../modules/Helpers";
    import type { ACPower, Measurement } from "../modules/Types";
    
    export let measurements: Measurement[] = [
        {
            title: "Active Power",
            unit: "W",
            key: "activePower_W",
            decimals: 1
        },
        {
            title: "Apparent Power",
            unit: "VA", 
            key: "apparentPower_VA",
            decimals: 1
        },
        {
            title: "Reactive Power",
            unit: "var",
            key: "reactivePower_var",
            decimals: 1
        },
        {
            title: "Voltage",
            unit: "V",
            key: "voltageRMS_V",
            decimals: 0.1
        },
        {
            title: "Current",
            unit: "A",
            key: "currentRMS_A",
            decimals: 2
        },
        {
            title: "Power Factor",
            unit: "",
            key: "powerFactor",
            decimals: 3
        }
    ];
    
    export let isOn: boolean;

    let power: ACPower = {
        activePower_W: 0,
        reactivePower_var: 0,
        apparentPower_VA: 0,
        voltageRMS_V: 0,
        currentRMS_A: 0,
        powerFactor: 0,
    };

    onDestroy(() => {
        clearInterval(pollingIntervalId);
    });
    
    let pollAgain = true;
    const pollingIntervalId = setInterval(pollPower, 100);

    function pollPower() {
        if(pollAgain) {
            fetchRestAPI(getDeviceURL() + "/api/power", "GET", undefined, 5000)
            .then(data => {
                power = data;
            })
            .catch(() => {})
            .finally(() => {
                pollAgain = true;
            });
        }
        pollAgain = false;
    }
</script>

<div class="card card-padding">
    <div class="grid">
        {#each measurements as measurement, i}
            <div 
                style:--color={isOn ? `hsl(${i / measurements.length * 360}, 100%, 80%)` : "var(--inactive-color)"}
                style:box-shadow={isOn ? "0 0 5px 3px var(--color)" : "0 0 0 3px var(--color)"}
            >
                <h2>{measurement.title}</h2>
                <span>{power[measurement.key].toFixed(measurement.decimals)} {measurement.unit}</span>
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