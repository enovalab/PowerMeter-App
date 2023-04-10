<script>
    import InfoCard from "../components/InfoCard.svelte";
    import { getDeviceIP, getDeviceURL } from "../modules/Helpers";
</script>

{#if getDeviceURL()}
    <InfoCard title="Device">
        <b>IP Address</b>
        <span>0.0.0.0</span>
        <b>MAC Address</b>
        <span>lskdjflsjfd</span>
        <b>WiFi Mode</b>
        <span>lskjdflsj</span>
        <b>Uptime</b>
        <span>2d 12h 39min</span>
        <b>Firmware Version</b>
        <span>0.0.0</span><b>Repository</b>
        <a href="https://github.com/enovalab/PowerMeter-App">enovalab/<wbr>PowerMeter-Firmware</a>
    </InfoCard>
{/if}
<InfoCard title="App">
    <b>App Version</b>
    <span>0.0.0</span>
    <b>Repository</b>
    <a href="https://github.com/enovalab/PowerMeter-App">enovalab/<wbr>PowerMeter-App</a>
</InfoCard>

<style>
    a {
        text-decoration: underline;
    }

    * {
        font-size: 15px;
    }

    @media (min-width: 500px) {
        * {
            font-size: 20px;
        }
    }
</style>
