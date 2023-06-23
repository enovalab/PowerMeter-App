<script lang="ts">
    import TrackerChart from "../components/TrackerChart.svelte"
    import TrackerBackupCard from "../components/TrackerBackupCard.svelte";
    import ExpandableCard from "../components/ExpandableCard.svelte";
    import AddTrackerCard from "../components/AddTrackerCard.svelte";
    import { onDestroy } from "svelte";
    import { fetchRestAPI, getDeviceURL } from "../modules/Helpers";
    import type { TrackerSet } from "../modules/Types";

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

    async function handleDelete(id: string, title: string) {
        if(confirm(`Are you sure you want to delete '${title}'`)) {
            trackers = await fetchRestAPI(getDeviceURL() + "/api/config/trackers/" + id, "DELETE");
        }
    }   
</script>

<AddTrackerCard/>

{#each Object.entries(trackers) as tracker}
    <ExpandableCard>
        <h2 slot="preview">{tracker[1].title}</h2>
        <span 
            class="material-icons-round"
            slot="icon"
            on:click|stopPropagation={() => {handleDelete(tracker[0], tracker[1].title)}}
            on:keydown|stopPropagation={() => {handleDelete(tracker[0], tracker[1].title)}}
        >
            delete
        </span>
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

<!-- <TrackerBackupCard/> -->

<style>
    h2 {
        color: black;
    }
</style>