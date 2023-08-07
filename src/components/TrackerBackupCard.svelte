<script lang="ts">
    import { fetchRestAPI, getDeviceURL } from "../modules/Helpers";

    let uploadElement: HTMLInputElement;
    let uploadFormElement: HTMLFormElement;

    function handleUpload() {
        uploadElement.click();
        uploadElement.addEventListener("change", () => {
            if(uploadElement.files) {
                const file = uploadElement.files[0];
                const fileReader = new FileReader();
                fileReader.addEventListener("load", async event => {
                    try {
                        const response = await fetchRestAPI(getDeviceURL() + "/api/trackers", "PUT", JSON.parse(event.target?.result));
                        if(response) {
                            alert("Backup has been uploaded sucessfully");
                            uploadFormElement.reset();
                        }
                    }
                    catch(error) {
                        alert("Error while uploading Backup: " + error)
                    }
                });
                fileReader.readAsText(file);
            }
        }, false);
    }

    function handleDownload() {
        fetch(getDeviceURL() + "/api/trackers")
        .then(response => response.blob())
        .then(data => {
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(data);
            link.download = "TrackerBackup.json";
            link.click();
        });
    }
</script>

<section class="card card-padding">
    <h2>Backup</h2>
    <div class="grid">
        <span
            on:click={handleDownload}
            on:keydown={handleDownload}
            class="material-icons-round"
        >
            file_download
        </span>
        <span
            on:click={handleUpload}
            on:keydown={handleUpload}
            class="material-icons-round"
        >
            file_upload
        </span>
        <span>Download Backup</span>
        <span>Upload Backup</span>
    </div>
</section>
<form bind:this={uploadFormElement} hidden>
    <input bind:this={uploadElement} type="file">
</form>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .grid * {
        justify-self: center;
        align-self: center;
    }



    .material-icons-round {
        font-size: 45px;
        color: var(--contras-color);
        cursor: pointer;
    }
</style>