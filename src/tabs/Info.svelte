<script>
    import { onMount } from "svelte";
    import InfoCard from "../components/InfoCard.svelte";
    import { getDeviceIP, getDeviceURL, formatDuration, fetchRestAPI } from "../modules/Helpers";

    let info = {
        firmware: "",
        mac: "",
        uptime_ms: 0,
        filesystem: {
            total_B: 0,
            used_B: 0
        },
        heap: {
            total_B: 0,
            used_B: 0
        }
        
    };
    let wifi = {
        mode: ""
    };

    onMount(async () => {
        info = await fetchRestAPI(getDeviceURL() + "/api/info", "GET");
        wifi = await fetchRestAPI(getDeviceURL() + "/api/config/wifi", "GET");
    });
</script>

{#if getDeviceURL()}
    <InfoCard title="Device">
        <b>IP Address</b>
        <span>{getDeviceIP()}</span>
        <b>MAC Address</b>
        <span>{info.mac.toString(16)}</span>
        <b>WiFi Mode</b>
        <span>{wifi.mode}</span>
        <b>Uptime</b>
        <span>{formatDuration(info.uptime_ms)}</span>
        <b>Firmware Version</b>
        <span>{info.firmware}</span><b>Repository</b>
        <a href="https://github.com/enovalab/PowerMeter-App">enovalab/<wbr>PowerMeter-Firmware</a>
        <b>Filesystem</b>
        <span>{(info.filesystem.used_B / info.filesystem.total_B * 100).toFixed(0)}% used</span>        
        <b>Heap Memory</b>
        <span>{(info.heap.used_B / info.heap.total_B * 100).toFixed(0)}% used</span>        
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
