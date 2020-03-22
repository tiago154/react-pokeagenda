const superagent = require('superagent')
const POKEMON = 'pokemon/'

const listPokemon = async (_, { offset = 0, limit = 20 }) => {
  const { body } = await superagent
    .get(`${process.env.BASE_URL_POKEMON}${POKEMON}`)
    .query({ offset, limit })
    .catch(() => ({ body: '' }))
  return body
}

module.exports = {
  listPokemon
}