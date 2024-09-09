export const URLparamsToObject = (params: any) => {
  const objParams: any = {};
  params.forEach((value: string, key: string) => {
    objParams[key] = value;
  });
  return objParams;
};

export const renderImageById = (id: string, defaultImage: string) => {
  if (!id) return defaultImage;
  return `${process.env.NEXT_PUBLIC_ASSETS_API}assets/${id}`;
};
