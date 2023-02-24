<script>
    import { Chart, Line } from "svelte-chartjs";
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
    } from "chart.js";
    import { bind } from "svelte/internal";

    ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

    const data = {
        labels: ["foo", "bar", "boo", "buz"],
        datasets: [
            {
                label: "Active Power",
                data: [5, 3, 7, 9, 2],
                borderWidth: 1,
                borderColor: "blue",
                backgroundColor: "blue",
                tension: 0.3
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: {
                grid: {
                    color: "white"
                }
            },
            y: {
                grid: {
                    color: "white"
                }
            }
        }
    };
</script>

<section class="card">
    <div class="chart">
        <Line {data} {options}/>
    </div>
    <div class="navigator">
        <img
            src="../icons/arrow_back_ios_white_24dp.svg"
            alt="Previous Chart"
        />
        <div class="info">
            <h2>Last 24 Hours</h2>
            <span>1002 kWh</span>
        </div>
        <img src="../icons/arrow_forward_ios_white_24dp.svg" alt="Next Chart" />
    </div>
</section>

<style>
    div {
        width: 95%;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        
    }

    .chart {
        display: flex;
        justify-content: center;
    }

    .navigator {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5%;
        margin-bottom: 5%;
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
