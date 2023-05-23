import styles from "./style.module.css"
import { getBallPriorityMUI } from "../../functions/taskFanctions"
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox } from "@mui/material";

export default function Task({ key, data, style, indexTask, handleDoubleClick, handleCheckbox, handleDelete, editTask }) {

	let { description, priority, is_done } = data
	let styleCheckbox = { padding: "0px", '&.Mui-checked': { padding: "0px" } }
	let styleBull = { "margin-right": "10px" }

	return (
		<div className={styles.Task} style={style} key={key}>

			<div className={styles.checkboxContainer}>
				<Checkbox sx={styleCheckbox} checked={is_done} onChange={(event) => handleCheckbox(event, data, indexTask)} />
			</div>

			<div className={styles.description} onDoubleClick={() => { handleDoubleClick(data) }}>
				{!editTask && is_done && <s>{description}</s>}
				{!editTask && !is_done && <span>{description}</span>}
				{editTask && editTask.id == data.id && <input onChange={() => { }} value={description}></input>}
				{editTask && editTask.id != data.id && <span>{description}</span>}
			</div>

			<div className={styles.deteleContainer}>
				{getBallPriorityMUI(priority, styleBull)}
				<DeleteIcon color="error" onClick={() => { handleDelete(data, indexTask) }} />
			</div>

		</div>
	)
}


