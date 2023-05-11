import { IconButton } from "@mui/material";
import styles from "./style.module.css"
import Button from '../Botton';
import { useEffect } from "react";

export default function Pagination({ pagesNum, handleClick, currentPage }) {
	// let toStart = pagesNum <= 3 ? pagesNum : ((currentPage +1) < pagesNum) ? (currentPage -1) : (currentPage -2)
	let arr = [...Array(pagesNum).keys()]
	// console.log("toStart  ",toStart)
	console.log("currentPage  ", currentPage)
	console.log("pagesNum  ", pagesNum)
	console.log("1  ", ((currentPage + 1) < pagesNum))

	let buttonStyle = {
		borderRadius: "50%",
		height: "35px",
		minWidth: "35px",
	}
	let buttonStyleSelect = {
		borderRadius: "50%",
		height: "35px",
		minWidth: "35px",
		backgroundColor: "#1890FF",
		border: "1px solid #FFF",
		color: "#FFF",
	}

	return (
		<>
			{pagesNum && (arr.map((num, index) => <>
				{((index + 1) == (currentPage - 1) || (index + 1) == (currentPage)||(index + 1) == (currentPage + 1)) &&
				<Button
				onClick={() => handleClick && handleClick((index + 1))}
				style={currentPage == (index + 1) ? buttonStyleSelect : buttonStyle}
				value={(index + 1)}
				/>
			}
			</>))}
		</>
	)
}
