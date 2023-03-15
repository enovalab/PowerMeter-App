<script>
    import Navbar from "../components/Navbar.svelte";
    import Devices from "../tabs/Devices.svelte";
    import Tracker from "../tabs/Tracker.svelte";
    import Info from "../tabs/Info.svelte";

    
    let title = "Foo";
    let selectedTabIndex = 0;
</script>

<div id="page">
    <Navbar bind:selectedIndex={selectedTabIndex} tabs = {[
        {title: "Devices", icon: "../icons/view_list_black_24dp.svg"},
        {title: "Tracker", icon: "../icons/query_stats_black_24dp.svg"},
        {title: "Info", icon: "../icons/info_outline_black_24dp.svg"}
    ]}>
        <main>
            {#if selectedTabIndex === 0}
                <Devices/>
            {/if}

            {#if selectedTabIndex === 1}
                <Tracker/>
            {/if}

            {#if selectedTabIndex === 2}
                <Info/>
            {/if}
        </main>
    </Navbar>
</div>

<style>
    #page {
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
        scroll-snap-type: y mandatory;
        scroll-padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;     
    }
</style>