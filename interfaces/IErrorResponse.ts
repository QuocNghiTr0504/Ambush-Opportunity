export interface IErrorResponse {
    type: "BadRequestException" | "InternalServerError",
    title: string | null,
    status: number,
    errors:  any,
    errorCode: number
}