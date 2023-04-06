<script>
    import Navbar from "../components/Navbar.svelte";
    import Power from "../tabs/Power.svelte";
    import Tracker from "../tabs/Tracker.svelte";
    import Config from "../tabs/Config.svelte";
    import Info from "../tabs/Info.svelte";
    import { onMount } from "svelte";
    import { getDeviceUrl } from "../modules/Helpers";

    let selectedTabIndex = 0;    
    
    function handleUpdateClick() {
        
    }
</script>

<div class="page">
    <Navbar bind:selectedIndex={selectedTabIndex} tabs = {[
        {title: "Power", icon: "../icons/power_black_24dp.svg"},
        {title: "Tracker", icon: "../icons/query_stats_black_24dp.svg"},
        {title: "Config", icon: "../icons/construction_black_24dp.svg"},
        {title: "Info", icon: "../icons/info_outline_black_24dp.svg"}
    ]}>
        <div slot="header">
            <a href={getDeviceUrl() + "/update"}>
                <img src="../icons/upgrade_black_24dp.svg" alt="">
            </a>
            <a href="/">
                <img src="../icons/home_black_24dp.svg" alt="">
            </a>
        </div>
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
    .page {
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
    
    div[slot="header"] {
        display: flex;
        align-items: center;
    }

    img {
        display: flex;
        height: 30px;
        margin-right: 30px;
    }
</style>