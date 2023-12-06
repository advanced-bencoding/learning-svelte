export interface IPokemon {
    abilities: Array<IAbility>,
    moves: Array<IMove>,
    name: string,
    sprites: Record<string, string>,
    stats: Array<IStat>,
}

interface IAbility {
    ability: {
        name: string;
        url: string;
    },
    is_hidden: boolean,
    slot: number,
}

interface IMove {
    move: {
        name: string,
        url: string,
    },
}

interface IStat {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string,
    },
}