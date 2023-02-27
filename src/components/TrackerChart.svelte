<script>
    import { Chart } from "chart.js/auto";
    import { onMount } from "svelte";

    let chart;

    Chart.defaults.font.family = "Dosis";
    Chart.defaults.font.size = 18;

    onMount(() => {
        chart = new Chart("chart", {
            type: "line",
            data: {
                labels: ["foo", "bar", "boo", "buz"],
                datasets: [
                    {
                        label: "Active Power",
                        data: [5, 3, 7, 9],
                        borderWidth: 1,
                        fill: true,
                        borderColor: "rgb(255, 0, 0)",
                        backgroundColor: "rgba(255, 0, 0, 0.1)",
                        tension: 0.3,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    x: {
                        grid: {
                            color: "white",
                        },
                    },
                    y: {
                        grid: {
                            color: "white",
                        },
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

<section class="card">
    <div>
        <canvas id="chart" />
    </div>
    <div class="navigator">
        <img src="../icons/arrow_back_ios_white_24dp.svg" alt="Previous Chart"/>
        <div class="info">
            <h2>Last 24 Hours</h2>
            <span>1002 kWh</span>
        </div>
        <img src="../icons/arrow_forward_ios_white_24dp.svg" alt="Next Chart"/>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-top: 2%;
        padding-bottom: 2%;
    }

    div > #chart {
        display: flex;
        justify-content: center;
    }

    .navigator {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2%;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        margin: 0;
    }

    img {
        height: 40px;
        cursor: pointer;
    }
</style>
