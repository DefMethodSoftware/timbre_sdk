export const notEmpty = (obj) => {
  return obj !== null && 
         !isEmptyObject(obj) && 
         obj !== undefined
}

export const isEmpty = (obj)=>{
  return !notEmpty(obj)
}

const isEmptyObject = (obj) => {
  return obj instanceof Object && Object.keys(obj).length === 0
}

export const identity = val => {return val}