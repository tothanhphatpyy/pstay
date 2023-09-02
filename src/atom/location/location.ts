import { atom } from "recoil";
import {effects_UNSTABLE} from "@hooks/useRecoilLogger"

export interface LocationProps {
    _id: string,
    name: string,
    image: string,
}

export const LocationAtom = atom<LocationProps[]>({
    key: `LOCATION`,
    default: [],
    effects_UNSTABLE,
});