<script>
    import Form from "./Form.svelte";
    import ExpandableCard from "./ExpandableCard.svelte";
    import { createEventDispatcher } from "svelte";
    import { ipPattern } from "../modules/Helpers";
    
    let data = {};
    let isExpanded = false;

    const dispatchEvent = createEventDispatcher();

    function handleSubmit(event) {
        dispatchEvent("add", data)
        isExpanded = false;
        data = {};
    }
</script>

<ExpandableCard showExpandIcon={false} bind:isExpanded={isExpanded}>
    <span slot="preview" class="material-icons-round">add</span>
    <div slot="content">
        <Form on:submit={handleSubmit}  bind:data={data} fields={[
            {
                key: "name",
                type: "text",
                label: "Name",
                required: true
            },
            {
                key: "ip",
                type: "text",
                label: "IP",
                required: true,
                pattern: ipPattern.source
            }
        ]}>
            <span class="material-icons-round">done</span>
        </Form>
    </div>
</ExpandableCard>

<style>
    span[slot="preview"] {
        font-size: 45px;
    }
</style>
