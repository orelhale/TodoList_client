import Header from "../Header"
import Main from "../Main"
import Nav from "../Nav"

import socketIO from 'socket.io-client';
import { useContext } from "react";
import Context from "../../context/Context";
import { useEffect } from "react";


export default function Layout() {
	let { setSocker, } = useContext(Context)

	useEffect(() => {
		async function name(params) {

			const createSocket = await socketIO.connect("http://localhost:8080");
			setSocker(createSocket)
		}
		name()
	}, [])

	return (
		<div className="Layout">
			{/* <Header /> */}
			<Main />
			<Nav />
		</div>
	)
}