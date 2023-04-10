<script>
    export let key;
    export let value;
    export let label;
    export let type = "text";
    export let required = false;
    export let pattern = null;
    export let step;
    let error = false;

    $: {
        const castedValue = inputTypeCast(type, value);
        if(castedValue !== "undefined") {
            value = castedValue;
        }
    }

    $: {
        if(typeof(value) === "number") {
            value = Math.round(value / step) * step;
        }
    }

    function inputTypeCast(type, value) {
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

    function setInputType(node, type) {
        node.type = type;
    }
</script>

<label for={key}>
    {label} {#if required}*{/if}
</label>
{#if (type === "checkbox")}
    <input
        name={key}
        required={required}
        pattern={pattern}
        class:error
        {step}
        type="checkbox"
        bind:checked={value}
    />
{:else}
    <input
        name={key}
        required={required}
        pattern={pattern}
        class:error
        {step}
        use:setInputType={type}
        bind:value={value}
    />
{/if}

<style>
    * {
        font-size: 22px;
    }

    input {
        background-color: var(--background-color);
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        border: 0;
        border-radius: 5px;
        color: var(--contrast-color);
        font-family: "Dosis";
    }

    input:invalid {
        border: 1px solid var(--error-color);
    }

    input:focus {
        outline: none;
    }
</style>