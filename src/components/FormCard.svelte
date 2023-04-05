<script>
    import Form from "./Form.svelte";
    import ExpandableCard from "./ExpandableCard.svelte";
    
    export let title;
    export let fields = [];
    export let url;
    let data = {};

    let id;
    let collapse;

    function handleSubmit(event) {
        console.log(data);
        collapse();
    }
</script>

<ExpandableCard bind:collapse={collapse}>
    <h2 slot="preview">{title}</h2>
    <div slot="content">
        <Form on:submit={handleSubmit} bind:id={id} bind:fields={fields} bind:data={data}>
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
