

type Object1 = {
  [prop: string]: string
}

export type A = {
  a: string
}

export const deepClone = (object: Object1, is = true) => {
  return {
    object, is
  }
}


