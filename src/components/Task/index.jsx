import styles from "./style.module.css"
import { getBallPriorityMUI, getColorPriority, getColorPriorityMUI } from "../../functions/taskFanctions"
import DeleteIcon from '@mui/icons-material/Delete';
import apiFunctions from "../../functions/apiFunctions";
import { Checkbox } from "@mui/material";

export default function Task({ data, style, indexTask, handleDoubleClick, handleCheckbox, handleDelete }) {

	let { description, start_date, priority, is_done } = data
	let styleCheckbox = { padding: "0px", '&.Mui-checked': { padding: "0px" } }
	let styleBull = { "margin-right": "10px" }
	
	return (
		<div className={styles.Task} style={style}>

			<div className={styles.checkboxContainer}>
				{/* <Checkbox sx={getColorPriorityMUI(priority)} checked={is_done} onChange={(event) => handleCheckbox(event, data, indexTask)} /> */}
				<Checkbox sx={styleCheckbox} checked={is_done} onChange={(event) => handleCheckbox(event, data, indexTask)} />
				{/* <input type="checkbox" checked={is_done} onChange={(event) => handleCheckbox(event, data, indexTask)} /> */}
			</div>

			<div className={styles.description} onDoubleClick={() => { handleDoubleClick(data) }}>
				{is_done ? <s>{description}</s> : description}
			</div>

			<div className={styles.deteleContainer}>
				{getBallPriorityMUI(data.priority, styleBull)}
				<DeleteIcon color="error" onClick={() => { handleDelete(data, indexTask) }} />
			</div>

		</div>
	)
}
