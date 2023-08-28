import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useRequest } from "ahooks";

import { ProfileProps, profileAtom } from "@atom/profile/profile";
import { AuthProps, authAtom } from "@atom/auth/auth";
import { signUpWebApi } from "@services/api/authApi";
import { StorageKey, removeDataToStorage, setDataToStorage } from "@services/storage";

export const useAuth = () => {
    const navigate = useNavigate();
    const [userData, setUserState] = useRecoilState<ProfileProps | null>(profileAtom);
    const [auth, setAuth] = useRecoilState<AuthProps | null>(authAtom);

    const { runAsync: signUpWeb, loading } = useRequest((data) => signUpWebApi(data), {
        cacheKey: "login-web",
        manual: true,
    });

    const loginWeb = (formData: any, urlReturn: any) => {
        signUpWeb(formData).then((res:any) => {
            setUserState(formData);
            setAuth({token: res.data, tokenIsValid: true});
            setDataToStorage(StorageKey.Authen, res.data.token)
            navigate(urlReturn?.from || '/')
        }).catch(err => console.log(err));
    }

    const logout = () => {
        removeDataToStorage(StorageKey.Authen);
        setUserState(null)
        setAuth(null);
        navigate('/login');
    }

    return { auth, setAuth, loginWeb, logout };
}