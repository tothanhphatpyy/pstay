// recoil
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useUserState } from "./user_info";
import { useRequest } from "ahooks";
import { signUpWebApi } from "@services/api/auth_api";
import { useNavigate } from "react-router-dom";
import { isTokenValid } from "@services/tokenManager";
import { StorageKey, getDataToStorage, removeDataToStorage, setDataToStorage } from "@services/storage";

interface AuthState {
    token: string | null,
    tokenIsValid: boolean
  }

const AUTH_STATE = atom<AuthState>({
    key: 'AUTH_STATE', // unique ID (with respect to other atoms/selectors)
    default: {
        token: localStorage.getItem(StorageKey.Authen),
        tokenIsValid: isTokenValid(),
    },
});

export const useAuthState = () => useRecoilState(AUTH_STATE);

export const useAuthValue = () => useRecoilValue(AUTH_STATE);

export const useAuthSetValue = () => useSetRecoilState(AUTH_STATE);

export const useAuth = () => {
    const navigate = useNavigate();
    const [userData, setUserState] = useUserState();
    const [, setAuth] = useAuthState();

    const { runAsync: signUpWeb, loading } = useRequest((data) => signUpWebApi(data), {
        cacheKey: "login-web",
        manual: true,
    });


    const loginWeb = (formData, urlReturn) => {
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

    return { loginWeb, logout };
}