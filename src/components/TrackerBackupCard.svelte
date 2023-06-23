<script lang="ts">
    import { fetchRestAPI, getDeviceURL } from "../modules/Helpers";

    let uploadElement: HTMLInputElement;

    function handleUpload() {
        uploadElement.click();
        uploadElement.addEventListener("change", () => {
            if(uploadElement.files) {
                const file = uploadElement.files[0];
                const fileReader = new FileReader();
                fileReader.addEventListener("load", event => {
                    console.log(event.target?.result);
                    fetchRestAPI(getDeviceURL() + "/api/trackers", "PUT", JSON.parse(event.target?.result))
                    .then(() => {
                        alert("Backup has been uploaded sucessfully");
                    })
                    .catch(error => {
                        alert("Error while uploading Backup: " + error)
                    });
                });
                fileReader.readAsText(file);
            }
        }, false);
    }
</script>

<section class="card card-padding">
    <h2>Backup</h2>
    <div class="grid">
        <a 
            class="material-icons-round"
            href={getDeviceURL() + "/api/trackers"}
            download
        >
            file_download
        </a>
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
<input bind:this={uploadElement} type="file" hidden>

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
    }
</style>