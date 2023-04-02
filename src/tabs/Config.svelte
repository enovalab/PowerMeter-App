<script>
    import WiFiSTAConfigCard from "../components/WiFiSTAConfigCard.svelte";
    import WiFiAPConfigCard from "../components/WiFiAPConfigCard.svelte";
    import ConfigCard from "../components/ConfigCard.svelte";

</script>

<ConfigCard title="WiFi Stationary" fields={[
    {
        key: "ssid",
        inputType: "text",
        label: "SSID"
    },
    {
        key: "password",
        inputType: "password",
        label: "Password"
    },
    {
        key: "staticIP",
        inputType: "text",
        label: "Static IP"
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