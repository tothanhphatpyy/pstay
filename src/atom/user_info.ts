// recoil
import { useRequest } from "ahooks";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { getProfileApi } from "@services/api/auth_api";

const USER_STATE = atom({
  key: "USER_STATE", // unique ID (with respect to other atoms/selectors)
  default: {
    xid: "",
    name: "Họ và tên",
    phone: "123",
    company_id: "1",
    img_url: "",
    email: "example@example.com",
    address: "",
  }, // default value (aka initial value)
});

export const useUserState = () => useRecoilState(USER_STATE);

export const useUserValue = () => useRecoilValue(USER_STATE);

export const useUserSetValue = () => useSetRecoilState(USER_STATE);

export const useUserInfo = () => {
  const [userData, setUserState] = useUserState();

  const { runAsync: getProfile, loading } = useRequest(() => getProfileApi(), {
    cacheKey: "user-info",
    manual: true,
  });

  const getProfileUser = () => {
    if (!userData.xid) {
      getProfile()
        .then((res: any) => {
          console.log(res);
          setUserState(res.data.user);
        })
        .catch((err) => console.log(err));
    }
  };

  return { getProfileUser };
};
