import { ApiUtils } from './index';
import { PATH } from './path';

export const getLocationApi = async () => {
    return await ApiUtils.request(PATH.get_location);
}
