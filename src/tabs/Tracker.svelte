<script lang="ts">
    import type { ComponentProps } from "svelte";
    import { onMount } from "svelte";
    import TrackerCard from "../components/TrackerCard.svelte"
    import { fetchRestAPI, getDeviceURL } from "../modules/Helpers";

    onMount(async () => {
        const response = await fetchRestAPI(`${getDeviceURL()}/api/tracker`);
        console.log(response);
    });
</script>

<TrackerCard title="Last 60 Minutes" dataColor="rgb(0, 50, 200)" secondsBetweenSamples={60} apiEndpoints={
    [
        `http://192.168.178.153/api/tracker/last60min`
    ]
}/>
<TrackerCard title="Last 24 Hours" dataColor="rgb(168, 0, 255)" secondsBetweenSamples={3600} apiEndpoints={
    [
        `http://192.168.178.153/api/tracker/last24h`
    ]
}/>
<TrackerCard title="Last 7 Days" dataColor="rgb(0, 255, 150)" secondsBetweenSamples={86400} apiEndpoints={
    [
        `http://192.168.178.153/api/tracker/last7d`
    ]
}/>
<TrackerCard title="Last 30 Days" dataColor="rgb(255, 174, 0)" secondsBetweenSamples={86400} apiEndpoints={
    [
        `http://192.168.178.153/api/tracker/last30d`
    ]
}/>
<TrackerCard title="Last 12 Months" dataColor="rgb(72, 0, 255)" secondsBetweenSamples={2592000} apiEndpoints={
    [
        `http://192.168.178.153/api/tracker/last12m`
    ]
}/>
<TrackerCard title="Last 10 Years" dataColor="rgb(255, 0, 166)" secondsBetweenSamples={25920000} apiEndpoints={
    [
        `http://192.168.178.153/api/tracker/last10a`
    ]
}/>