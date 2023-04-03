<script>
    import TrackerCard from "../components/TrackerCard.svelte"
</script>

<TrackerCard title="Last 60 Minutes" dataColor="rgb(0, 50, 200)" secondsBetweenSamples=60 data={[22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 12, 90, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 12, 90]}/>
<TrackerCard title="Last 24 Hours" dataColor="rgb(168, 0, 255)" secondsBetweenSamples=3600 data={[23, 20, 69, 39, 84, 32, 9, 2, 20, 69, 39, 23, 4, 32, 9, 22, 84, 32, 9, 2, 21, 3, 90, 21]}/>
<TrackerCard title="Last 7 Days" dataColor="rgb(0, 255, 150)" secondsBetweenSamples=86400 data={[23, 20, 69, 89, 21, 5, 9]}/>
<TrackerCard title="Last 30 Days" dataColor="rgb(255, 174, 0)" secondsBetweenSamples=86400 data={[22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 22, 84, 32, 9, 2, 54, 26, 12, 90]}/>
<TrackerCard title="Last 12 Months" dataColor="rgb(72, 0, 255)" secondsBetweenSamples=2592000 data={[23, 20, 69, 89, 21, 5, 9, 13, 19, 20, 48, 30]}/>
<TrackerCard title="Last 10 Years" dataColor="rgb(255, 0, 166)" secondsBetweenSamples=25920000 data={[23, 20, 69, 89, 21, 5, 9, 13, 19, 20]}/>