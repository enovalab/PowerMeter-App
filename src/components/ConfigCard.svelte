<script>
    export let title;
    export let fields = [];
    export let data = {};
    export let url;

    $: {
        fields.forEach(field => {
            if(field.inputType === "number" || field.inputType === "range") {
                const numericValue = Number(data[field.key]);
                if(isFinite(numericValue)) {
                    data[field.key] = numericValue;
                }
            }
        });
    }
    
    function setInputType(node, field) {
        node.type = field.inputType;
    }

    function handleSubmit() {
        console.log(url);
    }
</script>

<form class="card" on:submit|preventDefault={handleSubmit}>
    <div style:padding=20px>
        <h2>{title}</h2>
        <div class="inputs">
            {#each fields as field}
                <label for={field.key}>{field.label}</label>
                <input step=0.01 use:setInputType={field} bind:value={data[field.key]}/>
            {/each}
        </div>
    </div>
    <button type="submit">
        <img src="../icons/done_black_24dp.svg" alt="">
    </button>
</form>

<style>
    .card {
        min-height: max-content;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    }

    .inputs {
        margin-top: 20px;
        display: grid;
        grid-row-gap: 10px;
        grid-template-columns: 1fr;
    }
    
    @media (min-width: 700px) {
        .inputs {
            grid-template-columns: 300px calc(100% - 300px);
        }
    }

    .inputs * {
        font-size: 22px;
    }

    button {
        background-color: var(--main-color);
    }

    img {
        height: 30px;
    }
</style>