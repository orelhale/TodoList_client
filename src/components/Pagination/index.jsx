import { IconButton } from "@mui/material";
import styles from "./style.module.css"
import Button from '../Botton';
import { useEffect } from "react";

export default function Pagination({ pagesNum, handleClick }) {
	let arr = []
	let num = !pagesNum ? 0 : pagesNum
	for (let i = 0; i < num; i++) {
		arr.push("")
	}
	let buttonStyle = {
		borderRadius: "50%",
		height: "35px",
		minWidth: "35px",
	}
	return (
		<>
			{pagesNum && arr.map((num) => <><Button onClick={() => handleClick && handleClick((num + 1))} style={buttonStyle} value={(num + 1)} /></>)}
		</>
	)
}
