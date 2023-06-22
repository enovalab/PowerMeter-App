<script lang="ts">
    import { addAlphaToRGB, averageArray, fetchRestAPI, getDeviceURL } from "../modules/Helpers";
    import { Chart } from "chart.js/auto";
    import { onMount } from "svelte";

    export let sampleCount: number;
    export let duration_s: number;
    export let data: number[] = [];
    export let dataColor: string;
    const secondsBetweenSamples: number = duration_s / sampleCount;

    let labels: string[] = [];
    data.forEach((_, index) => {
        const labelDate = new Date(Date.now() - index * secondsBetweenSamples * 1000);
        let labelString;
        if(secondsBetweenSamples < 24 * 3600) {
            labelString = labelDate.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
        }
        else if(secondsBetweenSamples < 30 * 24 * 3600) {
            labelString = labelDate.toLocaleDateString([], {day: "2-digit", month: "short"});
        }
        else if(secondsBetweenSamples <300 * 24 * 3600) {
            labelString = labelDate.toLocaleDateString([], {month: "short", year: "2-digit"});
        }
        else {
            labelString = labelDate.toLocaleDateString([], {year: "numeric"});
        }
        labels.unshift(labelString);
    });

    $: averagePower = averageArray(data);
    $: energy = ((averagePower * data.length * secondsBetweenSamples) / 3.6e+6);
    
    let canvas: HTMLCanvasElement;
    let chart: Chart;
    
    onMount(() => {
        const conrtrastColor = getComputedStyle(document.body).getPropertyValue("--contrast-color");
        Chart.defaults.font.family = "Dosis";
        Chart.defaults.font.size = 18;
        chart = new Chart(canvas, {
            type: "line",
            data: {
                labels,
                datasets: [{
                    label: "Active Power",
                    data,
                    borderWidth: 2,
                    fill: true,
                    borderColor: dataColor,
                    backgroundColor: addAlphaToRGB(dataColor, 0.2),
                    tension: 0.3,
                },
                ],
            },
            options: {
                animation: false,
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: {
                            color: addAlphaToRGB(conrtrastColor, 0.2),
                        },
                    },
                    y: {
                        grid: {
                            color: addAlphaToRGB(conrtrastColor, 0.2),
                        }
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });    
    });
</script>

<section class="card-padding">
    <div class="chart-container">
        <canvas bind:this={canvas}/>
    </div>
    <div class="info">
        <span>Energy</span>
        <span class="right-aligned">{energy.toFixed(3)}</span>
        <span class="right-aligned">kWh</span>

        <span>Average Power</span>
        <span class="right-aligned">{averagePower.toFixed(3)}</span>
        <span class="right-aligned">W</span>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .chart-container {
        height: 40vh;
        width: 90%;
    }

    .info {
        width: min(80%, 300px);
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        margin-top: 20px;
        font-size: 18px;
    }

    .right-aligned {
        text-align: right;
    }
</style>