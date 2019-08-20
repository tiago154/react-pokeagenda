const types = {
    normal: {
        className: 'Normal-background',
        name: 'Normal'
    },
    fighting: {
        className: 'Fighting-background',
        name: 'Lutador'
    },
    flying: {
        className: 'Flying-background',
        name: 'Voador'
    },
    poison: {
        className: 'Poison-background',
        name: 'Venenoso'
    },
    ground: {
        className: 'Ground-background',
        name: 'Terra'
    },
    rock: {
        className: 'Rock-background',
        name: 'Pedra'
    },
    bug: {
        className: 'Bug-background',
        name: 'Inseto'
    },
    ghost: {
        className: 'Ghost-background',
        name: 'Fantasma'
    },
    steel: {
        className: 'Steel-background',
        name: 'Metálico'
    },
    fire: {
        className: 'Fire-background',
        name: 'Fogo'
    },
    water: {
        className: 'Water-background',
        name: 'Água'
    },
    grass: {
        className: 'Grass-background',
        name: 'Planta'
    },
    electric: {
        className: 'Electric-background',
        name: 'Elétrico'
    },
    psychic: {
        className: 'Psycho-background',
        name: 'Psíquico'
    },
    ice: {
        className: 'Ice-background',
        name: 'Gelo'
    },
    dragon: {
        className: 'Dragon-background',
        name: 'Dragão'
    },
    dark: {
        className: 'Dark-background',
        name: 'Noturno'
    },
    fairy: {
        className: 'Fairy-background',
        name: 'Fada'
    }
}

export const fillPokemon = item => {
    const id = item.url.split('pokemon/')[1].replace('/', '');
    return {
        id,
        name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
        url: item.url
    }
};

export const typesMap = type => {
    const pokemonType = types[type.type.name];
    const nameType = pokemonType ? pokemonType.name : '';
    return {
        slot: type.slot,
        name: nameType
    };
}

export const statsMap = stat => {
    return {
        name: stat.stat.name,
        value: stat.base_stat
    }
}

export const orderBy = field => (a, b) => {
    if (a[field] > b[field])
        return 1;
    if (a[field] < b[field])
        return -1;
    return 0;
}

export const withImage = pokemon => pokemon.url.split('pokemon/')[1].replace('/', '') < 808;