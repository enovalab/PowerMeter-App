<script>
    import Switch from "./Switch.svelte";
    import { onMount } from "svelte";
    import { fetchRestAPI, getDeviceURL } from "../modules/Helpers";
    
    export let isOn;
</script>

<section class="card card-padding fixed">
    <div class="switch">
        <Switch url={`${getDeviceURL()}/api/config/relay`} width=200px height=100px borderRadius=20px bind:isOn={isOn}/>
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