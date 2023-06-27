<script>
    import { createEventDispatcher } from "svelte";
    import { fetchRestAPI, getDeviceURL } from "../modules/Helpers";
    import ExpandableCard from "./ExpandableCard.svelte";
    import Form from "./Form.svelte";

    let isExpanded = false;
    let data = {};

    const dispatchEvent = createEventDispatcher();

    function handleSubmit(event) {
        const fetchData = {
            duration_s: event.detail.duration * event.detail.durationMultiplier,
            title: event.detail.title,
            sampleCount: event.detail.sampleCount
        };
        fetchRestAPI(getDeviceURL() + "/api/config/trackers", "POST", fetchData)
        .then(() => {
            dispatchEvent("add");
        });
        isExpanded = false;
        data = {};
    }

</script>

<ExpandableCard showExpandIcon={false} bind:isExpanded={isExpanded}>
    <span slot="preview" class="material-icons-round">add</span>
    <svelte:fragment slot="content">
        <Form on:submit={handleSubmit} data={data} fields={[
            {
                key: "title",
                type: "text",
                label: "Title",
                required: true
            },
            {
                key: "sampleCount",
                type: "number",
                step: 1,
                label: "Number of Samples",
                required: true
            }
        ]}>
            <svelte:fragment slot="fields-after">
                <label for="">Duration *</label>
                <div>
                    {#key data}
                        <input type="number" name="duration" value="" step=1 required>  
                    {/key}
                    <select name="durationMultiplier">
                        <option value=60>Minutes</option>
                        <option value=3600>Hours</option>
                        <option value=86400>Days</option>
                        <option value=604800>Weeks</option>
                        <option value=31536000>Years</option>
                    </select>

                </div>
            </svelte:fragment>
            <span slot="submit" class="material-icons-round">done</span>
        </Form>
    </svelte:fragment>
</ExpandableCard>

<style>
    label, input, select, option {
        font-size: 22px;
    }
    
    div {
        display: flex;
        gap: 10px;
    }

    input {
        flex: 1;
    }

    select {
        height: 100%;
        flex: 1;
    }

    span[slot="preview"] {
        font-size: 45px;
    }
</style>