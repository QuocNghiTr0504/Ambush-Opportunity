import { ILoginInfo } from "@/interfaces/ILoginInfo"
import api from "../configs/unauthorizedAxiosConfig"
import { IRegisterInfo } from "@/interfaces/IRegisterInfo";
import {  getEncryptedData } from "@/helpers/encryptHelper";

export const AuthAPI = {
    login: async function (loginInfo: ILoginInfo) {
        const response = await api.request({
            url: `/v1.0/auth/login`,
            method: "POST",
            data: loginInfo
        })
        return response
    },
    register: async function (registerInfo: IRegisterInfo) {
        const response = await api.request({
            url: `/v1.0/platform/register`,
            method: "POST",
            data: registerInfo,
            headers: { "X-Client-Domain": window.location.origin }
        })

        return response
    },
    fetchToken: async () => {
        let { platformName, encryptedData } = getEncryptedData();
        const response = await api.post('/v1.0/platform/getToken', {
            platformName: platformName,
            encryptedData: encryptedData
        });
        return response;
    },
    confirmEmail: async (userId: string, token: string) => {
        const response = await api.post('/v1.0/auth/confirmEmail', {
            userId, token

        }, { headers: { "X-Client-Domain": window.location.origin } });
        return response;
    },
    resendConfirmationEmail: async (email: string) => {
        const response = await api.post('/v1.0/auth/resendConfirmationEmail', {
            email
        }, { headers: { "X-Client-Domain": window.location.origin } });
        return response;
    }
}