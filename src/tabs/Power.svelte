<script lang="ts">
    import PowerCard from "../components/PowerCard.svelte";
    import SwitchCard from "../components/SwitchCard.svelte";

    let isOn: boolean;
</script>

<SwitchCard bind:isOn={isOn}/>
<PowerCard bind:isOn={isOn}/>