export const responseSuccess = (code, data, message) => {
    return {
        status: code,
        data,
        message
    }
}