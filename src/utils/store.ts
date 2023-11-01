export const getItemFromLocalStorage = (keyword: string): any => {
  // @ts-ignore
  const dataFromStorage = localStorage.getItem(keyword)
  if (!dataFromStorage) return null
  const resultJson = JSON.parse(dataFromStorage)
  return resultJson
}

export const setItemToLocalStorage = (keyword: string, data: any): typeof data => {
  // @ts-ignore
  localStorage.setItem(keyword, JSON.stringify(data))
  return data
}
