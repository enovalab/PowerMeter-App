<script>
    import FormCard from "../components/FormCard.svelte";
    
    function handleSubmit(event) {
        console.log(event);
    }
</script>

<FormCard title="WiFi Stationary" on:submit={handleSubmit} fields={[
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

<FormCard title="WiFi Acesspoint" fields={[
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

<FormCard title="Measuring Calibration" fields={[
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
        inputType: "checkbox",
        label: "Phase"
    },
]}/>
