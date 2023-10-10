import { useRecoilState } from "recoil"
import { UserInfoProps, userInfoAtom } from "./user"
import { getUser } from "@services/zalo-api/user";

export const useUser = () => {
    const [ userInfo, setUserInfo ] = useRecoilState<UserInfoProps>(userInfoAtom);

    const authUser = () => {
        const userInfo = getUser();
        console.log('userInfo', userInfo);
    }

    return {
        userInfo,
        setUserInfo,
        authUser,
    }

}