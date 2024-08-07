import { IErrorResponse } from "@/interfaces/IErrorResponse";
import axios from "axios"

export const getAPIError = (exception: any) => {
    let err: string = 'Unknown error occured';
    if (axios.isAxiosError<IErrorResponse>(exception)) {
        let data = exception.response?.data;
        if (data?.errors) {
            console.log('here')
            let errors = data?.errors;
            let fields = Object.keys(errors);
            //Get the first error in the errors array
            err = errors[fields[0]];
        }
        else if (data?.title) {
            err = data?.title;
        }
    }
    return err;
}
export const isClient = () => {
    return typeof window !== 'undefined'
}
export const getAcceptLanguageHeader = () => {
    let curLang = (isClient() ? localStorage?.getItem('i18nextLng') : null) ?? 'en-US'

    let header = `${curLang},zh;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6`
    return header
}