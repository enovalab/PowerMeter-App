<script>
    import Form from "./Form.svelte";
    import ExpandableCard from "./ExpandableCard.svelte";
    import { fetchRestAPI } from "../modules/Helpers";
    import { onMount } from "svelte";
    
    export let title;
    export let url;
    export let nestingKey;
    export let fields = [];
    let data = {};
    let isExpanded = false;

    onMount(async () => {
        const response = await fetchRestAPI(url, "GET");
        data = response[nestingKey];
    });

    async function handleSubmit(event) {
        let fetchData = {};
        fetchData[nestingKey] = event.detail;
        const response = await fetchRestAPI(url, "PATCH", fetchData);
        data = response[nestingKey];
        isExpanded = false;
    }

</script>

<ExpandableCard bind:isExpanded={isExpanded}>
    <h2 slot="preview">{title}</h2>
    <svelte:fragment slot="content">
        <Form 
            on:submit={handleSubmit} 
            fields={fields} 
            data={data}
        >
            <span slot="submit" class="material-icons-round">done</span>
        </Form>
    </svelte:fragment>
</ExpandableCard>

<style>
    h2 {
        color: black;
    }
</style>
