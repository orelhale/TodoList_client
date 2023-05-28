import axios from "axios";

async function apiFunction(path, type, data, callbackSuccess, callbackError) {
    try {
        let option = {
            method: type,
            url: ((process.env.REACT_APP_My_SERVER_URL + path)),
            data: data
        }

        return await axios(option)
            .then(
                (data) => {
                    callbackSuccess && callbackSuccess(data.data)
                    return data.data
                },
                (error) => {
                    callbackError && callbackError()
                    return null
                }
            )

    } catch (err) {
        return null;
    }
}

export default apiFunction;