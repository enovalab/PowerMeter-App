<script>
    import Form from "./Form.svelte";
    import ExpandableCard from "./ExpandableCard.svelte";
    
    export let title;
    export let fields = [];
    let data = {};
    let isExpanded = false;

    function handleSubmit() {
        console.log(data);
        isExpanded = false;
    }
</script>

<ExpandableCard bind:isExpanded={isExpanded}>
    <h2 slot="preview">{title}</h2>
    <div slot="content">
        <Form on:submit={handleSubmit} bind:fields={fields} bind:data={data}>
            <img src="../icons/done_black_24dp.svg" alt="">
        </Form>
    </div>
</ExpandableCard>

<style>
    h2 {
        color: black;
    }

    img {
        height: 30px;
    }
</style>
