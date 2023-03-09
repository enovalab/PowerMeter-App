<script>
    import { Chart } from "chart.js/auto";
    import { onMount } from "svelte";

    export let title;
    export let dataColor;
    export let data;
    export let secondsBetweenSamples;

    let labels = [];
    data.forEach((dataItem, index) => {
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

    $: averagePower = averageArray(data).toFixed(3);
    $: energy = ((averagePower * data.length * secondsBetweenSamples) / 3.6e+6).toFixed(3);
    
    const chartID = Math.random().toString(36).slice(2, 7);    
    let chart;
    
    onMount(() => {
        const conrtrastColor = getComputedStyle(document.body).getPropertyValue("--contrast-color");
        Chart.defaults.font.family = "Dosis";
        Chart.defaults.font.size = 18;
        chart = new Chart(chartID, {
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
    
    function addAlphaToRGB(rgb, alpha) {
        if (alpha < 0) {
            alpha = 0;
        } else if (alpha > 1) {
            alpha = 1;
        }
        let colorArray = rgb.match(/\d+/g);
        return `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${alpha})`;
    }

    function averageArray(array) {
        const sum = array.reduce((a, b) => a + b, 0);
        return sum / array.length || 0;
    }
</script>

<section class="card card-padding">
    <h2>{title}</h2>
    <div class="chart-container">
        <canvas id={chartID}/>
    </div>
    <div class="info">
        <span>Energy</span>
        <span class="right-aligned">{energy}</span>
        <span class="right-aligned">kWh</span>

        <span>Average Power</span>
        <span class="right-aligned">{averagePower}</span>
        <span class="right-aligned">W</span>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        scroll-snap-align: start;
    }

    .chart-container {
        height: 40vh;
        width: 90%;
    }

    h2 {
        margin: 0;
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
