<script lang="ts">
    import type { IPokemon } from "./types";

    export let data: IPokemon;
</script>

<div class="card">
    <div class="card__title">
        <p>{data.name}</p>
        <p>HP: {data.stats.filter((statInfo) => statInfo.stat.name === "hp" )[0].base_stat}</p>
    </div>
    <div class="card__img">
        <img src={data.sprites["front_default"]} alt={data.name} width="80%" height="100%"/>
    </div>
    <div class="card__info">
        <div class="card__info__ability">
            <p>Ability</p>
            <p>{data.abilities[0].ability.name}</p>
        </div>
    </div>
</div>

<style>
    .card {
        width: 300px;
        height: fit-content;
        padding: 20px;
        background-color: bisque;
        border-radius: 10px;
        border: solid 10px silver;
    }

    .card__title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .card__img {
        width: 100%;
        height: 200px;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    .card__info {

    }

    .card__info__ability {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>