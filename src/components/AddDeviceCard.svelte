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

<ExpandableCard showIcon={false} bind:isExpanded={isExpanded}>
    <img slot="preview" class="preview" src="../icons/add_black_24dp.svg" alt="">
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
            <img src="../icons/done_black_24dp.svg" alt="">
        </Form>
    </div>
</ExpandableCard>

<style>
    .preview {
        height: 50px;
    }

    img {
        height: 30px;
    }
</style>
