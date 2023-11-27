<script lang="ts">
    import axios from 'axios';
  import IconButton from '../../common/components/IconButton/IconButton.svelte';

    let apiCall = async () => {
        const result = await axios.get("https://pokeapi.co/api/v2/pokemon");
        return result.data.results;
    };
    console.log("ran");
    // game plan
    // choose random pokemon from balls displayed on homescreen
    // enter a fight with a random pokemon
    // have simple attakcs in turn based combat

</script>

{#await apiCall()}
    <p>loading...</p>
{:then data}
    <ul>
        <div class="poke-grid">
                {#each data as datum}
                    <IconButton onClick={() => { console.log(datum.name) }}>
                        <img slot="icon" src="/images/pokeball.png" alt="pokeball" width="150px" />
                    </IconButton>
                {/each}
        </div>
    </ul>
{/await}

<style>
    .poke-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
</style>