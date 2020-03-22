const superagent = require('superagent')
const orderBy = require('../../util/orderBy')
const POKEMON = 'pokemon/'

const pokemons = async ({ results }) => await Promise.all(
  results.map(async ({ name, url }) => {
    const id = Number(url.split('pokemon/')[1].replace('/', ''))
    return {
      id,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      image: `${process.env.BASE_URL_IMAGE}/full/${id.toString().padStart(3, '0')}.png`,
      types: await getDetails(id)
    }
  })
)

// Evoluir a função para retornar mais informações
const getDetails = async id => {
  const { body } = await superagent
    .get(`${process.env.BASE_URL_POKEMON}${POKEMON}${id}`)
    .catch(() => ({ body: '' }))

  return body.types
    .sort(orderBy('slot'))
    .map(t => t.type.name)
}

module.exports = { pokemons }