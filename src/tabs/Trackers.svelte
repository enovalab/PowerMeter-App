<script lang="ts">
    import { onDestroy } from "svelte";
    import TrackerCard from "../components/TrackerCard.svelte"
    import { fetchRestAPI, getDeviceURL } from "../modules/Helpers";
    import type { Tracker, TrackerSet } from "../modules/Types";

    let trackers: TrackerSet = {};
    
    onDestroy(() => {
        clearInterval(pollingIntervalId);
    });
    
    let pollAgain = true;
    const pollingIntervalId = setInterval(() => {
        if(pollAgain) {
            fetchRestAPI(getDeviceURL() + "/api/trackers", "GET", undefined, 5000)
            .then(data => {
                trackers = data;
            })
            .catch(() => {})
            .finally(() => {
                pollAgain = true;
            });
        }
        pollAgain = false;
    }, 5000);
</script>

{#each Object.entries(trackers) as tracker}
    {#key tracker}
        <TrackerCard 
            title={tracker[1].title}
            duration_s={tracker[1].duration_s}
            sampleCount={tracker[1].sampleCount}
            data={tracker[1].data}
            dataColor="rgb(50, 100, 255)"
            id={tracker[0]}
        />
    {/key}
{/each}