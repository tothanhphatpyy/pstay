import { getAccessToken } from '@services/tokenManager';
import { ApiUtils } from './index';
import { PATH } from './path';

export const signUpWebApi = async (data) => {
    return await ApiUtils.post(PATH.sign_up_web, data);
}

export const getProfileApi = async () => {
    const tokenRequest = await getAccessToken();
    return await ApiUtils.request(PATH.get_profile, {token: tokenRequest});
}