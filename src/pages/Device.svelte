<script>
    import Navbar from "../components/Navbar.svelte";
    import Power from "../tabs/Power.svelte";
    import Tracker from "../tabs/Tracker.svelte";
    import Config from "../tabs/Config.svelte";
    import Info from "../tabs/Info.svelte";

    let selectedTabIndex = 2;
</script>

<div id="page">
    <Navbar bind:selectedIndex={selectedTabIndex} tabs = {[
        {title: "Power", icon: "../icons/power_black_24dp.svg"},
        {title: "Tracker", icon: "../icons/query_stats_black_24dp.svg"},
        {title: "Config", icon: "../icons/construction_black_24dp.svg"},
        {title: "Info", icon: "../icons/info_outline_black_24dp.svg"}
    ]}>
        <main>
            {#if selectedTabIndex === 0}
                <Power/>
            {/if}

            {#if selectedTabIndex === 1}
                <Tracker/>
            {/if}

            {#if selectedTabIndex === 2}
                <Config/>
            {/if}

            {#if selectedTabIndex === 3}
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
        flex: 1;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;     
    }
</style>