export const manipulatePageData = (data) => {
  if (_.isEmpty(data)) return {};
  let page = {};
  page["id"] = data?.id ?? "";
  page["name"] = data?.name ?? "";
  page["access_token"] = data?.access_token;
  page["thumb"] = data?.picture?.data?.url ?? "";
  page["category"] = data?.category ?? "";

  return page;
};

export const manipulatePagesList = (data) => {
  let pages = [];
  data?.forEach((item) => {
    pages.push(manipulatePageData(item));
  });
  return pages;
};
