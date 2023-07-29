import _ from "lodash";
import { TIME_FORMAT1 } from "../constants";
import { getFormattedDateTime } from "../services/utils";
import { manipulateUserData } from "./user";

export const manipulateLinkVisibilityList = (data) => {
  let visibilties = [];
  data?.forEach((item) => {
    visibilties.push(manipulateUserData(item.user));
  });
  return visibilties;
};

export const manipulateLinkData = (data) => {
  if (_.isEmpty(data)) return {};
  let link = {};
  link["id"] = data?.id ?? 0;
  link["slug"] = data.slug ?? "";
  link["name"] = data.linkName ?? "Link";
  link["url"] = data.url ?? "";
  link["isVisibleToAll"] = data.isVisibleToAll ?? false;
  link["visibilities"] = manipulateLinkVisibilityList(data?.visibilties);
  link["creatorInfo"] = manipulateUserData(data.createdBy);

  return link;
};

export const manipulateLinksList = (data) => {
  let links = [];
  data?.forEach((item) => {
    links.push(manipulateLinkData(item));
  });
  return links;
};

export const manipulateNoteData = (data) => {
  if (_.isEmpty(data)) return {};
  let note = {};
  note["id"] = data?.id ?? 0;
  note["note"] = data.note ?? "";
  note["creatorInfo"] = manipulateUserData(data.createdBy);
  note["link"] = manipulateLinkData(data.link);
  note["createdAt"] = getFormattedDateTime(data.createdAt, TIME_FORMAT1);
  note["isOwner"] = data.isOwner ?? false;

  return note;
};

export const manipulateNotesList = (data) => {
  let notes = [];
  data?.forEach((item) => {
    notes.push(manipulateNoteData(item));
  });
  return notes;
};
