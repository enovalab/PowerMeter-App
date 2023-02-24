<script>
    import Switch from "../components/Switch.svelte";
    import Navbar from "../components/Navbar.svelte";
    import DeviceCard from "../components/DeviceCard.svelte";
    import AddDeviceForm from "../components/AddDeviceForm.svelte";
    import TrackerView from "../components/TrackerView.svelte";
    
    let title = "Foo";
    let selectedTabIndex = 1;
</script>

<div id="page">
    <Navbar bind:selected={selectedTabIndex} tabs = {[
        {title: "Overview", icon: "../icons/view_list_black_24dp.svg"},
        {title: "Tracker", icon: "../icons/query_stats_black_24dp.svg"},
        {title: "Configuration", icon: "../icons/construction_black_24dp.svg"},
        {title: "About", icon: "../icons/help_outline_black_24dp.svg"}
    ]}>
        <main>
            {#if selectedTabIndex === 0}
                <DeviceCard online={false}/>
                <DeviceCard/>
                <DeviceCard/>
                <DeviceCard/>
                <DeviceCard/>
                <DeviceCard online={false}/>
            {/if}

            {#if selectedTabIndex === 1}
                <TrackerView/>
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
        display: flex;
        flex-direction: column;
        align-items: center;     
    }
</style>