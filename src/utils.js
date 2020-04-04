export const notEmpty = (obj) => {
  return obj !== null && 
         !isEmptyObject(obj) && 
         obj !== undefined
}

const isEmptyObject = (obj) => {
  return obj instanceof Object && Object.keys(obj).length === 0
}

export const identity = val => {return val}