<script>
    import PowerCard from "../components/PowerCard.svelte";
    import SwitchCard from "../components/SwitchCard.svelte";

    let isOn;
</script>

<PowerCard bind:isOn={isOn}/>
<SwitchCard bind:isOn={isOn}/>