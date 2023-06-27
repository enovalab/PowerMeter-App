<script>
    export let key;
    export let value;
    export let label;
    export let type = "text";
    export let required = false;
    export let pattern = null;
    export let step;
    
    let error = false;

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
        checked={value}
    />
{:else}
    <input
        name={key}
        required={required}
        pattern={pattern}
        class:error
        {step}
        use:setInputType={type}
        {value}
    />
{/if}

<style>
    * {
        font-size: 22px;
    }
</style>