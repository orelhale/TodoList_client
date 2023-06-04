import axios from "axios";

async function apiFunction(path, type, data, successCallback, errorCallback) {
	try {
		let option = {
			method: type,
			url: ((process.env.REACT_APP_My_SERVER_URL + path)),
			data: data
		}

		return await axios(option)
			.then(data => {
				successCallback && successCallback(data.data)
				return data.data
			})
			.catch(error => {
				errorCallback && errorCallback()
				return null
			})

	} catch (err) {
		return null;
	}
}

export default apiFunction;