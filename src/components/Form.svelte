<script>
    import Field from "./Field.svelte";
    import uuid from "@smakss/uuid";

    export let id = uuid();
    export let fields = [];
    export let data = {};
</script>

<form id={id} name={id} on:submit|preventDefault>
    <div>
        {#each fields as field}
            <Field
                key={field.key}
                label={field.label}
                type={field.type}
                required={field.required}
                pattern={field.pattern}
                step={field.step}
                bind:value={data[field.key]}
            />
        {/each}
    </div>
    <button type="submit" form={id}>
        <slot></slot>
    </button>
</form>

<style>
    div {
        padding: 20px;
        display: grid;
        grid-row-gap: 10px;
        grid-template-columns: 1fr;
    }

    button {
        width: 100%;
        height:40px;
    }

    @media (min-width: 700px) {
        div {
            grid-template-columns: 300px calc(100% - 300px);
        }
    }
</style>