<script>
    import FormCard from "../components/FormCard.svelte";
    import { ipPattern } from "../modules/Helpers";
</script>

<FormCard title="WiFi Stationary" url="" fields={[
    {
        key: "ssid",
        type: "text",
        label: "SSID",
        required: true
    },
    {
        key: "password",
        type: "password",
        label: "Password",
        required: true
    },
    {
        key: "staticIP",
        type: "text",
        label: "Static IP",
        pattern: ipPattern.source
    },
    {
        key: "gateway",
        type: "text",
        label: "Gateway",
        pattern: ipPattern.source
    },
    {
        key: "subnet",
        type: "text",
        label: "Subnetmask",
        pattern: ipPattern.source
    }
]}/>

<FormCard title="WiFi Acesspoint" url="" fields={[
    {
        key: "ssid",
        type: "text",
        label: "SSID",
        required: true
    },
    {
        key: "password",
        type: "password",
        label: "Password",
        required: true
    }
]}/>

<FormCard title="Measuring Calibration" url="" fields={[
    {
        key: "voltage",
        type: "number",
        label: "Voltage",
        required: true,
        step: 0.01
    },
    {
        key: "current",
        type: "number",
        label: "Current",
        required: true,
        step: 0.01
    },
    {
        key: "phase",
        type: "number",
        label: "Phase",
        required: true,
        step: 0.01
    },
]}/>
