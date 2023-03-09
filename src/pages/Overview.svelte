<script>
    import Switch from "../components/Switch.svelte";
    import Navbar from "../components/Navbar.svelte";
    import DeviceCard from "../components/DeviceCard.svelte";
    import AddDeviceCard from "../components/AddDeviceCard.svelte";
    import TrackerChart from "../components/TrackerChart.svelte";
    
    let title = "Foo";
    let selectedTabIndex = 0;
</script>

<div id="page">
    <Navbar bind:selectedIndex={selectedTabIndex} tabs = {[
        {title: "Overview", icon: "../icons/view_list_black_24dp.svg"},
        {title: "Tracker", icon: "../icons/query_stats_black_24dp.svg"},
        {title: "Configuration", icon: "../icons/construction_black_24dp.svg"},
        {title: "About", icon: "../icons/help_outline_black_24dp.svg"}
    ]}>
        <main>
            {#if selectedTabIndex === 0}
                <AddDeviceCard/>
                <DeviceCard isOnline={false}/>
                <DeviceCard name="hallo"/>
                <DeviceCard isOnline={false}/>
            {/if}

            {#if selectedTabIndex === 1}
                <TrackerChart title="Last 60 Minutes" dataColor="rgb(0, 50, 200)" secondsBetweenSamples=60 data={[22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 12, 90, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 12, 90]}/>
                <TrackerChart title="Last 24 Hours" dataColor="rgb(168, 0, 255)" secondsBetweenSamples=3600 data={[23, 20, 69, 39, 84, 32, 9, 2, 20, 69, 39, 23, 4, 32, 9, 22, 84, 32, 9, 2, 21, 3, 90, 21]}/>
                <TrackerChart title="Last 7 Days" dataColor="rgb(0, 255, 150)" secondsBetweenSamples=86400 data={[23, 20, 69, 89, 21, 5, 9]}/>
                <TrackerChart title="Last 30 Days" dataColor="rgb(255, 174, 0)" secondsBetweenSamples=86400 data={[22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 12, 90]}/>
                <TrackerChart title="Last 12 Months" dataColor="rgb(72, 0, 255)" secondsBetweenSamples=2592000 data={[23, 20, 69, 89, 21, 5, 9, 13, 19, 20, 48, 30]}/>
                <TrackerChart title="Last 10 Years" dataColor="rgb(255, 0, 166)" secondsBetweenSamples=25920000 data={[23, 20, 69, 89, 21, 5, 9, 13, 19, 20]}/>
            {/if}

            {#if selectedTabIndex === 2}
                <div class="card">fsfds</div>
            {/if}

            {#if selectedTabIndex === 3}
                <div style:height="95%" class="card"></div>
            {/if}
        </main>
    </Navbar>
</div>

<style>
    #page {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    main {
        width: 100%;
        height: 100%;
        flex: 1;
        overflow-y: scroll;  
        scroll-snap-type: y mandatory;
        scroll-padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;     
    }
</style>