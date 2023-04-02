<script>
    let configData = {
        ssid: "YourNetwork",
        password: "slfsjfldjl",
        staticIP: "0.0.0.0",
        gateway: "0.0.0.0",
        subnet: "0.0.0.0",
        primaryDNS: "0.0.0.0",
        secondaryDNS: "0.0.0.0"
    };
</script>

<form class="card">
    <div style:padding=20px>
        <h2>WiFi Accespoint</h2>
        <div class="inputs">
            <label for="ssid">SSID</label>
            <input id="ssid" type="text" bind:value={configData.ssid}>
            <label for="password">Password</label>
            <input id="password" type="password" bind:value={configData.password}>
            <label for="staticIP">Static IP</label>
            <input id="staticIP" type="text" bind:value={configData.staticIP}>
            <label for="gateway">Gateway</label>
            <input id="gateway" type="text" bind:value={configData.gateway}>
            <label for="subnet">Subnetmask</label>
            <input id="subnet" type="text" bind:value={configData.subnet}>
            <label for="primaryDNS">Primary DNS</label>
            <input id="primaryDNS" type="text" bind:value={configData.primaryDNS}>
            <label for="secondaryDNS">Secondary DNS</label>
            <input id="secondaryDNS" type="text" bind:value={configData.secondaryDNS}>
        </div>
    </div>
    <button type="submit">
        <img src="../icons/done_black_24dp.svg" alt="">
    </button>
</form>

<style>
    .card {
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    }

    .inputs {
        margin-top: 20px;
        display: grid;
        grid-row-gap: 10px;
        grid-template-columns: 1fr;
    }
    
    @media (min-width: 700px) {
        .inputs {
            grid-template-columns: 300px calc(100% - 300px);
        }
    }

    .inputs * {
        font-size: 22px;
    }


    button {
        background-color: var(--main-color);
    }

    img {
        height: 30px;
    }
</style>