import Header from "../Header"
import Main from "../Main"
import Nav from "../Nav"
import Context from "../../context/Context"
import { useContext, useEffect } from "react"
import { checkToken, setToken, deleteToken } from "../../functions/tokenFunctions"
import { useNavigate } from "react-router-dom"

export default function Layout() {
	let { userData, setUserData } = useContext(Context)
	let navigate = useNavigate()


	useEffect(() => {
		startCheckToken()
	}, [])


	async function startCheckToken() {
		return;
		let dataFromUser = await checkToken();

		if (dataFromUser) {
			setUserData(dataFromUser)
		} else {
			deleteToken()
			setUserData(null)
			navigate("login")
		}
	}


	return (
		<div className="Layout">
			<Header />
			<Main />
			<Nav />
		</div>
	)
}