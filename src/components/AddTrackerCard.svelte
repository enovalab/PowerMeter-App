<script>
    import ExpandableCard from "./ExpandableCard.svelte";
    import Form from "./Form.svelte";

    let isExpanded = false;
    let data = {}

    function handleSubmit() {
        console.log(data);
    }

</script>

<ExpandableCard showExpandIcon={false} bind:isExpanded={isExpanded}>
    <span slot="preview" class="material-icons-round">add</span>
    <div slot="content">
        <Form on:submit={handleSubmit} bind:data={data} fields={[
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
            <span class="material-icons-round">done</span>
        </Form>
    </div>
</ExpandableCard>

<style>
    span[slot="preview"] {
        font-size: 45px;
    }
</style>