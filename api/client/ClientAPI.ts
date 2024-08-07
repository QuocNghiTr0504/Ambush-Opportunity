import api from "../configs/axiosConfig"

export const ClientAPI = {
    me: async function () {
        const response = await api.request({
            url: `/v1.0/client/me`,
            method: "GET",
        })
        return response
    }
}