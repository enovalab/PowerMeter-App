<script>
    import Navbar from "../components/Navbar.svelte";
    import Devices from "../tabs/Devices.svelte";
    import Tracker from "../tabs/Trackers.svelte";
    import Info from "../tabs/Info.svelte";
    
    let selectedTabIndex = 0;
</script>

<div class="page">
    <Navbar bind:selectedIndex={selectedTabIndex} tabs = {[
        {title: "Devices", icon: "view_list"},
        // {title: "Trackers", icon: "query_stats"},
        {title: "Info", icon: "info_outline"}
    ]}>
        <main>
            {#if selectedTabIndex === 0}
                <Devices/>
            {/if}

            <!-- {#if selectedTabIndex === 1}
                <Tracker/>
            {/if} -->

            {#if selectedTabIndex === 1}
                <Info/>
            {/if}
        </main>
    </Navbar>
</div>

<style>
    .page {
        width: 100%;
        height: 100%;
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