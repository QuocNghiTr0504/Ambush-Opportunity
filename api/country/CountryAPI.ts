import api from "../configs/axiosConfig"

export const CountryAPI = {
    getSupportedCountries: async () => {
        const response = await api.request({
            url: `/v1.0/country`,
            method: "GET",
        })
        return response
    }
}