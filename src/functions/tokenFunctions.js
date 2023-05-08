import apiFunctions from "./apiFunctions";


function setToken(token) {
    localStorage.token = token
}


function getToken() {
    return localStorage.token
}


function deleteToken() {
    delete localStorage.token
}


async function checkToken() {

    let token = getToken()

    if (!token) {
        console.log("eroor: Not token");
        return false;
    }

    let dataOfUser = await apiFunctions("token", "post", { token: token })

    if (!dataOfUser) {
        console.log("eroor: The token is expired");
        return false;
    }

    return dataOfUser;
}



export { checkToken, setToken, getToken, deleteToken }