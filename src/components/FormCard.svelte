<script>
    import Form from "./Form.svelte";
    import ExpandableCard from "./ExpandableCard.svelte";
    
    export let title;
    export let fields = [];
    export let data = {};

    let id;
    let collapse;

    function handleSubmit() {
        collapse();
    }
</script>

<ExpandableCard bind:collapse={collapse}>
    <h2 slot="collapsed">{title}</h2>
    <div slot="expanded">
        <h2>{title}</h2>
        <Form on:submit on:submit={handleSubmit} bind:id={id} bind:fields={fields} bind:data={data}/>
    </div>
    <button slot="cancel">
        <img src="../icons/close_black_24dp.svg" alt="">
    </button>
    <button slot="action" type="submit" form={id}>
        <img src="../icons/done_black_24dp.svg" alt="">
    </button>
</ExpandableCard>

<style>
    button {
        width: 100%;
        height: 100%;
    }
    
    div[slot="expanded"] h2 {
        margin-bottom: 20px;
    }
</style>