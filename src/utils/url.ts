export const url = (path: string, query: any) => {
  return `${path}?${new URLSearchParams(query).toString()}`
}
