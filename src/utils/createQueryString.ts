type Params = {
  key: string;
  value: string;
};

export const createQueryString = (params: Params | Params[]) => {
  let paramList = Array.isArray(params) ? params : [params];

  const queryString = paramList
    .map(({ key, value }) => `${key}:${value}`)
    .join(' ');

  return queryString;
};
