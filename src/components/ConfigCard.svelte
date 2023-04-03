<script>
    import { castTo } from "../modules/Helpers";


    export let title;
    export let fields = [];
    export let data = {};
    export let url = "";
    let errors = {};

    $: {
        fields.forEach(field => {
            const value = data[field.key];
            const castedValue = castTo(field.type, value);
            if(castedValue === "undefined") return;
            if(castedValue === undefined) return;
            if(castedValue === null) return;
            if(castedValue === NaN) return;
            data[field.key] = castedValue;
        });
    }
    
    function setInputType(node, inputType) {
        node.type = inputType;
    }

    function handleSubmit() {
        console.log(data);
    }
</script>

<form class="card" on:submit|preventDefault={handleSubmit}>
    <div style:padding=20px>
        <h2>{title}</h2>
        <div class="inputs">
            {#each fields as field}
                <label for={field.key}>{field.label}</label>
                <input
                    required={field.required}
                    pattern={field.pattern}
                    class:error={errors[field.key]} 
                    step=0.01
                    use:setInputType={field.inputType}
                    bind:value={data[field.key]}
                />  
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

    input:invalid {
        box-shadow: 0 0 5px var(--error-color);
    }

    button {
        background-color: var(--main-color);
    }

    img {
        height: 30px;
    }
</style>