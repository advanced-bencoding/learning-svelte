import { error } from '@sveltejs/kit';
import axios from 'axios';

export async function load({ name }: { name: string }) {
    try {
        console.log(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return response.data;
    }
    catch(err: any){
        throw error(500);
    }
}
