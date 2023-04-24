<script>
    import DeviceCard from "../components/DeviceCard.svelte";
    import AddDeviceCard from "../components/AddDeviceCard.svelte";
    import { devices } from "../modules/Stores";

    function handleAdd(event) {
        $devices = [event.detail, ...$devices];
    }

    function handleDelete(index) {
        const devicesCopy = $devices;
        devicesCopy.splice(index, 1);
        $devices = devicesCopy;
    }
</script>

<AddDeviceCard on:add={handleAdd}/>
<DeviceCard isSingleton={true} name="Power Meter AP" ip={"192.168.4.1"}/>
{#key $devices}
    {#each $devices as device, i}
        <DeviceCard name={device.name} ip={device.ip} on:delete={() => handleDelete(i)}/>
    {/each}
{/key}


