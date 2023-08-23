import { useRecoilState } from "recoil";
import { configAtom } from "./config";

export const useConfig = () => {
    const [config, setConfig] = useRecoilState(configAtom);

    return { config, setConfig };
}