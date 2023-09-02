import { useRecoilState } from "recoil"
import { useMount, useRequest } from "ahooks";
import { getLocationApi } from "@services/api/locationApi";
import { LocationAtom, LocationProps } from "./location";

export const useLocation= () => {
    const [location, setLocation] = useRecoilState<LocationProps[]>(LocationAtom);

    const requestLocation = useRequest(() => getLocationApi(), {
        cacheKey: "location",
        manual: true,
        onSuccess: (res: any) => {setLocation(res)},
    });

    useMount(() => {
        if(location.length < 1){
            requestLocation.runAsync();
        }
    })

    return { location };
}