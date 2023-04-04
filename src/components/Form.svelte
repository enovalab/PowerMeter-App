<script>
    import Field from "./Field.svelte";
    import uuid from "@smakss/uuid";
    import { createEventDispatcher } from "svelte";

    export const id = uuid();
    export let fields = [];
    export let data = {};

    $: {
        fields.forEach(field => {
            const value = data[field.key];
            const castedValue = formTypeCast(field.type, value);
            if(castedValue === "undefined") return;
            if(castedValue === undefined) return;
            if(castedValue === null) return;
            if(castedValue === NaN) return;
            data[field.key] = castedValue;
        });
    }

    const dispatchEvent = createEventDispatcher();

    function formTypeCast(type, value) {
        switch(type) {
            case "number" || "range": 
                return Number(value);
            case "text":
                return String(value);
            case "checkbox":
                return Boolean(value);
            default:
                return value;
        }
    }

    export function handleSubmit() {
        console.log(data);
        dispatchEvent("validSubmit", data);
    }
</script>

<form id={id} on:submit on:submit|preventDefault={handleSubmit}>
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
    <button type="submit" style:display="none">
</form>

<style>
    form {
        display: grid;
        grid-row-gap: 10px;
        grid-template-columns: 1fr;
    }

    @media (min-width: 700px) {
        form {
            grid-template-columns: 300px calc(100% - 300px);
        }
    }
</style>