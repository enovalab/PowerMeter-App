<script lang="ts">
    import { onDestroy } from "svelte";
    import TrackerChart from "../components/TrackerChart.svelte"
    import { fetchRestAPI, getDeviceURL } from "../modules/Helpers";
    import type { TrackerSet } from "../modules/Types";
    import ExpandableCard from "../components/ExpandableCard.svelte";

    let trackers: TrackerSet = {};
    
    onDestroy(() => {
        clearInterval(pollingIntervalId);
    });
    
    let pollAgain = true;
    const pollingIntervalId = setInterval(pollTrackers, 5000);
    function pollTrackers() {
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
    }
    pollTrackers();

    function handleDelete(id: string) {
        console.log(id);
    }
</script>

{#each Object.entries(trackers) as tracker}
    <ExpandableCard>
        <h2 slot="preview">{tracker[1].title}</h2>
        <span on:click|stopPropagation={() => {handleDelete(tracker[0])}} class="material-icons-round" slot="icon">delete</span>
        <div slot="content">
            {#key tracker}
                <TrackerChart
                    duration_s={tracker[1].duration_s}
                    sampleCount={tracker[1].sampleCount}
                    data={tracker[1].data}
                    dataColor="rgb(50, 100, 255)"
                />
            {/key}
        </div>
    </ExpandableCard>
{/each}

<style>
    h2 {
        color: black;
    }
</style>