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
			{/* <Checkbox defaultChecked={is_done}  onChange={(event) => handleCheckbox(event, data, indexTask)}/> */}
				<input type="checkbox" className={()=>getColorPriority(indexTask)} checked={is_done} onChange={(event) => handleCheckbox(event, data, indexTask)} />
			</div>

			<div className={styles.description} onDoubleClick={() => { handleDoubleClick(data) }}>
				{is_done ? <s>{description}</s> : description}
			</div>
			
			<div>
		
				<DeleteIcon color="error" onClick={() => { handleDelete(data, indexTask) }} />
			</div>

		</div>
	)
}
