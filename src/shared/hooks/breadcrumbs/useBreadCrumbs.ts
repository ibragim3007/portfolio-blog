export const useBreadCrumbs = (currentPath: string) => {
  const currentPathSplit = currentPath.split('/').filter(Boolean);
  // ['', 'p', 'd2381f57-5017-401d-886c-f2b2208da7e8']

  let currentPathValue = '';

  const crumbs = currentPathSplit.map((item) => {
    currentPathValue += item + '/';
    return {
      item: item,
      path: currentPathValue,
    };
  });

  return crumbs;
};
