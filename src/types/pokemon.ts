import { Weakness } from './weakness'
import { Species } from './species'
import { Ability } from './ability'

export type Pokemon = {
  id: number,
  name: string,
  image: string,
  types?: string[],
  weaknesses?: Weakness[],
  height: number,
  weight: number,
  species: Species,
  abilities: Ability[]
}
