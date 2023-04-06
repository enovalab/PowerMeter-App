<script>
    import PowerCard from "../components/PowerCard.svelte";
    import SwitchCard from "../components/SwitchCard.svelte";

    let isOn;
</script>

<SwitchCard bind:isOn={isOn}/>
<PowerCard bind:isOn={isOn}/>