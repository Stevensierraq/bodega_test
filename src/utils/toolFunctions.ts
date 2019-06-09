export const uniqByProp = (prop: any, arr: any) =>
  Object.values(
    arr.reduce(
      (acc: any, item: any) =>
        item && item[prop]
          ? { ...acc, [item[prop]]: item }
          : acc,
      {},
    ),
  )
