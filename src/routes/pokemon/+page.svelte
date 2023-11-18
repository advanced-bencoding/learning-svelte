<script lang="ts">
    import axios from 'axios';

    let apiCall = async () => {
        const result = await axios.get("https://pokeapi.co/api/v2/pokemon");
        return result.data.results;
    };
    console.log("ran");

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
