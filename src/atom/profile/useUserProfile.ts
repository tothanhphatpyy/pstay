import { useRecoilState } from "recoil";
import { useMount, useRequest } from "ahooks";
import { getProfileApi } from "@services/api/auth_api";
import { ProfileProps, profileAtom } from "@atom/profile/profile";

export const useUserProfile = () => {
  const [userProfile, setUserState] = useRecoilState<ProfileProps>(profileAtom);

  const requestProfile = useRequest(() => getProfileApi(), {
    cacheKey: "user-info",
    manual: true,
    onSuccess: (res: any) => setUserState(res.data.user),
    onError: (err) => console.log(err)
  });

  useMount(() => {
    if(!userProfile.xid){
      requestProfile.runAsync();
    }
  })

  return { userProfile, setUserState };
};
