import styles from "./style.module.css"
import { getColorPriority } from "../../functions/taskFanctions"
import DeleteIcon from '@mui/icons-material/Delete';
import apiFunctions from "../../functions/apiFunctions";
import { Checkbox } from "@mui/material";

export default function Task({ data, style, indexTask, handleDoubleClick, handleCheckbox, handleDelete }) {

	let { description, start_date, priority, is_done } = data

	return (
		<div className={styles.Task} style={style}>

			<div className={styles.checkboxContainer}>
				<input type="checkbox" className={styles.highTask} checked={is_done} onChange={(event) => handleCheckbox(event, data, indexTask)} />
			</div>

			<div className={styles.description} onDoubleClick={() => { handleDoubleClick(data) }}>
				{is_done ? <s>{description}</s> : description}
			</div>
			<Checkbox defaultChecked sx={getColorPriority(priority)}/>
			<div>
				<DeleteIcon color="error" onClick={() => { handleDelete(data, indexTask) }} />
			</div>

		</div>
	)
}
