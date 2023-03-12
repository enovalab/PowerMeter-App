<script>
    import InfoCard from "../components/InfoCard.svelte";
</script>

<InfoCard>
    <h2>App</h2>
    <div></div>
    <b>App-Version</b>
    <span>0.0.0</span>
    <b>Developed by</b>
    <span>Samuel Lehnen</span>
    <b>Repository</b>
    <a href="https://github.com/enovalab/PowerMeter-App">enovalab/PowerMeter-App</a>
</InfoCard>

<style>
    h2 {
        margin-top: 0;
    }

    a {
        color: var(--contrast-color);
    }
</style>
