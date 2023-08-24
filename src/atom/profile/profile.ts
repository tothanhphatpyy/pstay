// recoil
import { atom } from "recoil";

interface IProfile {
  xid: string;
  name: string;
  phone: string | number | null;
  company_id: string | number | null;
  img_url: string | null;
  email: string | null;
  address: string | null;
}

export const profileAtom = atom<IProfile>({
  key: "USER", // unique ID (with respect to other atoms/selectors)
  default: {
    xid: "",
    name: "Họ và tên",
    phone: "123",
    company_id: "1",
    img_url: "",
    email: "example@example.com",
    address: "",
  }, // default value (aka initial value)
});
