import { atom } from "recoil";
// import { effects_UNSTABLE } from "recoil-logger-lite";
import {effects_UNSTABLE} from "../logger"

interface IProvince {
    code: string,
    codename: string,
    division_type: string,
    name: string,
    phone_code: string,
}

export const provinceAtom = atom<IProvince[]>({
    key: `PROVINCE`,
    default: [],
    effects_UNSTABLE,
});