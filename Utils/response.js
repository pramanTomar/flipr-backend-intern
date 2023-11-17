export const success = (statusCode, result) => {
    return {
        status: 'Ok',
        statusCode,
        result,
    }
}

export const error = (statusCode, message) => {
    return {
        status: 'Error',
        statusCode,
        message,
    }
}