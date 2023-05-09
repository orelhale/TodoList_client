import styles from "./style.module.css"
import { getNamePriority } from "../../functions/taskFanctions"

export default function Task({ data, style, handleDoubleClick }) {

	let { description, start_date, priority, is_done } = data

	return (
		<tr
			className={styles.tbody}
			style={style}
			onDoubleClick={() => { handleDoubleClick && handleDoubleClick() }}
		>
			<td className={styles.td}>{description}</td>
			<td className={styles.td}>{getNamePriority(priority)}</td>
			<td className={styles.td}>{String(is_done)}</td>
		</tr>
	)
}