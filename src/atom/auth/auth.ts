// recoil
import { atom } from "recoil";
import { isTokenValid } from "@services/tokenManager";
import { StorageKey } from "@services/storage";

export interface AuthProps {
    token: string | null,
    tokenIsValid: boolean
  }

export const authAtom = atom<AuthProps>({
    key: 'AUTH', // unique ID (with respect to other atoms/selectors)
    default: {
        token: localStorage.getItem(StorageKey.Authen),
        tokenIsValid: isTokenValid(),
    },
});
