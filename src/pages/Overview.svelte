<script>
    import Switch from "../components/Switch.svelte";
    import Header from "../components/Header.svelte";
    import Navbar from "../components/Navbar.svelte";
    import DeviceCard from "../components/DeviceCard.svelte";

</script>
<div class="page">
    <Header title="Hello" color="var(--main-color)"></Header>
    <main>
        <DeviceCard power=100 online={false}/>
        <DeviceCard power=213131231/>
        <DeviceCard power=100/>
        <DeviceCard power=100/>
        <DeviceCard power=100/>
        <DeviceCard power=100/>
        <DeviceCard power=100/>
    </main>
    <Navbar backgroundColor="var(--main-color)" backgroundColorSelected="var(--accent-color" icons={{
        power: "../icons/power_black_24dp.svg",    
        tracker: "../icons/query_stats_black_24dp.svg",    
        config: "../icons/construction_black_24dp.svg",
        about: "../icons/help_outline_black_24dp.svg",
    }}/>
</div>

<style>
    .page {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
    }

    main {
        width: 100vw;
        background-color: var(--background-color);
        /* flex: 1; */
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
</style>