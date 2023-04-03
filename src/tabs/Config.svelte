<script>
    import ConfigCard from "../components/ConfigCard.svelte";

</script>

<ConfigCard title="WiFi Stationary" on:submit={console.log} fields={[
    {
        key: "ssid",
        type: "string",
        inputType: "text",
        label: "SSID",
        required: true
    },
    {
        key: "password",
        type: "string",
        inputType: "password",
        label: "Password"
    },
    {
        key: "staticIP",
        type: "string",
        inputType: "text",
        label: "Static IP",
        pattern: "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
    },
    {
        key: "gateway",
        type: "string",
        inputType: "text",
        label: "Gateway"
    },
    {
        key: "subnet",
        type: "string",
        inputType: "text",
        label: "Subnetmask"
    }
]}/>
<ConfigCard title="WiFi Acesspoint" fields={[
    {
        key: "ssid",
        type: "string",
        inputType: "text",
        label: "SSID"
    },
    {
        key: "password",
        type: "string",
        inputType: "password",
        label: "Password"
    }
]}/>

<ConfigCard title="Measuring Calibration" fields={[
    {
        key: "voltage",
        type: "number",
        inputType: "number",
        label: "Voltage"
    },
    {
        key: "current",
        type: "number",
        inputType: "number",
        label: "Current"
    },
    {
        key: "phase",
        type: "number",
        inputType: "number",
        label: "Phase"
    },
]}/>

<style>
</style>