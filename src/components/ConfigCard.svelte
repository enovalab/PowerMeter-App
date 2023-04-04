<script>
    import ConfigCard from "../components/ConfigCard.svelte";
    import Form from "../components/Form.svelte";
    import ExpandableCard from "../components/ExpandableCard.svelte";
    
    export let title;
    export let fields;
    export let data;
    let id;
</script>

<ExpandableCard>
    <h2 slot="collapsed">{title}</h2>
    <div slot="expanded">
        <h2>{title}</h2>
        <Form bind:fields={fields} bind:data={data}/>
    </div>
    <button slot="cancel">
        <img src="../icons/close_black_24dp.svg" alt="">
    </button>
    <button slot="submit" type="submit" form={id}>
        <img src="../icons/done_black_24dp.svg" alt="">
    </button>
</ExpandableCard>

<style>
    button {
        width: 100%;
        height: 100%;
    }
</style>