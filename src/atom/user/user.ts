// recoil
import { atom } from "recoil";
export interface UserInfoProps {
  id: string;
  name: string;
  phone?: string | number | null;
  img_url?: string | null;
  email?: string | null;
  address?: string | null;
}

export const userInfoAtom = atom<UserInfoProps>({
  key: "USER_INFO", 
  default: {
    id: "",
    name: "",
    phone: null,
    img_url: "",
    address: "",
  },
});
