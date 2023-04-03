<script>
    import AddDeviceCard from "./AddDeviceCard.svelte";


    export let title;
    export let fields = [];
    export let data = {};
    export let url = "";

    fields.forEach(field => field.hasError = false);

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
        for(let field of fields) {
            if(field.validate) {
                if(!field.validate(data[field.key])) {
                    console.log(field.key + " added error");
                    field = {...field, hasError: true};
                    setTimeout(() => {
                        
                        console.log(field.key + " removed error");
                    }, 1000);
                    return;
                }
            }
        }
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
                    class:error={field.hasError} 
                    step=0.01
                    use:setInputType={field}
                    bind:this={field.inputElement} 
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

    .error {
        box-shadow: 0 0 20px var(--error-color);
        position: relative;
        animation: shake 0.1s 3;
    }

    @keyframes shake {
        0% {
            transform: translateX(0px);
        }
        100% {
            transform: translateX(5px);
        }
    }

    button {
        background-color: var(--main-color);
    }

    img {
        height: 30px;
    }
</style>