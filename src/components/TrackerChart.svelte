<script>
    import { Chart } from "chart.js";
    import { onMount } from "svelte";
    
    const data = {
        labels: ["foo", "bar", "boo", "buz"],
        datasets: [
            {
                label: "Active Power",
                data: [5, 3, 7, 9],
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
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    const chart = new Chart(document.getElementById("myChart"), {
            type: "line",
            data: data,
            options: options
        });
</script>

<section class="card">
    <div class="chart">
        <canvas id="myChart" width=400 height=400></canvas>
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
