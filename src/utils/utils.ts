export const isDataEmpty = (data:any) => data.length === 0 ? true : false
export const filterHeadersWithId = (data:any) => Object.keys(data[0]).filter(header => !header.endsWith('id'));