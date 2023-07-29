import moment from "moment";

export const manipulatePostData = (data) => {
  if (_.isEmpty(data)) return {};
  let post = {};
  post["id"] = data?.id ?? "";
  post["media"] = data?.attachments?.data?.[0]?.media?.image?.src ?? "";
  post["caption"] = data?.attachments?.data?.[0]?.description ?? "";
  post["likes"] = Object?.keys(data?.likes ?? {})?.length ?? 0;

  return post;
};

export const manipulateScheduledPostData = (data) => {
  if (_.isEmpty(data)) return {};
  let post = {};
  post["id"] = data?.id ?? "";
  post["media"] = data?.attachments?.data?.[0]?.media?.image?.src ?? "";
  post["caption"] = data?.attachments?.data?.[0]?.description ?? "";
  post["scheduledTime"] =
    moment.unix(data?.scheduled_publish_time).format("DD-MMMM-YYYY hh:mm A") ??
    "";

  return post;
};

export const manipulatePostsList = (data) => {
  let posts = [];
  data?.forEach((item) => {
    if (item?.attachments?.data?.[0]?.media?.image?.src)
      posts.push(manipulatePostData(item));
  });
  return posts;
};
export const manipulateScheduledPostsList = (data) => {
  let posts = [];
  data?.forEach((item) => {
    if (item?.attachments?.data?.[0]?.media?.image?.src)
      posts.push(manipulateScheduledPostData(item));
  });
  return posts;
};
