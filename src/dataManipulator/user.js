import _ from "lodash";
import { manipulateAddressList } from "./company";

export const manipulateUserData = (data, company) => {
  if (_.isEmpty(data)) return {};
  let user = {};
  user["id"] = data?.id ?? 0;
  user["username"] = data.firstName + " " + data.lastName;
  user["firstName"] = data?.firstName ?? "";
  user["lastName"] = data?.lastName ?? "";
  user["email"] = data?.email ?? "";
  user["image"] = data?.image ?? "";
  user["company"] = company;

  return user;
};

export const manipulateUsersList = (data, company) => {
  let users = [];
  data?.forEach((item) => {
    users.push(manipulateUserData(item, company));
  });
  return users;
};

export const manipulateCompanyData = (data) => {
  if (_.isEmpty(data)) return {};
  let company = {};

  company["id"] = data.id ?? 1;
  company["name"] = data.name;
  company["logo"] = data.logo ?? "";
  company["phone"] = data.workPhone ?? "";
  company["linkedIn"] = data?.linkedIn;
  company["facebook"] = data?.facebook;
  company["twitter"] = data?.twitter;
  company["website"] = data?.website;
  company["addresses"] = manipulateAddressList(data?.addresses);

  return company;
};

export const manipulateConfirmOtpData = (data) => {
  if (_.isEmpty(data)) return {};

  if (data.isActive === false) {
    return {};
  }

  const dataObj = {
    access_token: data.accessToken,
    refresh_token: data.refreshToken,
    isEnterpriseUser: data.isAdmin,
    name: data.firstname + " " + data.lastname,
    email: data.email,
    profilePic: data.image ?? "",
    companyName: data.companyName ?? "",
    companyLogo: data.logo ?? "",
    user_id: data.id ?? "",
    tfa: data?.allowTFA ?? true,
  };

  return dataObj;
};

export const manipulateProfileData = (data) => {
  if (_.isEmpty(data)) return {};
  let userprofile = {};

  userprofile["username"] = data.firstName + " " + data.lastName;
  userprofile["profilePic"] = data.image ?? "";
  userprofile["firstName"] = data?.firstName ?? "";
  userprofile["lastName"] = data?.lastName ?? "";
  userprofile["email"] = data?.email ?? "";
  userprofile["phone"] = data?.phone ?? "";
  userprofile["jobTitle"] = data?.jobTitle ?? "";
  userprofile["linkedIn"] = data?.linkedIn;
  userprofile["facebook"] = data?.facebook;
  userprofile["twitter"] = data?.twitter;
  userprofile["tfa"] = data?.allowTFA ?? false;
  userprofile["publicProfile"] = data?.privacy ?? false;
  userprofile["passwordLastmodified"] = data?.passwordUpdatedAt;
  userprofile["company"] = manipulateCompanyData(data?.company);
  return userprofile;
};
