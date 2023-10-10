import { getUserInfo } from "zmp-sdk";

export const getUser = async () => {
  return await getUserInfo({}).then((res) => {
    return res?.userInfo
  });
};
