<script>
    export let key;
    export let value;
    export let label;
    export let type = "text";
    export let required = false;
    export let pattern = null;
    export let step = 0.01;
    let error = false;

    function setInputType(node, type) {
        node.type = type;
    }
</script>

<label for={key}>{label}</label>
{#if (type == "checkbox")}
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
</style>