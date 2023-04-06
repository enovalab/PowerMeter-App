<script>
    import Switch from "./Switch.svelte";
    import { onMount } from "svelte";
    import { callRestAPI } from "../modules/Helpers";
    
    export let isOn;

    onMount(async () => {
        // const response = await callRestAPI(`${baseURL}/api/config/relay`);
        // isOn = response.state;
    });

    async function handleSwitchClick() {
        // const response =  await callRestAPI(`${baseURL}/api/config/relay`, "PATCH", {state: isOn});
        // isOn = response.state;
    }
</script>

<section class="card card-padding fixed">
    <div class="switch">
        <Switch width=200px height=100px borderRadius=20px bind:isOn={isOn} on:click={handleSwitchClick}/>
    </div>
</section>

<style>
    .card {
        font-size: 50px;
    }

    .switch {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 500px) {
        .switch {
            width: 100%;
            justify-content: space-around;
        }

        .switch::before {
            content: "Off";
        }

        .switch::after {
            content: "On";
        }
    }
</style>