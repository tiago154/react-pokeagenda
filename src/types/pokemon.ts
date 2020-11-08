import { Weakness } from './weakness'

export type Pokemon = {
  id: number,
  name: string,
  image: string,
  types?: string[],
  weaknesses?: Weakness[]
}
