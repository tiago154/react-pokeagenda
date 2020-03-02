const pokemons = ({ results }) =>
  results.map(({ name, url }) => (
    {
      id: Number(url.split('pokemon/')[1].replace('/', '')),
      name: name.charAt(0).toUpperCase() + name.slice(1),
      url
    }
  ))

module.exports = { pokemons }