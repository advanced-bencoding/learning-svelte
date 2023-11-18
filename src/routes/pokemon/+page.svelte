<script lang="ts">
    import axios from 'axios';

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
        {#each data as datum}
            <li>{datum.name}</li>
        {/each}
    </ul>
{/await}
