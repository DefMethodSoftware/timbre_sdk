export const notEmpty = (obj) => {
  return obj !== null || Object.keys(obj).length !== 0
}

export const identity = val => {return val}