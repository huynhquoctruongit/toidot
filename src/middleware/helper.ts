export const URLparamsToObject = (params: any) => {
  const objParams: any = {};
  params.forEach((value: string, key: string) => {
    objParams[key] = value;
  });
  return objParams;
};
