<script>
    import Switch from "../components/Switch.svelte";
    import Navbar from "../components/Navbar.svelte";
    import DeviceCard from "../components/DeviceCard.svelte";
    import AddDeviceForm from "../components/AddDeviceForm.svelte";
    
    let title = "Foo";
</script>

<div id="page">
    <Navbar tabs = {[
        {title: "Overview", icon: "../icons/view_list_black_24dp.svg"},
        {title: "Tracker", icon: "../icons/query_stats_black_24dp.svg"},
        {title: "Configuration", icon: "../icons/construction_black_24dp.svg"},
        {title: "About", icon: "../icons/help_outline_black_24dp.svg"}
    ]}>
        <main>
            <DeviceCard online={false}/>
            <DeviceCard/>
            <DeviceCard/>
            <DeviceCard/>
            <DeviceCard/>
            <DeviceCard online={false}/>
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