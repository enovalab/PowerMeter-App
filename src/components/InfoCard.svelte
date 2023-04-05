<div class="card card-padding">
    <slot></slot>
</div>

<style>
    .card {
        font-size: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 10px;
        column-gap: 20px;
    }

    @media (min-width: 700px) {
        .card {
            font-size: 20px;
        }
    }
</style>