// recoil
import { atom } from "recoil";

export const profileAtom = atom({
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


