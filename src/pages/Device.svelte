<script>
    import Navbar from "../components/Navbar.svelte";
    import Power from "../tabs/Power.svelte";
    import Config from "../tabs/Config.svelte";
    import Info from "../tabs/Info.svelte";
    import { getDeviceURL } from "../modules/Helpers";
    import Trackers from "../tabs/Trackers.svelte";

    let selectedTabIndex = 0;
</script>

<div class="page">
    <Navbar bind:selectedIndex={selectedTabIndex} tabs = {[
        {title: "Power", icon: "power"},
        {title: "Trackers", icon: "query_stats"},
        {title: "Config", icon: "construction"},
        {title: "Info", icon: "info_outline"}
    ]}>
        <div slot="header">
            <a href={getDeviceURL() + "/update"}>
                <span class="material-icons-round">update</span>
            </a>
            <a href="/">
                <span class="material-icons-round">view_list</span>
            </a>
        </div>
        <main>
            {#if selectedTabIndex === 0}
                <Power/>
            {/if}

            {#if selectedTabIndex === 1}
                <Trackers/>
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

    a {
        display: flex;
        align-items: center;
    }

    .material-icons-round {
        margin-left: 20px;
    }
</style>