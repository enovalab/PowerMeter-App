<script>
    import ConfigCard from "../components/ConfigCard.svelte";
    import { getDeviceURL, ipPattern, numberPattern } from "../modules/Helpers";
</script>

<ConfigCard
    title="WiFi Stationary"
    url={getDeviceURL() + "/api/config/wifi"} 
    nestingKey="sta" 
    fields={
    [
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
    ]
}/>

<ConfigCard
    title="WiFi Acesspoint" 
    url={getDeviceURL() + "/api/config/wifi"}
    nestingKey="ap" 
    fields={
    [
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
    ]
}/>

<ConfigCard
    title="Measuring Calibration" 
    nestingKey="calibration" 
    url={getDeviceURL() + "/api/config/measuring"}  
    fields={
    [
        {
            key: "voltage",
            type: "text",
            label: "Voltage",
            required: true,
            pattern: numberPattern.source,
            // modifyValue: value => Number(value)
        },
        {
            key: "current",
            type: "text",
            label: "Current",
            required: true,
            pattern: numberPattern.source,            
            // modifyValue: value => Number(value)
        },
        {
            key: "phase",
            type: "text",
            label: "Phase",
            required: true,
            pattern: numberPattern.source,            
            // modifyValue: value => Number(value)
        }
    ]
}/>
