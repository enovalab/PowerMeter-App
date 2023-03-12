<script>
    import Overview from "../pages/Overview.svelte";
    import Switch from "./Switch.svelte";
    
    let isOn;

    const measurements = [
        {title: "Active Power", unit: "W"},
        {title: "Apparent Power", unit: "VA"},
        {title: "Reactive Power", unit: "var"},
        {title: "Voltage", unit: "V"},
        {title: "Current", unit: "A"},
        {title: "Power Factor", unit: ""}
    ];

    let power = {
        active: 0,
        apparent: 0,
        reactive: 0,
        voltage: 0,
        current: 0,
        powerFactor: 0
    };

</script>

<div class="card">
    <Switch width=200px height=100px borderRadius=20px bind:isOn/>
    <div class="table">
        {#each measurements as measurement, i}
            <div 
                style:color={isOn ? `hsl(${i / measurements.length * 360}, 100%, 80%)` : "var(--inactive-color)"}
            >
                <h2>{measurement.title}</h2>
                <span>{Object.values(power).at(i)} {measurement.unit}</span>
            </div>
        {/each}
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 20px;
    }

    .table {
        width: 100%;
        margin-top: 20px;
        display: grid;
        grid-template-columns: 100%;
        column-gap: 20px;
        row-gap: 20px;
    }

    
    .table > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        transition: color 1.5s;
    }
    
    h2 {
        margin: 0;
    }
    
    span {
        font-size: 30px;
    }


    @media (min-width: 700px) {
        .table {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>