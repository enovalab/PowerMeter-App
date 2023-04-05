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

<section class="card card-padding">
    <Switch width=200px height=100px borderRadius=20px bind:isOn={isOn} on:click={handleSwitchClick}/>
</section>

<style>
    .card {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>