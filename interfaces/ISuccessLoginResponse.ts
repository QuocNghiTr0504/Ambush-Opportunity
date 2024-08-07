export interface ISuccessLoginResponse {
    email: string,
    id: string,
    userName: string,
    token: string,
    roles: Array<string>
}