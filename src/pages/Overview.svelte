<script>
    import Switch from "../components/Switch.svelte";
    import Header from "../components/Header.svelte";
    import Navbar from "../components/Navbar.svelte";
    import DeviceCard from "../components/DeviceCard.svelte";

</script>
<div class="page">
    <Header title="Hello" color="var(--main-color)"></Header>
    <main>
        <DeviceCard power=100 online={false} mainColor="var(--main-color)" accentColor="var(--accent-color)" backgroundColor="var(--background-color-dark)"/>
        <DeviceCard power=2131312312 mainColor="var(--main-color)" accentColor="var(--accent-color)" backgroundColor="var(--background-color-dark)"/>
        <DeviceCard power=100 mainColor="var(--main-color)" accentColor="var(--accent-color)" backgroundColor="var(--background-color-dark)"/>
        <DeviceCard power=100 mainColor="var(--main-color)" accentColor="var(--accent-color)" backgroundColor="var(--background-color-dark)"/>

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
        background-color: var(--background-color);
        flex: 1;
        overflow-y: scroll;
    }
</style>