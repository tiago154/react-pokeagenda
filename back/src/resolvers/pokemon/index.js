const superagent = require('superagent')

const listPokemon = async (_, { offset = 0, limit = 20 }) => {
  const { body } = await superagent.get(process.env.BASE_URL_POKEMON).query({ offset, limit })
  return body
}

const pokemons = ({ results }) =>
  results.map(({ name, url }) => (
    {
      id: Number(url.split('pokemon/')[1].replace('/', '')),
      name: name.charAt(0).toUpperCase() + name.slice(1),
      url
    }
  ))

module.exports = {
  query: {
    listPokemon
  },
  listPokemon: {
    pokemons
  }
}