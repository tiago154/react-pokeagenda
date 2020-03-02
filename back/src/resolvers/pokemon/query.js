const superagent = require('superagent')

const listPokemon = async (_, { offset = 0, limit = 20 }) => {
  const { body } = await superagent.get(process.env.BASE_URL_POKEMON).query({ offset, limit })
  return body
}

module.exports = {
  listPokemon
}