<script>
    import Field from "./Field.svelte";

    export let fields = [];
    export let data = {};
</script>

<form on:submit|preventDefault>
    <div class="card-padding">
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
    <button type="submit">
        <slot></slot>
    </button>
</form>

<style>
    div {
        display: grid;
        grid-row-gap: 10px;
        grid-template-columns: 1fr;
    }

    @media (min-width: 700px) {
        div {
            grid-template-columns: 300px calc(100% - 300px);
        }
    }

    button {
        width: 100%;
        height:40px;
    }
</style>