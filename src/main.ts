
import { deepClone } from './util'


export const getDeepCloneFunction = () => {
  return deepClone
}


export const parse = (user: string, age: number) => {
  return {
    user,
    age
  }
}
