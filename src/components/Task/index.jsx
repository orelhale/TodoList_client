import styles from "./style.module.css"
import { getNamePriority } from "../../functions/taskFanctions"
import DeleteIcon from '@mui/icons-material/Delete';
import apiFunctions from "../../functions/apiFunctions";

export default function Task({ data, style, indexTask, handleDoubleClick, handleCheckbox, handleDelete }) {

	let { description, start_date, priority, is_done } = data

	let getDescription = () => {
		return is_done ? <s>{description}</s> : description;
	}


	return (
		<div
			className={styles.Task}
			style={style}
			onDoubleClick={() => { handleDoubleClick(data) }}
		>
			<div className={styles.checkboxContainer}>
				<input
					type="checkbox"
					checked={is_done}
					onChange={(event) => handleCheckbox(event, data, indexTask)}
				/>
			</div>
			<div className={styles.description}>{getDescription()}</div>
			{/* <td className={styles.td}>{getNamePriority(priority)}</td> */}
			<div><DeleteIcon color="error" onClick={() => { handleDelete(data, indexTask) }} /></div>
		</div>
	)
}
