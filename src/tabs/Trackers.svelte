<script lang="ts">
    import TrackerChart from "../components/TrackerChart.svelte"
    import TrackerBackupCard from "../components/TrackerBackupCard.svelte";
    import ExpandableCard from "../components/ExpandableCard.svelte";
    import AddTrackerCard from "../components/AddTrackerCard.svelte";
    import { onDestroy } from "svelte";
    import { fetchRestAPI, getDeviceURL } from "../modules/Helpers";
    import type { Tracker, TrackerSet } from "../modules/Types";

    let trackerSet: TrackerSet = {};
    let trackers: [string, Tracker][] = [];
    
    onDestroy(() => {
        clearInterval(pollingIntervalId);
    });
    
    let pollAgain = true;
    const pollingIntervalId = setInterval(pollTrackers, 5000);
    function pollTrackers() {
        if(pollAgain) {
            fetchRestAPI(getDeviceURL() + "/api/trackers", "GET", undefined, 5000)
            .then(data => {
                trackerSet = data;
                trackers = Object.entries(trackerSet).sort(compareTrackers);
            })
            .catch(() => {})
            .finally(() => {
                pollAgain = true;
            });
        }
        pollAgain = false;
    }
    pollTrackers();

    function compareTrackers(a: [string, Tracker], b: [string, Tracker]) {
        if(a[1].duration_s < b[1].duration_s) {
            return -1;
        }
        else if(a[1].duration_s > b[1].duration_s) {
            return 1;
        }
        else {
            return 0;
        }
    }

    async function handleDelete(id: string, title: string) {
        if(confirm(`Are you sure you want to delete '${title}'`)) {
            trackerSet = await fetchRestAPI(getDeviceURL() + "/api/config/trackers/" + id, "DELETE");
        }
    }   
</script>

<AddTrackerCard on:add={pollTrackers}/>

{#each trackers as tracker}
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
        <svelte:fragment slot="content">
            {#key tracker}
                <TrackerChart
                    duration_s={tracker[1].duration_s}
                    sampleCount={tracker[1].sampleCount}
                    data={tracker[1].data}
                    dataColor="rgb(50, 100, 255)"
                />
            {/key}
        </svelte:fragment>
    </ExpandableCard>
{/each}

<!-- <TrackerBackupCard/> -->

<style>
    h2 {
        color: black;
    }
</style>