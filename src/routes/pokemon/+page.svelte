<script lang="ts">
 import axios from 'axios';
 import IconButton from '../../common/components/IconButton/IconButton.svelte';

 let apiCall = async () => {
  const result = await axios.get('https://pokeapi.co/api/v2/pokemon');
  return result.data.results;
 };
 console.log('ran');
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
   <a href={`/pokemon/${datum.name}`}>
    <IconButton
     onClick={() => {
      console.log(datum.name);
     }}
    >
     <img slot="icon" src="/images/pokeball.png" alt="pokeball" width="150px" />
    </IconButton>
  </a>
   {/each}
  </div>
 </ul>
{/await}

<style>
 .poke-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 30px;
 }

 @keyframes shake {
    0% {
      top: 0;
    }

    33% {

    }

    66% {

    }

    100% {
      top: 100;
    }
 }
</style>
