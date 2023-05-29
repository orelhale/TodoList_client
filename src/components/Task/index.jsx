import styles from "./style.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox } from "@mui/material";
import PriorityBall from "../PriorityBall";

export default function Task({ data, style, indexTask, handleDoubleClick, handleCheckbox, handleDelete }) {
	let { description, priority, is_done } = data

	let styleCheckbox = { padding: "0px", '&.Mui-checked': { padding: "0px", color: "#1890FF" } }

	return (
		<div className={styles.Task} style={style}>

			<div className={styles.checkboxContainer}>
				<Checkbox sx={styleCheckbox} checked={is_done} onChange={(event) => handleCheckbox(event, data, indexTask)} />
			</div>

			<div className={styles.description} onDoubleClick={() => { handleDoubleClick(data) }}>
				{is_done ? <s>{description}</s> : description}
			</div>

			<div className={styles.deteleContainer}>
				<PriorityBall type={priority} className={styles.marginRight} />
				<DeleteIcon color="error" onClick={() => { handleDelete(data, indexTask) }} />
			</div>

		</div>
	)
}
