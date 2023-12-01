import { error } from '@sveltejs/kit';
import axios from 'axios';

export async function load({ params }) {
    const name = params.slug;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return response.data;
    }
    catch(err: any){
        console.log(err);
        console.error(err.message);
        throw error(500);
    }
}
