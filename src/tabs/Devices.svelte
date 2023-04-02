<script>
    import DeviceCard from "../components/DeviceCard.svelte";
    import AddDeviceCard from "../components/AddDeviceCard.svelte";    

    let rerender = true;
    function deserialize() {
        const value = JSON.parse(localStorage.getItem("devices"));
        if(!Array.isArray(value)) {
            return [];
        }
        return value;
    }

    function serialize(value) {
        rerender = !rerender;
        localStorage.setItem("devices", JSON.stringify(value));
    }

    function handleAdd(event) {
        serialize([event.detail, ...deserialize()]);
    }

    function handleDelete(index) {
        const devices = deserialize();
        devices.splice(index, 1);
        serialize(devices);
    }
</script>

<AddDeviceCard on:add={handleAdd}/>
<DeviceCard name="Power Meter AP" ip={"192.168.4.1"}/>
{#key rerender}
    {#each deserialize() as device, i}
        <DeviceCard name={device.name} ip={device.ip} on:delete={() => handleDelete(i)}/>
    {/each}
{/key}


