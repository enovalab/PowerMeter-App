<script>
    import ConfigCard from "../components/ConfigCard.svelte";

</script>

<ConfigCard title="WiFi Stationary" fields={[
    {
        key: "ssid",
        inputType: "text",
        label: "SSID",
        validate: value => value
    },
    {
        key: "password",
        inputType: "password",
        label: "Password"
    },
    {
        key: "staticIP",
        inputType: "text",
        label: "Static IP",
        validate: value => RegExp(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/).test(value)
    },
    {
        key: "gateway",
        inputType: "text",
        label: "Gateway"
    },
    {
        key: "subnet",
        inputType: "text",
        label: "Subnetmask"
    }
]}/>
<ConfigCard title="WiFi Acesspoint" fields={[
    {
        key: "ssid",
        inputType: "text",
        label: "SSID"
    },
    {
        key: "password",
        inputType: "password",
        label: "Password"
    }
]}/>

<ConfigCard title="Measuring Calibration" fields={[
    {
        key: "voltage",
        inputType: "nuber",
        label: "Voltage"
    },
    {
        key: "current",
        inputType: "number",
        label: "Current"
    },
    {
        key: "phase",
        inputType: "number",
        label: "Phase"
    },
]}/>

<style>
</style>